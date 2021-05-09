import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './components/Login'
import Header from './components/Header'
import Home from './components/Home'
import MovieDetail from './components/MovieDetail'
import './App.css'

class App extends Component {

  render() {
    return (
      <div className='App'>
        <Router>
          <Header />
        	<Switch>
  	  			<Route exact path="/">
  	  				<Login />
  	  			</Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/detail/:id">
              <MovieDetail />
            </Route>
        	</Switch>
        </Router>
      </div>
    );
  }
}

export default App;
