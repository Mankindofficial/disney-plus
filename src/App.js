import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'

class App extends Component {

  render() {
    return (
      <div className='App'>
        <Router>
			<Route exact path="/">
          		<h3>Initializing App and Installing all required packages</h3>
			</Route>
        </Router>
      </div>
    );
  }
}

export default App;
