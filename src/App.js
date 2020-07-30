import React, { Component } from 'react';
import './index.css' 
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Users from './pages/Users'
import Nav from './components/Header/Nav'


class App extends Component {


  render() {
    return (
      <Router>
        <Nav />
        <Switch>
        <Route exact path="/" component={Home}></Route>
          <Route exact path="/users" component={Users}></Route>
        </Switch>
      </Router>
    )
  }
}



export default App;
