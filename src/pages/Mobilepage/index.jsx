import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import MobileHeader from './MobilePageHeader'
import MobileRegisterform from './MobilePageRegister'
import MobileLoginform from './MobilePageLogin'


class MobilePage extends Component {
    render() {

        return (
            <div>
                <MobileHeader />
                <Switch>
                    <Route exact path="/" component={MobileRegisterform} />
                    <Route path="/Login" component={MobileLoginform} />
                    <Redirect from="*" to="/" />
                </Switch>
            </div>
        )
    }
}

export default MobilePage