import React, { Component } from 'react';
import { Button, Input } from '../Utils/Utils';
import MangaContext from '../../Contexts/MangaContext'
import AuthApi from '../../services/Auth-Api';
import TokenService from '../../services/Token-Service';
import './LoginForm.css';

export default class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => {}
  }
  static contextType = MangaContext;
  state = { error: this.context.error ? this.context.error.error : null }

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
          <div className='user-name'>
            <label className='user-name-form'>User Name</label>
            <Input
              type='text'
              name='user_name'
              required
            />
          </div>

          <div className='password'>
            <label className='password-form'>Password</label>
            <Input
              type='password'
              name='password'
              required
            />
          </div>

          <Button type='submit'>Login</Button>
        </form>
      </div>
    )
  }
}
