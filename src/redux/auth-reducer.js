import { authAPI } from '../api/api'

export const SET_USER_AUTH_DATA = 'spassword/main/SET_USER_AUTH_DATA'

const initialState = {
  currentUser: {
    uuid: null,
    createdAt: null,
    updatedAt: null,
    email: null,
    password: null,
    firstName: null,
    lastName: null,
  },

  isAuth: false,
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_AUTH_DATA:
      return {
        ...state,
        currentUser: action.payload,
        isAuth: action.isAuth,
      }
    default:
      return state
  }
}
export default authReducer

const setUserAuthData = (payload, isAuth) => ({ type: SET_USER_AUTH_DATA, payload, isAuth })

export const authActions = {
  login: (email, password) => async dispatch => {
    const response = await authAPI.login(email, password)

    if (response.status === 200) {
      dispatch(setUserAuthData(response.data.data, true))
    } else {
      alert('login no')
    }
  },

  getProfile: () => async dispatch => {
    console.log('nu gitProfile')

    const token = localStorage.jwtToken

    if (token) {
      const response = await authAPI.getProfile()
      dispatch(setUserAuthData(response.data.data['0'], true))
    }
  },

  logout: () => async dispatch => {
    const response = await authAPI.logout()
    console.log('nu logout')

    if (response.status === 200) {
      dispatch(setUserAuthData({}, false))
    } else {
      alert('logout no')
    }
  },
}
