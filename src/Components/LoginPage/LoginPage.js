import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Section } from '../Utils/Utils';
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
      <Section className='login-page'>
        <h2>Login</h2>
        <LoginForm 
          onLoginSuccess={this.handleLoginSuccess}
        />
        <div>
          <Link to='/register' className='login-page register-link'>Register</Link>
        </div>
      </Section>
    )
  }
}