import React, {useReducer} from 'react';
import './App.css';
import {authenticate, User} from "./api/authenticate";
import Header from "./Header";
import Main from "./Main";
import authorize from "./api/authorize";



function App() {
    const [{user, permissions, loading}, dispatch] = useReducer(reducer, initilizeState)

    async function handleSignInClick() {
        console.log('clicked');
        dispatch({type: 'authenticate'});
        const authenticatedUser = await authenticate();
        dispatch({
            type: 'authenticated',
            user: authenticatedUser,
        })
        if (authenticatedUser !== undefined) {
            dispatch({type: 'authorize'});

            const authorizedPermissions = await authorize(authenticatedUser.id);
            dispatch({type: 'authorized', permissions: authorizedPermissions});
        }
    }

    return (
        <div className="App">
            <Header user={user} onSignInClick={handleSignInClick} loading={loading} />
            <Main user={user} permissions={permissions} />
        </div>
    );
}

export default App;
