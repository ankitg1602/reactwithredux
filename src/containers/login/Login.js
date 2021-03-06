import React, { Component } from 'react';
import './Login.css';
import LogoAI from '../../assets/media/images/mainpage.jpg';

import _ from 'lodash'
class Login extends Component {
  constructor(props) {
    super();
    this.state = {
      username: '',
      password: '',
      errors: {},
      errorMessage: false,
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  componentDidMount() {
    if (localStorage.getItem('userId')) {
      this.props.history.push('/dashboard')
    }
  }

  onSubmit(e) {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password,
    };
    if (this.state.email && this.state.password) {
      localStorage.setItem('userId', 1);
      this.props.history.push('/dashboard');
    } else {
      this.setState({
        errors: {
          message: 'Email and password required',
          password: '',
          email: '',
        },
      });
    }
  }

  keyPress = e => {
    if (e.keyCode === 13) {
      this.props.history.push('/dashboard');
    }
  };

  render() {
    const { errors } = this.state;
    const message = errors && !!errors.message && !_.isEmpty(errors.message) ? errors.message : '';

    return (
      <div className='d-md-flex h-md-100 align-items-center' style={{ overflowY: 'hidden' }}>
        <div
          id='leftImgdiv'
          className='col-md-4 p-0 bg-indigo h-md-100'
          style={{ backgroundImage: `url(${LogoAI})`}}
        >
        </div>
        <div id='divRight' className='col-md-8 h-md-100 loginarea'>
          <div className='row j-c-f-end  p-top-left'>
          </div>
          <div id='signinform'>
            <form className='formWidth' onSubmit={this.onSubmit} onKeyUp={e => this.keyPress(e)}>
              <h4 id='signIntext'>
                Sign in to <span id='promoColor1'>Dashboard</span>
              </h4>
              <div className='form-group mt-5'>
                <label className='form-label' htmlFor='email'>
                  EMAIL
                </label>
                <input
                  name='email'
                  type='email'
                  className='form-control'
                  id='loginInputEmail1'
                  aria-describedby='emailHelp'
                  placeholder='E-mail'
                  required=''
                  value={this.state.email}
                  onChange={this.onChange}
                  error={!_.isEmpty(errors) && errors.email ? errors.email : ''}
                />
              </div>
              <div className='form-group'>
                <label className='form-label' htmlFor='password'>
                  PASSWORD
                </label>

                <input
                  name='password'
                  type='password'
                  className='form-control'
                  id='loginPassword'
                  placeholder='Password'
                  required=''
                  value={this.state.password}
                  onChange={this.onChange}
                  error={!_.isEmpty(errors) && errors.password ? errors.password : ''}
                />
                <span id='forgtpas'>
                  <div className='text-cyan' style={{ cursor: 'pointer' }}>
                  </div>
                </span>
              </div>
              <p style={{ color: 'red' }}>{message}</p>
              <div id='btndiv2'>
                <button
                  type='submit'
                  className='btn btn-primary btn-square shadow-sm btnsignin double-shade-button'>
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;

