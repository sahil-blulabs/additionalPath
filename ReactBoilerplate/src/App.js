import React from 'react';
import { hot } from 'react-hot-loader/root'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

// export default App; // Old stle of reloading with react.
export default process.env.NODE_ENV === "development" ? hot(App) : App
// New style of reloading with no refresh instant update capability.
