import React, { Component } from "react"
import { Link } from 'react-router-dom'


class MobileHeader extends Component {
    render() {
        return (
            <div>
                <header>
                    <div>
                        <nav className='nav'>
                            <h1>Mobile page</h1>

                            <ul className="nav-links">
                                <Link to='/' className='links-style'>
                                    <li>Register</li>
                                </Link>
                                <Link to='/login' className='links-style'>
                                    <li>Login</li>
                                </Link>
                            </ul>
                        </nav>
                    </div>
                </header>
            </div>
        )
    }
}

export default MobileHeader