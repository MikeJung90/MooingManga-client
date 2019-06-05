import React, { Component } from 'react'

export const nullManga = {
  author: {},
  tags: [],
}

const MangaContext = React.createContext({
  manga: nullManga,
  reviews: [],
  error: null,
  setError: () => {},
  clearError: () => { },
  setManga: () => {},
  clearManga: () => {},
  setReviews: () => {},
  addReview: () => {},
})

export default MangaContext

export class MangaProvider extends Component {
  state = {
    manga: nullManga,
    error: null,
  };

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  setManga = manga => {
    this.setState({ manga })
  }

  setReviews = reviews => {
    this.setState({ reviews })
  }

  clearManga = () => {
    this.setManga(nullManga)
    this.setReviews([])
  }

  addReview = review => {
    this.setReviews([
      ...this.state.reviews,
      review
    ])
  }

  render() {
    const value = {
      manga: this.state.manga,
      reviews: this.state.reviews,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setManga: this.setManga,
      setReviews: this.setReviews,
      clearManga: this.clearManga,
      addReview: this.addReview,
    }
    return (
      <MangaContext.Provider value={value}>
        {this.props.children}
      </MangaContext.Provider>
    )
  }
}