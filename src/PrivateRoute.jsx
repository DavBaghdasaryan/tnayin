import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...otherProps }) => {
    return localStorage.getItem('user') ? (
        <Route component={Component} {...otherProps} />
    ) : (
        <Redirect from='*' to="/register" />
    )
}

export default PrivateRoute