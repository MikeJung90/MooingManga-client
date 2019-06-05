import React, { Component } from 'react';
import { Hyph, Section } from '../Utils/Utils';
import MangaApi from '../../services/Manga-Api-Service';
import MangaContext from '../../Contexts/MangaContext';

export default class Manga extends Component {
  static defaultProps = {
    match: { params: {} },
  }

  static contextType = MangaContext

  componentDidMount() {
    const { mangaId } = this.props.match.params
    this.context.clearError()
    MangaApi.getManga(mangaId)
      .then(this.context.setManga)
      .catch(this.context.setError)
    MangaApi.getMangaReviews(mangaId)
      .then(this.context.setReviews)
      .catch(this.context.setError)
  }

  componentWillMount() {
    this.context.clearManga()
  }

  renderManga() {
    const { manga, reviews } = this.context
    return <>
      <div className='manga-image' />
      <h2>{manga.title}</h2>
      {/* <MangaContent manga={manga} />
      <MangaReviews reviews={reviews} />
      <ReviewForm /> */}
    </>
  }

  render() {
    const { error, manga } = this.context
    let content;
    if (error) {
      content = (error.error === `Manga doesn't exist`)
        ? <p className='red'>Manga not found</p>
        : <p className='red'>There was an error</p>
    } else if (!manga.id) {
      content = <div className='loading' />
    } else {
      content = this.renderManga()
    }
    return (
      <Section className='manga'>
        {content}
      </Section>
    )
  }
}

// function MangaContent({ manga }) {
//   return (
//     <p className='MangaPage__content'>
//       {manga.content}
//     </p>
//   )
// }

// function MangaReviews({ reviews = [] }) {
//   return (
//     <ul className='MangaPage__review-list'>
//       {reviews.map(review =>
//         <li key={review.id} className='MangaPage__review'>
//           <p className='MangaPage__review-text'>
//             <FontAwesomeIcon
//               size='lg'
//               icon='quote-left'
//               className='MangaPage__review-icon blue'
//             />
//             {review.text}
//           </p>
//           <p className='MangaPage__review-user'>
//             <MangaStarRating rating={review.rating} />
//             <Hyph />
//             {review.user.full_name}
//           </p>
//         </li>
//       )}
//     </ul>
//   )
// }