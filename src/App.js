import React from 'react';
import './App.css';
import CounterOne from "./components/counterOne";
import CounterTwo from "./components/counterTwo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          123
        </p>
        <CounterOne/>
        <CounterTwo/>
      </header>
    </div>
  );
}

export default App;
