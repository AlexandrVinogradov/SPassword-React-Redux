import * as axios from 'axios'

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://spassword-api.sevenns.pw/v1/',
})

export const authAPI = {
  login(email, password) {
    return instance
      .post('/login', { email, password })
      .then(response => {
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
