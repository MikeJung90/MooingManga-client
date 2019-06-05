import config from '../config';

const TokenService = {
  saveAuthToken(token) {
    window.localStorage.setItem(config.API_ENDPOINT, token)
  },
  clearAuthToken() {
    window.localStorage.removeItem(config.API_ENDPOINT)
  },
  getAuthToken() {
    return window.localStorage.getItem(config.API_ENDPOINT)
  },
  hasAuthToken() {
    return !!TokenService.getAuthToken()
  },
  makeBasicAuthToken(userName, password) {
    return window.btoa(`${userName}:${password}`)
  },
}

export default TokenService;