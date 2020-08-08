import React, { Component } from 'react';
import './login.css'


function validate(thisInp, ThisTxt, password = null) {
    if (thisInp === "email") {
        return ThisTxt.includes("@") && ThisTxt.includes(".");
    } else if (thisInp === "password") {
        return ThisTxt.length >= 6 ? true : false;
    } else {
        return ThisTxt ? true : false;
    }
}

class Login extends Component {
    state = {
        email: {
            value: '',
            isValid: false,
            isTouched: false
        },
        password: {
            value: '',
            isValid: false,
            isTouched: false
        },
    }


    handeOnInputChange = e => {
        const { name, value } = e.target;
        const validateChecked = validate(name, value, this.state.password.value)
        this.setState(prevState => {
            return {
                ...prevState,
                [name]: {
                    ...prevState[name],
                    value,
                    isTouched: true,
                    isValid: validateChecked,
                }
            }
        })
    }

    componentDidMount() {
        localStorage.removeItem('user')
    }

    handleLogin = e => {
        e.preventDefault()
        const { history: {push} } = this.props
        let users = JSON.parse(localStorage.getItem('users'))
        const email = this.state.email.value
        const password = this.state.password.value
        users.find(user => {
            if (user.email === email, user.password === password) {
            localStorage.setItem('user', 'IsLoggedIn')
            push('/')
            } else {
                console.log("centr chi");
            }
        })

    }


    render() {
        const { email, password } = this.state
        return (
            <div className='login_cont'>
                <form className='login_form' onSubmit={this.handleLogin} className='login_form'>
                    <input type='email' name='email' placeholder='Enter email' className='form_input'
                        onChange={this.handeOnInputChange}
                        style={
                            { border: email.isTouched ? (email.isValid ? "2px solid green" : "2px solid red") : "2px solid gray" }
                        }
                    />
                    <input type='password' name='password' placeholder='Enter password' className='form_input'
                        onChange={this.handeOnInputChange}
                        style={
                            { border: password.isTouched ? (password.isValid ? "2px solid green" : "2px solid red") : "2px solid gray" }
                        }
                    />
                    <button className='form_btn'>login</button>
                </form>
            </div>
        )
    }
}

export default Login