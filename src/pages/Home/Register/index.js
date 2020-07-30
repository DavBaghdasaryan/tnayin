import React, { Component } from 'react'

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
        this.setState(prevState => {
            return {
                ...prevState,
                [name]: {
                    ...prevState[name],
                    value
                }
            }
        })
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <input name='name' onChange={this.handeOnInputChange} />
                <input name='Lastname' onChange={this.handeOnInputChange} />
                <input name='email' onChange={this.handeOnInputChange} />
                <input name='password' onChange={this.handeOnInputChange} />
                <input name='confirmpassword' onChange={this.handeOnInputChange} />
            </div>

        )
    }

}

export default Register 