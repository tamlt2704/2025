import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Alert from './Alert';

// const logo = require("./logo.svg") as string;

function App() {
  const unused = 'something';
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <Alert heading={'success'} closeable>
          Everything is really good
        </Alert>
      </header>
    </div>
  );
}

export default App;
