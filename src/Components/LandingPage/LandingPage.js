import React, { Component } from 'react';
import MangaList from '../MangaList/MangaList';

export default class LandingPage extends Component {
  render() {
    console.log(MangaList)
    return (
      <div className='home'>
        <h1>Mooing Manga</h1>
        <MangaList />
      </div>
    )
  }
}