import {User} from "./api/authenticate";
import React, {createContext, Dispatch} from "react";

type Props = {
    children?: React.ReactNode;
}
type State = {
    user: undefined | User;
    permissions: undefined | string[];
    loading: boolean;
}

type Action =
    | {
    type: "authenticate";
}
    | {
    type: "authenticated";
    user: User | undefined;
}
    | {
    type: "authorize";
}
    | {
    type: "authorized";
    permissions: string[];
};

function reducer(state: State, action: Action): State {
    switch (action.type) {
        case "authenticate":
            return {...state, loading: true};
        case "authenticated":
            return {...state, loading: false, user: action.user};
        case "authorize":
            return {...state, loading: true};
        case "authorized":
            return {...state, loading: false, permissions: action.permissions};
        default: return state;
    }
}
const initilizeState: State = {
    user: undefined,
    permissions: undefined,
    loading: false,
};

type AppContextType = State & {
    dispatch: React.Dispatch<Action>;
}

const AppContext = createContext<AppContextType>({...initilizeState, dispatch: ()=>{}});

export default function AppProvider({ children }: Props) {
    return <AppContext.Provider
        value={
            {user, permissions, loading, dispatch}
        }>
        {children}
    </AppContext.Provider>;
}