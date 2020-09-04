import * as axios from 'axios'

const instance = axios.create({
  baseURL: 'https://spassword-api.sevenns.pw/v1/',
})

export const authAPI = {
  login(email, password) {
    return instance
      .post('/login', { email, password })
      .then(response => {
        const token = response.headers['access-token']
        localStorage.setItem('jwtToken', token)

        return response
      })
      .catch(err => {
        return err.response
      })
  },

  getProfile() {
    const token = localStorage.jwtToken

    return instance
      .get('/user', {
        headers: {
          'x-api-key': token,
        },
      })
      .then(response => {
        return response
      })
      .catch(err => {
        return err.response
      })
  },

  logout() {
    const token = localStorage.jwtToken

    return instance
      .post('/logout', null, {
        headers: {
          'x-api-key': token,
        },
      })
      .then(response => {
        localStorage.removeItem('jwtToken')
        return response
      })
      .catch(err => {
        return err.response
      })
  },
}

export const groupAPI = {
  getGroups() {
    const token = localStorage.jwtToken

    return instance
      .get('/groups', {
        headers: {
          'x-api-key': token,
        },
      })
      .then(response => response)
      .catch(err => err.response)
  },

  createGroup(name, login, password) {
    const token = localStorage.jwtToken

    return instance
      .post(
        '/groups',
        { name, login, password },
        {
          headers: {
            'x-api-key': token,
          },
        }
      )
      .then(response => response)
      .catch(err => err.response)
  },

  deleteGroup(uuid) {
    const token = localStorage.jwtToken

    return instance
      .delete(
        '/groups',
        { uuid },
        {
          headers: {
            'x-api-key': token,
          },
        }
      )
      .then(response => response)
      .catch(err => err.response)
  },
}
