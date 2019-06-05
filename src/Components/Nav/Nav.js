import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/Token-Service';
// import './Nav.css';

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
        {/* <div className='left-nav'>
          <Link to="/">MooingManga</Link>
        </div> */}
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
      <div>
        <h1>
          <Link to='/'>MooingManga</Link>
        </h1>
        <span className='Header__tagline--wide'>Favorite your manga!</span>
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </div>
      <span className='Header__tagline--narrow'>Rate all the things.</span>
    </>
  }
}