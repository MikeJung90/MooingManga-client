import React, { Component } from 'react'

const MangaListContext = React.createContext({
  mangaList: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setMangaList: () => {},
})
export default MangaListContext

export class MangaListProvider extends Component {
  state = {
    mangaList: [],
    error: null,
  };

  setMangaList = mangaList => {
    this.setState({ mangaList: mangaList.data })
  }

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  render() {
    const value = {
      mangaList: this.state.mangaList,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setMangaList: this.setMangaList,
    }
    return (
      <MangaListContext.Provider value={value}>
        {this.props.children}
      </MangaListContext.Provider>
    )
  }
}