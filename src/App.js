import React from 'react';

import './App.css';
import CounterClass from "./CounterClass";
import CounterHook from './CounterHook';
import CounterClasslifecycle from './CounterClasslifecycle';
import CounterHookLifecycle from './CounterHookLifecycle'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CounterClass />
        <CounterHook />
        <CounterClasslifecycle />
        <CounterHookLifecycle />
      </header>
    </div>
  );
}

export default App;
