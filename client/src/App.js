import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/Home'
import Nav from './components/Nav'
import './App.css';

class App extends Component {
  render() {
    return (
        <div>
          <Nav />
          <Router>
            <Route exact path="*" component={Home} />  
          </Router>
        </div>
    );
  }
}

export default App;
