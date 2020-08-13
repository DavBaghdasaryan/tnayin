import React, { Component } from 'react'
import PersonList from '../../Axios.js'

class Home extends Component {
    render() {
        return(
            <div>
                <PersonList />
            </div>
        )
    }
}

export default Home