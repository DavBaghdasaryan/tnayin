import React, { Component } from 'react'


class Login extends Component {

handleLogin = e => {
    e.preventDefault()
    let users = JSON.parse(localStorage.getItem('users'))
    users.find(user => {

    })

}


    render() {
        return (
            <div>
                <form className='login_form' onSubmit={this.handleLogin}>
                    <input type='email' name='email' placeholder='Enter email' />
                    <input type='password' name='password' placeholder='Enter password' />
                    <button>login</button>
                </form>
            </div>
        )
    }
}

export default Login