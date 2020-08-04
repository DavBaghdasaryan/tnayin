import React, { Component } from 'react'


class Login extends Component {

state = {
    email: '',
    password: '',
}


handeOnInputChange = e => {
    const { name, value } = e.target;
    this.setState(prevState => {
        return {
            ...prevState,
            [name]: {
                ...prevState[name],
                value,
            }
        }
    })
}


handleLogin = e => {
    e.preventDefault()
    let users = JSON.parse(localStorage.getItem('users'))
    const email = this.state.email.value
    const password = this.state.password.value
    users.find(user => {
       if(user.email === email) {
        console.log("centra");
       } else {
        console.log("centr chi");
       }
       if(user.password === password) {
        console.log("centra");
    } else {
        console.log("centr chi");
    }
    })

}


    render() {

        return (
            <div>
                <form className='login_form' onSubmit={this.handleLogin}>
                    <input type='email' name='email' placeholder='Enter email' onChange={this.handeOnInputChange} />
                    <input type='password' name='password' placeholder='Enter password' onChange={this.handeOnInputChange} />
                    <button>login</button>
                </form>
            </div>
        )
    }
}

export default Login