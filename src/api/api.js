import * as axios from 'axios'

const instance = axios.create({
  baseURL: 'https://spassword-api.sevenns.pw/v1',
  header: {
    Name: '123'
  }
})

export const  authAPI = {
  // registration(email, password, firstName, lastName) {
  //   return instance.post('/user/createUser', 'x-api-key', {email, password, firstName, lastName})
  // },

  login(email, password) {
    return instance.post('/login', {email, password})
  },
  logout() {
    return instance.post('/login')
  }
}

export const nextAPI = {

}