import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Section } from '../Utils/Utils';
import RegisterForm from '../RegisterForm/RegisterForm';
import './RegisterPage.css';

export default class RegisterPage extends Component {
  static defaultProps = {
    history: {
      push: () => { },
    },
  }

  handleRegisterSuccess = user => {
    const { history } = this.props
    history.push('/login')
  }
  render() {
    return (
      <Section className='register-page'>
        <h2>Register</h2>
        <RegisterForm
          onRegisterSuccess={this.handleRegisterSuccess}
        />
        <div>
          <Link to="/login" className="login-link">Login</Link>
        </div>
      </Section>
    )
  }
}