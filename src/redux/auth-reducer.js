import { authAPI } from '../api/api'

export const SET_USER_AUTH_DATA = 'spassword/main/SET_USER_AUTH_DATA'

const initialState = {
  email: null,
  password: null,
}

const registrationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_AUTH_DATA:
      return {
        ...state,
        email: action.email, //78 13;00
        password: action.password,
      }
    default:
      return state
  }
}
export default registrationReducer

const setUserAuthData = (email, password) => ({ type: SET_USER_AUTH_DATA, email, password })

export const actions = {
  login: (email, password) => async dispatch => {
    const response = await authAPI.login(email, password)
    // if (response.error.code !== 0) {
      dispatch(setUserAuthData(response.email, response.password))
    // }
  },

  logout: () => async dispatch => {
    const response = await authAPI.logout()

    if (response.error.code !== 0) {
      dispatch(setUserAuthData(null, null))
    }
  },
}
