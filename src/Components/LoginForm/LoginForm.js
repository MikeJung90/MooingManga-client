import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthApi from '../../services/Auth-Api';
import TokenService from '../../services/Token-Service';

export default class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => {}
  }
  state = { error: null }

  handleSubmitJwtAuth = e => {
    e.preventDefault()
    this.setState({ error: null })
    const { user_name, password } = e.target

    AuthApi.postLogin({
      user_name: user_name.value,
      password: password.value
    })
      .then(res => {
        user_name.value = ''
        password.value = ''
        TokenService.saveAuthToken(res.authToken)
        this.props.onLoginSuccess()
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  }

  render() {
    const { error } = this.state
    return (
      <div className='login-form-container'>
        <form className='login-form' onSubmit={this.handleSubmitJwtAuth}>
          <div role='alert'>
            {error && <p className='red-msg'>{error}</p>}
          </div>
          <label className='user-name-form'>User Name</label>
          <input
            type='text'
            name='user_name'
            required
          />

          <label className='password-form'>Password</label>
          <input
            type='password'
            name='password'
            required
          />

          <button type='submit'>Login</button>
          <Link to='/Register'>Register</Link>
        </form>
      </div>
    )
  }
}
