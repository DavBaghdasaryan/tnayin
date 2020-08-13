import React, { Component } from 'react'
import axios from 'axios'

class User extends Component {
    state = {
        user: {
            name: ''
        }
    }

    componentDidMount() {
        const { match: { params: { userId } } } = this.props
        axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(res => this.setState({user: res.data}))
    }

render() {
    return(
null
    )
}

}

export default User