import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/Home';
import Nav from './components/Nav';
import Card from './components/Card';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';

import './App.css';

class App extends Component {
  render() {
    return (
        <div>
          <Nav />
          <Router>
            <div>
              <Route exact path="/portfolio" component={Portfolio} />
              <Route exact path="/resume" component={Resume} />
              <Route exact path="/card" component={Card} />
              <Route exact path="/" component={Home} />  
            </div>
          </Router>
        </div>
    );
  }
}

export default App;
