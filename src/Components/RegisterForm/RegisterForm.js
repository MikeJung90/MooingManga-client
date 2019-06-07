import React, { Component } from 'react';
import { Button, Input, Required } from '../Utils/Utils';
import AuthApi from '../../services/Auth-Api';
import './RegisterForm.css'

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
        this.props.onRegistrationSuccess()
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  }

  render() {
    const { error } = this.state
    return (
      <div className='register-form-container'>
        <form 
          className='register-form' 
          onSubmit={this.handleNewUserSubmit}
        >
          <div role='alert'>
            {error && <p className='red-msg'>{error}</p>}
          </div>
          <div className='first-name'>
            <label className='first-name-form'>
              First Name <Required />
            </label>
            <Input
              type='text'
              placeholder='first name'
              name='first_name'
              required
            />
          </div>

          <div className='last-name'>
            <label className='last-name-form'>
              Last Name <Required />
            </label>
            <Input
              type='text'
              placeholder='last name'
              name='last_name'
              required
            />
          </div>

          <div className='user-name'>
            <label className='user-name-form'>
              User Name <Required />
            </label>
            <Input
              type='text'
              placeholder='user name'
              name='user_name'
              required
            />
          </div>

          <div className='email'>
            <label className='email-form'>
              Email <Required />
            </label>
            <Input
              type='email'
              placeholder='email@gmail.com'
              name='email'
              required
            />
          </div>

          <div className='password'>
            <label className='password-form'>
              Password 
            <Required /></label>
            <Input
              type='password'
              placeholder='********'
              name='password'
              required
            />
          </div>

          <Button type='submit'>Register</Button>
        </form>
      </div>
    )
  }
}