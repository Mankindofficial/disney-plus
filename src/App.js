import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import Login from './components/Login'
import Header from './components/Header'
import Home from './components/Home'
import MovieDetail from './components/MovieDetail'
import './App.css'

const mapStateToProps = state => {
  return {
    user: state.user.user
  }
}

class App extends Component {

  render() {
    return (
      <div className='App'>
        <Router>
          <Header />
        	<Switch>
  	  			<Route exact path="/">
  	  				{this.props.user ? <Redirect to="/home" /> : <Login />}
  	  			</Route>
            <Route path="/home">
              {this.props.user ? <Home /> : <Redirect to="/" />}
            </Route>
            <Route path="/detail/:id">
              {this.props.user ? <MovieDetail /> : <Redirect to="/" />}
            </Route>
        	</Switch>
        </Router>
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(App);
