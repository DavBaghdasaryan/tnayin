import React, { Component } from 'react'
import "./register.css"

function validate(thisInp, ThisTxt, password = null) {
    if (thisInp === "email") {
        return ThisTxt.includes("@") && ThisTxt.includes(".");
    } else if (thisInp === "password") {
        return ThisTxt.length >= 6 ? true : false;
    } else if (thisInp === "confirmpassword") {
        return ThisTxt === password;
    } else {
        return ThisTxt ? true : false;
    }
}

class Register extends Component {
    state = {
        name: {
            value: '',
            isValid: false,
            isTouched: false
        },
        Lastname: {
            value: '',
            isValid: false,
            isTouched: false
        },
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
        confirmpassword: {
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

    handleRegister = e => {
        e.preventDefault();
        const name = this.state.name.value
        const Lastname = this.state.Lastname.value
        const email = this.state.email.value
        const password = this.state.password.value
        let users = localStorage.getItem('users')

        if(!users) {
            localStorage.setItem('users', JSON.stringify([]));
        }
        
        users = JSON.parse(localStorage.getItem('users'));
        console.log(users);
        users.push({name, Lastname, email, password});

        localStorage.setItem('users', JSON.stringify(users));
    }

    render() {
        const { name, email, Lastname, password, confirmpassword } = this.state
        return (
            <div className = "register_cont">
                <form className = "register_form" onSubmit={this.handleRegister}>
                    <input type="text" name='name' placeholder="name" className="form_input"
                        onChange={this.handeOnInputChange}
                        style={
                            { border: name.isTouched ? (name.isValid ? "2px solid green" : "2px solid red") : "2px solid gray" }
                        }
                    />
                    <input type="text" name='Lastname' placeholder="Lastname" className="form_input"
                        onChange={this.handeOnInputChange}
                        style={
                            { border: Lastname.isTouched ? (Lastname.isValid ? "2px solid green" : "2px solid red") : "2px solid gray" }
                        }
                    />
                    <input type="email" name='email' placeholder="email" className="form_input"
                        onChange={this.handeOnInputChange}
                        style={
                            { border: email.isTouched ? (email.isValid ? "2px solid green" : "2px solid red") : "2px solid gray" }
                        }
                    />
                    <input type="password" name='password' placeholder="password" className="form_input"
                        onChange={this.handeOnInputChange}
                        style={
                            { border: password.isTouched ? (password.isValid ? "2px solid green" : "2px solid red") : "2px solid gray" }
                        }
                    />
                    <input type="password" name='confirmpassword' placeholder="confirmpassword" className="form_input"
                        onChange={this.handeOnInputChange}
                        style={
                            { border: confirmpassword.isTouched ? (confirmpassword.isValid ? "2px solid green" : "2px solid red") : "2px solid gray" }
                        }
                    />
                    <button className="form_btn">Send</button>
                </form>
            </div>

        )
    }

}

export default Register 