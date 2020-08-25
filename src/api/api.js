import * as axios from 'axios'
import setAuthorizationToken from '../utils/setAuthorizationToken'

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://spassword-api.sevenns.pw/v1/',
})

export const authAPI = {
  login(email, password) {
    return instance
      .post('/login', { email, password })
      .then(response => {
        const token = response.data.data.uuid
        localStorage.setItem('jwtToken', token)
        setAuthorizationToken(token)
        return response
      })
      .catch(err => {
        return err.response
      })
  },

  logout() {
    return instance
      .post('/logout')
      .then(response => {
        return response
      })
      .catch(err => {
        return err.response
      })
  },
}

export const nextAPI = {}
