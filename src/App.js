import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'

class App extends Component {

  render() {
    return (
      <div className='App'>
        <Router>
          <h3>Initializing App and Installing all required packages</h3>
        </Router>
      </div>
    );
  }
}

export default App;
