import * as axios from 'axios'
// import jwt from 'jsonwebtoken'
import setAuthorizationToken from '../utils/setAuthorizationToken'

const instance = axios.create({
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
        // console.log(jwt.decode(token));

        return response
      })
      .catch(err => {
        return err.response
      })
  },

  getProfile() {
    const token = localStorage.jwtToken

  
    return instance
      .get('/user')
      .then(response => {
        return response
      })
  },

  // https://www.youtube.com/watch?v=FyyPUIAe6kc
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
