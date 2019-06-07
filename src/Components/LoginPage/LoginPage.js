import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../LoginForm/LoginForm';
import './LoginPage.css';

export default class LoginPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  }

  handleLoginSuccess = () => {
    const { location, history } = this.props
    const destination = (location.state || {}).from || '/'
    history.push(destination)
  }

  render() {
    return (
      <div className='login-page'>
        <LoginForm onLoginSuccess = {this.handleLoginSuccess} />
        <br></br>
        <div>
          <Link to='/register' className='login-page register-link'>Register</Link>
        </div>
      </div>
    )
  }
}