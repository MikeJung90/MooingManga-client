import React, { Component } from 'react';
import AuthApi from '../../services/Auth-Api';

export default class RegisterForm extends Component {
  static defaultProps = {
    onRegisterSuccess: () => {}
  }
  state = { error : null }

  handleNewUserSubmit = e => {
    e.preventDefault()
    const {
      first_name,
      last_name,
      user_name,
      email,
      password
    } = e.target

    this.setState({ error: null })
    AuthApi.postUser({
      first_name: first_name.value,
      last_name: last_name.value,
      user_name: user_name.value,
      email: email.value,
      password: password.value
    })
      .then(user => {
        first_name.value = ''
        last_name.value = ''
        user_name.value = ''
        email.value = ''
        password.value = ''
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  }

  render() {
    const { error } = this.state
    return (
      <div className='register-form-container'>
        <form className='register-form' onSubmit={this.handleNewUserSubmit}>
          <div role='alert'>
            {error && <p className='red-msg'>{error}</p>}
          </div>
          <label className='first-name-form'>First Name</label>
          <input
            type='text'
            placeholder='first name'
            name='first_name'
            required
          />

          <label className='last-name-form'>Last Name</label>
          <input
            type='text'
            placeholder='last name'
            name='last_name'
            required
          />

          <label className='user-name-form'>User Name</label>
          <input
            type='text'
            placeholder='user name'
            name='user_name'
            required
          />

          <label className='email-form'>Email</label>
          <input
            type='email'
            placeholder='email@gmail.com'
            name='email'
            required
          />

          <label className='password-form'>Password</label>
          <input
            type='password'
            placeholder='********'
            name='password'
            required
          />
          <button type='submit'>Register</button>
        </form>
      </div>
    )
  }
}