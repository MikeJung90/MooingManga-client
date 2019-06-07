import React, { Component } from 'react';
import MangaList from '../MangaList/MangaList';
import './LandingPage.css';

export default class LandingPage extends Component {
  render() {
    return (
      <div className='home'>
        <MangaList />
      </div>
    )
  }
}