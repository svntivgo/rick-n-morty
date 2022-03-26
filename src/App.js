import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { Characters } from "./components/Characters";

function App() {
  return (
    <div className="App">
      <Characters />
    </div>
  );
}

export default App;
