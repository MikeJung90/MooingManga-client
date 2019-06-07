import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/Token-Service';
import './Nav.css';

export default class Nav extends Component {
  handleLogoutClick = () => {
    TokenService.clearAuthToken()
  }

  renderLogoutLink() {
    return (
      <div className='Nav-logged-in'>
        <Link
          onClick={this.handleLogoutClick}
          to='/'>
          Logout
        </Link>
      </div>
    )
  }

  renderLoginLink() {
    return (
      <nav className='Nav-not-logged-in'>
        <div className='right-nav'>
          <Link to="/Favorite">
            Favorite
          </Link>
          <Link to="/Login">
            Login
          </Link>
          <Link to="/Register">
            Register
          </Link>
        </div>
      </nav>
    )
  }

  render() {
    return <>
      <div className='Nav-bar'>
        <h1>
          <Link to='/'>MooingManga</Link>
        </h1>
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </div>
    </>
  }
}