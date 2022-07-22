import './App.css';
import React from 'react';
import Title from './components/Title';
// import MainForm from './components/MainForm';
import Items from './components/Items';

function App(props) {
  return (
    <div className="App">
      <Title/>
      <Items/>
    </div>
  );
}

export default App;
