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
        const userId = response.data.data.uuid
        localStorage.setItem('jwtToken', token)
        localStorage.setItem('userId', userId)

        return response
      })
      .catch(err => err.response)
  },

  getProfile() {
    const { jwtToken, userId } = localStorage

    return instance
      .get(`/user/${userId}`, {
        headers: {
          'x-api-key': jwtToken,
        },
      })
      .then(response => response)
      .catch(err => err.response)
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
        localStorage.removeItem('userId')
        return response
      })
      .catch(err => {
        return err.response
      })
  },

  postRegistration(email, password, firstName, lastName) {
    return instance
      .post(`/signup`, {
        email,
        password,
        firstName,
        lastName,
      })
      .then(response => response)
      .catch(err => err.response)
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
        `/groups/${uuid}`,

        {
          headers: {
            'x-api-key': token,
          },
        }
      )
      .then(response => response)
      .catch(err => err.response)
  },

  putLogin(uuid, name, login, password) {
    const token = localStorage.jwtToken

    return instance
      .put(
        `/groups/${uuid}`,
        {
          name,
          login,
          password,
        },
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
