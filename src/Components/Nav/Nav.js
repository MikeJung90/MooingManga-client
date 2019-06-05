import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends Component {
  render() {
    return (
      <nav className='nav-bar'>
        <div className='left-nav'>
          <Link to="/">MooingManga</Link>
        </div>
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
}