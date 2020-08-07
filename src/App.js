import React, { Component } from 'react';
import './index.css'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Register from './pages/Home'
import Login from './pages/Users'
import Nav from './components/Header/Nav'
import withMobileSize from './withMobileSize'
import MobilePage from './pages/Mobilepage'



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
              <Route exact path="/" component={Register} />
              <Route path="/Login" component={Login} />
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
