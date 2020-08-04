import React, { Component } from 'react';
import './index.css' 
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
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
          <Route path="/users" component={Users}></Route>
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    )
  }
}





export default App;
