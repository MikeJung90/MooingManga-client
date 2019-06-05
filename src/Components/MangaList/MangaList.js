import React, { Component } from 'react';
import { Section } from '../Utils/Utils';
import MangaListContext from '../../Contexts/MangaListContext';
import MangaListItem from '../MangaListItem/MangaListItem'
import MangaApi from '../../services/Manga-Api-Service';

export default class MangaList extends Component {
  static contextType = MangaListContext

  componentDidMount() {
    this.context.clearError()
    MangaApi.getMangaList()
      .then(this.context.setMangaList)
      .catch(this.context.setError)
  }

  renderManga() {
    console.log(this.context)
    const { mangaList = [] } = this.context
    
    return mangaList.map(manga =>
      <MangaListItem
        key={manga.id}
        manga={manga}
      />
    )
    // console.log('rending manga here')
    // console.log(MangaListItem)
  }

  render() {
    const { error } = this.context
    return (
      <Section list className='MangaList'>
        {error
          ? <p className='red'>There was an error, try again</p>
          : this.renderManga()}
      </Section>
    )
  }
}