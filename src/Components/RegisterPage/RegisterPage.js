import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import RegisterForm from '../RegisterForm/RegisterForm';

export default class Register extends Component {
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
      <div className='register-page'>
        <RegisterForm onRegisterSuccess = {this.handleRegisterSuccess} />
        <br></br>
        <div>
          <Link to="/login" className="login-link">Login</Link>
        </div>
      </div>
    )
  }
}