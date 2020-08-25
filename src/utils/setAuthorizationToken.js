import Axios from "axios"

const setAuthorizationToken = (token) => {
  if (token) {
    Axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
  } else {
    delete Axios.defaults.headers.common['Authorization'];
  }
}

export default setAuthorizationToken