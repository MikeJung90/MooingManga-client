import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class MangaListItem extends Component {
  render() {
    const { manga } = this.props
    
    return (
      <Link to={manga.id} className='MangaItem'>
        {/* <div className='MangaItem-image' style={{backgroundImage: `url(${manga.posterImage.small})`}} /> */}

        <div className='MangaItem-details'>
          <div className='MangaItem-text'>
            <h2 className='MangaItem-title'>{manga.attributes.titles.en}</h2>
            {/* <p className='MangaItem-description'>{truncate(manga.content)}</p> */}
          </div>

          <div className='MangaItem-reviews'>
            {/* <MangaStarRating rating={manga.average_review_rating} />
            <span id='MangaItem-review-count'>{readableReviewCount(manga.number_of_reviews)}</span> */}
          </div>
        </div>
      </Link>
    )
  }
}