import React from 'react';
// import { ReactComponent as logo } from './logo.svg';
import './App.css';
import PersonScore from './PersonScore';
import ReducerPersonScore from './ReducerPersonScore';
import Alert from './Alert';
import ProductsPage from './ProductsPage';
import Header from './Header';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Outlet />
      {/* <div className="App">
        <ProductsPage />
        <PersonScore />;
        <ReducerPersonScore />
        <Alert />
      </div> */}
    </>
  );
}

export default App;
