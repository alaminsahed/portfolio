import React from 'react';
import Home from './Pages/Home';
import "./App.css";
import About from './Component/About';

const App = () => {
  return (
    <div className="app">
      <Home/>
      <About/>
    </div>
  );
};

export default App;