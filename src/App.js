import React from 'react';
// import Home from './Pages/Home';
// import Navbar from './Component/Navbar';
// // import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";

import HeaderMain from './Pages/HeaderMain';
import "./App.css"


function App() {
  return (
    <div className="app">
    {/*<Router>
    
    <Switch>
    <Route path="/home" component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="/skills" component={Skill}/>
    <Route path="/" exact component={Home}/>
    </Switch>
    </Router>*/}
    <HeaderMain/>
    </div>

    
  );
}

export default App;
