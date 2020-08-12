import React from 'react';
import logo from './logo.svg';
import './App.css';
function App() {
  const todos = [
    'Go to market',
    'Buy food',
    'Make dinner'
  ];
  const list = todos.map(x => <li>{x}</li>)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul>
          {list}
        </ul>
      </header>
    </div>
  );
}

export default App;
