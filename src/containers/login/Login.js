// // import React, { Component } from 'react'
// import { findByLabelText } from '@testing-library/react';


// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
// //import { loginUser } from '../../actions/auth'
// //import { logoutUser } from '../../actions/auth'
// import './Login.css';
// import _ from 'lodash';
// // import Threedots from '../../../assets/media/images/threedots.svg';
// import LogoAI from '../../../assets/media/images/logo-ai.png';
// import NewUp from '../../../assets/media/images/New-up.png';

// import {
//   loginUser,
//   // loginUserSuccess,
//   // loginUserError,
//   // logoutUser,
//   // logoutUserSuccess,
//   // logoutUserError,
// } from './LoginActions';

// // import {setAuthToken} from '../utils/setAuthToken' ;

// class Login extends Component {
//   constructor(props) {
//     super();
//     this.state = {
//       username: '',
//       password: '',
//       errors: {},
//       errorMessage: false,
//     };

//     this.onChange = this.onChange.bind(this);
//     this.onSubmit = this.onSubmit.bind(this);
//   }

//   onChange(e) {
//     this.setState({ [e.target.name]: e.target.value });
//   }

//   componentWillReceiveProps(nextProps) {
//     // if (nextProps.authReducer.isAuthenticated) {
//     //   this.props.history.push('/vis/budgetplanning')
//     // }

//     if (nextProps.errors) {
//       this.setState({ errors: nextProps.errors });
//     }
//     //  !!nextProps.userData
//     if (!!nextProps.success && !nextProps.errors) {
//       //this.setState({ errors: nextProps.errors })
//       this.props.history.push('/vis/dashboard');
//     }
//   }

//   onSubmit(e) {
//     e.preventDefault();
//     const userData = {
//       email: this.state.email,
//       password: this.state.password,
//     };
//     //this.props.history.push('/vis/dashboard')
//     if (this.state.email && this.state.password) {
//       this.props.loginUser(userData);
//     } else {
//       this.setState({
//         errors: {
//           message: 'Email and password required',
//           password: '',
//           email: '',
//         },
//       });
//     }
//   }

//   keyPress = e => {
//     if (e.keyCode === 13) {
//       // const userData = {
//       //   email: this.state.email,
//       //   password: this.state.password,
//       // };
//       this.props.history.push('/vis/dashboard');
//       //this.props.loginUser(userData)
//     }
//   };

//   render() {
//     // const { errors, email, password} = this.state;
//     const { errors } = this.state;
//     const message = errors && !!errors.message && !_.isEmpty(errors.message) ? errors.message : '';

//     return (
//       <div className='d-md-flex h-md-100 align-items-center' style={{ overflowY: 'hidden' }}>
//         <div
//           id='leftImgdiv'
//           className='col-md-4 p-0 bg-indigo h-md-100'
//           style={{ backgroundImage: `url(${NewUp})` }}>
//           <div className='divleftContent'>
//             <ul className='nav justify-content navTopLeft'>
//               <li className='nav-item'>
//                 <img id='logoImgLeft' src={LogoAI} style={{ width: '26%' }} />
//               </li>
//             </ul>
//             <div
//               id='subdiv-login'
//               className='text-white d-md-flex align-items-center p-5 text-center '>
//               <div className='logoarea pt-5 pb-5' style={{ width: '100%' }}>
//                 <p className='mb-4 mt-3 login-text-right'>
//                   Merchandising Optimization Suite <br />
//                   <span style={{ fontSize: '1.1rem' }}>Enterprise Edition</span>
//                 </p>
//                 <div id='btndiv-login'>
//                   <button
//                     type='submit'
//                     className='btn btn-primary btn-square shadow-sm double-shade-contactus'>
//                     Contact Us
//                   </button>
//                 </div>
//               </div>
//             </div>
//             <footer className='page-footer'>
//               <div className='footer-copyright text-center py-3 text-white'>
//                 ©copyright@impactanalytics2019
//               </div>
//             </footer>
//           </div>
//         </div>
//         <div id='divRight' className='col-md-8 h-md-100 loginarea'>
//           <div className='row j-c-f-end  p-top-left'>
//             <div className='col-md-3 text-right'>
//               <p className='font-bold color-blue p-top-textin'> Don't have an Account?</p>
//             </div>
//             <div className='col-md-2 text-right'>
//               <button className='btn get-started'>GET STARTED</button>
//             </div>
//           </div>
//           <div id='signinform'>
//             <form className='formWidth' onSubmit={this.onSubmit} onKeyUp={e => this.keyPress(e)}>
//               <h4 id='signIntext'>
//                 Sign in to <span id='promoColor1'>Merchandising Optimization Suite</span>
//               </h4>
//               <p>Enter your details below.</p>
//               <div className='form-group mt-5'>
//                 <label className='form-label' htmlFor='email'>
//                   EMAIL
//                 </label>
//                 <input
//                   name='email'
//                   type='email'
//                   className='form-control'
//                   id='loginInputEmail1'
//                   aria-describedby='emailHelp'
//                   placeholder='E-mail'
//                   required=''
//                   value={this.state.email}
//                   onChange={this.onChange}
//                   error={!_.isEmpty(errors) && errors.email ? errors.email : ''}
//                 />
//               </div>
//               <div className='form-group'>
//                 <label className='form-label' htmlFor='password'>
//                   PASSWORD
//                 </label>

