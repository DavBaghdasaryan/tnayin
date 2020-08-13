import React, { Component } from 'react';
import './index.css'


//  Router

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

//  Pages
import Register from './pages/Register'
import Login from './pages/Login/index'
import Home from './pages/Home/index'
import MobilePage from './pages/Mobilepage'
import PrivateRoute from './PrivateRoute'
import User from './pages/User'

//   Nav
import Nav from './components/Header/Nav'

//  withMobileSize
import withMobileSize from './withMobileSize'



class App extends Component {

  render() {
    const { width } = this.props
    console.log(this.props);
    return (
      <Router>
        <div>

          {width > 992 ? (
            <Nav />
          ): (
              null
            )}

          {width > 992 ? (
            <Switch>
              <Route exact path="/register" component={Register} />
              <Route path="/Login" component={Login} />
              <PrivateRoute path="/" component={Home} />
              <PrivateRoute path="/user:UserId" component={User} />

              <Redirect from="*" to="/" />
            </Switch>
          ): (
              <MobilePage />
              
            )}

        </div>
      </Router>
    )
  }
}





export default withMobileSize(App);
