import React from 'react';
// import { ReactComponent as logo } from './logo.svg';
import './App.css';
import PersonScore from './PersonScore';
import ReducerPersonScore from './ReducerPersonScore';
import Alert from './Alert';

function App() {
  return (
    <div className="App">
      App
      <PersonScore />;
      <ReducerPersonScore />
      <Alert />
    </div>
  );
}

export default App;
