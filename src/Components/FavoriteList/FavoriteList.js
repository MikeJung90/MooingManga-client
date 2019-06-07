import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Favorites from '../Favorites/Favorites';
import Nav from '../Nav/Nav';

export default class FavoriteList extends Component {
  render() {
    if(!this.props.loggedIn) {
      return <Redirect to='/login' />
    }
    const { manga } = this.props
    const imgArt = manga.attributes.posterImage.small;
    
    return (
      // <Link to={manga.id} className='MangaItem'>
      <>
        <div className='MangaItem-container'>
          <div className='MangaItem-image'>
            {/* redirect to kitsu website */}
            <a href={`https://kitsu.io/manga/${manga.attributes.slug}`}> 
              <img className='image-card' src={imgArt} alt={`box art for ${manga.attributes.titles.en}`} />
            </a>
          </div>

          <div className='MangaItem-details'>
            <div className='MangaItem-text'>
              <a href={`https://kitsu.io/manga/${manga.attributes.slug}`}>
                <h2 className='MangaItem-title'>{manga.attributes.titles.en || manga.attributes.titles.en_jp || manga.attributes.titles.ja_jp}</h2>
              </a>
              <p className='MangaItem-description'>{truncate(manga.attributes.synopsis)}</p>
            </div>

            <div className='MangaItem-reviews'>
              {/* <MangaStarRating rating={manga.average_review_rating} />
              <span id='MangaItem-review-count'>{readableReviewCount(manga.number_of_reviews)}</span> */}
            </div>
          </div>
        </div>
      </>
      // </Link>
    )
  }
}

function truncate(text) {
  const words = text.split(' ')

  if (words.length > 10) {
    return words.slice(0, 10).join(' ') + ' ...'
  }

  return text
}