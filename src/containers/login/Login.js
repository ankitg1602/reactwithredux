import React, { Component } from 'react'
import { findByLabelText } from '@testing-library/react';
// import Dashboard from './../dashboard/Dashboard'

class Login extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: ''
        }
    }

    onLogin = () => {
        this.props.history.push('/dashboard');
    }
    render() {
        return <div style={{backgroundColor: 'silver', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '900px', height: '945px'}}>
            
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <h2>Login</h2>
                <div style={{padding: '10px'}}>
                    <label style={{padding:'10px'}}>Username</label>
                    <input type="text" style={{padding:'10px'}}></input>
                </div>
                <div style={{padding: '10px'}}>
                    <label style={{padding:'10px'}}>Password</label>
                    <input type="password" style={{padding:'10px'}}></input>
                </div>
                <button onClick={this.onLogin} style={{padding:'10px'}}>Login</button>
            </div>
           
        </div>
    }
}

export default Login