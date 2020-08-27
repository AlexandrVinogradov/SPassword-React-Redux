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
  errorMessage: null,
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_AUTH_DATA:
      return {
        ...state,
        currentUser: action.payload,
        isAuth: action.isAuth,
        errorMessage: action.errorMessage,
      }
    default:
      return state
  }
}
export default authReducer

const setUserAuthData = (payload, isAuth, errorMessage) => ({ type: SET_USER_AUTH_DATA, payload, isAuth, errorMessage })

export const authActions = {
  login: (email, password) => async dispatch => {
    const response = await authAPI.login(email, password)

    if (response.status === 200) {
      dispatch(setUserAuthData(response.data.data, true, null))
    } else {
      dispatch(setUserAuthData({}, false, response.data.error.message))
    }
  },

  getProfile: () => async dispatch => {
    const token = localStorage.jwtToken

    if (token) {
      const response = await authAPI.getProfile()
      dispatch(setUserAuthData(response.data.data['0'], true, null))
    }
  },

  logout: () => async dispatch => {
    const response = await authAPI.logout()

    if (response.status === 200) {
      dispatch(setUserAuthData({}, false, null))
    } else {
      dispatch(setUserAuthData({}, false, response.data.error.message))
    }
  },
}
