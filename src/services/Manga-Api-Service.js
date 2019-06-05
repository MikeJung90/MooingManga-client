import config from '../config';
// import TokenService from '../services/Token-Service';

const MangaApiService = {
  getMangaList() {
    return fetch(`${config.KITSU_API_ENDPOINT}/manga`, {
      headers: {
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },

  getManga(mangaId) {
    return fetch(`${config.KITSU_API_ENDPOINT}/manga/${mangaId}`, {
      headers: {
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  }
}

export default MangaApiService;