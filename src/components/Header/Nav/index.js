import React, { Component } from 'react';
import {Link} from 'react-router-dom'



class Nav extends Component {
    render() {
        return (
            <nav>
                <h3>Logo</h3>
                <ul className='nav-links'>
                    <Link to='/' className='links-style'>
                    <li>Home</li>
                    </Link>
                    <Link to='/users' className='links-style'>
                    <li>Users</li>
                    </Link>
                </ul>
            </nav>
        )
    }
}

export default Nav