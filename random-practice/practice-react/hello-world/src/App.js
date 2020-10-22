import React from 'react';
import {Greet} from "./components/Greet"
import Hello from "./components/Hello"
import './App.css';

function App() {
  return (
    <div className="App">
      <Greet name="Urethras" class="Gobbler"/>
      <Greet name="Gibs" class="Muncher"/>
      <Greet name="Barfas" class="Slimer"/>
      <Hello />
    </div>
  );
}

export default App;
