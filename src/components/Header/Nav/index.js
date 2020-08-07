import React, { Component } from 'react';
import {Link} from 'react-router-dom'



class Nav extends Component {
    render() {
        return (
            <nav>
                <h3>Web Page</h3>
                <ul className='nav-links'>
                    <Link to='/' className='links-style'>
                    <li>Register</li>
                    </Link>
                    <Link to='/login' className='links-style'>
                    <li>Login</li>
                    </Link>
                </ul>
            </nav>
        )
    }
}

export default Nav