//                 <input
//                   name='password'
//                   type='password'
//                   className='form-control'
//                   id='loginPassword'
//                   placeholder='Password'
//                   required=''
//                   value={this.state.password}
//                   onChange={this.onChange}
//                   error={!_.isEmpty(errors) && errors.password ? errors.password : ''}
//                 />
//                 {/* temporary dummy link */}
//                 <span id='forgtpas'>
//                   <div className='text-cyan' style={{ cursor: 'pointer' }}>
//                     {/*Forgot your password?*/}
//                   </div>
//                 </span>
//               </div>
//               {errors && Object.entries(errors).length ? (
//                 <span style={{ color: 'red' }}>Your Email or Password is Incorrect!</span>
//               ) : (
//                 <span></span>
//               )}
//               <p>{message}</p>
//               <div id='btndiv2'>
//                 <button
//                   type='submit'
//                   className='btn btn-primary btn-square shadow-sm btnsignin double-shade-button'>
//                   Login
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// Login.propTypes = {
//   loginUser: PropTypes.func.isRequired,
// };

// const mapStateToProps = ({ login }) => ({
//   errors: login.error,
//   success: login.success,
//   loading: login.loading,
//   userData: login.userData,
// });

// const mapDispatchToProps = dispatch => ({
//   loginUser: function(payload) {
//     console.log('loginUser:', payload, dispatch);

//     const rt = dispatch(loginUser(payload));
//     console.log(rt);
//     return rt;
//   },
// });

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(withRouter(Login));

import React, { Component } from 'react';
import './Login.css';
// import LogoAI from '../../../assets/media/images/logo-ai.png';
// import NewUp from '../../../assets/media/images/New-up.png';
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

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
    //  !!nextProps.userData
    if (!!nextProps.success && !nextProps.errors) {
      //this.setState({ errors: nextProps.errors })
      this.props.history.push('/dashboard');
    }
  }

  onSubmit(e) {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password,
    };
    if (this.state.email && this.state.password) {
      this.props.loginUser(userData);
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
        >
          <div className='divleftContent'>
            <ul className='nav justify-content navTopLeft'>
              <li className='nav-item'>
                {/* <img id='logoImgLeft' src={LogoAI} style={{ width: '26%' }} /> */}
              </li>
            </ul>
            <div
              id='subdiv-login'
              className='text-white d-md-flex align-items-center p-5 text-center '>
              <div className='logoarea pt-5 pb-5' style={{ width: '100%' }}>
                <p className='mb-4 mt-3 login-text-right'>
                  Dashboard <br />
                  <span style={{ fontSize: '1.1rem' }}>Enterprise Edition</span>
                </p>
                <div id='btndiv-login'>
                  <button
                    type='submit'
                    className='btn btn-primary btn-square shadow-sm double-shade-contactus'>
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
            <footer className='page-footer'>
              <div className='footer-copyright text-center py-3 text-white'>
                ©copyright@impactanalytics2019
              </div>
            </footer>
          </div>
        </div>
        <div id='divRight' className='col-md-8 h-md-100 loginarea'>
          <div className='row j-c-f-end  p-top-left'>
            <div className='col-md-3 text-right'>
              <p className='font-bold color-blue p-top-textin'> Don't have an Account?</p>
            </div>
            <div className='col-md-2 text-right'>
              <button className='btn get-started'>GET STARTED</button>
            </div>
          </div>
          <div id='signinform'>
            <form className='formWidth' onSubmit={this.onSubmit} onKeyUp={e => this.keyPress(e)}>
              <h4 id='signIntext'>
                Sign in to <span id='promoColor1'>Dashboard</span>
              </h4>
              <p>Enter your details below.</p>
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
              {errors && Object.entries(errors).length ? (
                <span style={{ color: 'red' }}>Your Email or Password is Incorrect!</span>
              ) : (
                <span></span>
              )}
              <p>{message}</p>
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
const mapStateToProps = ({ login }) => ({
  errors: login.error,
  success: login.success,
  loading: login.loading,
  userData: login.userData,
});

const mapDispatchToProps = dispatch => ({
  loginUser: function(payload) {
    console.log('loginUser:', payload, dispatch);
    const rt = ''
    // const rt = dispatch(loginUser(payload));
    console.log(rt);
    return rt;
  },
});
export default Login;

