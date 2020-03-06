import React, { Component } from 'react'
import Dashboard from './../dashboard/Dashboard'

class Login extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: ''
        }
    }
    render() {
        return <div>
            <div>Login</div>
            <div>
                <div>
                    <label>Username</label>
                    <input type="text"></input>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password"></input>
                </div>
                <button>Login</button>
            </div>
            <Dashboard/>
        </div>
    }
}

export default Login