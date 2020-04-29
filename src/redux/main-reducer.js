const ADD_GROUP = 'spassword/main/ADD_GROUP'

const initialState = {
  groups: [
    { id: 1, name: 'Vk', login: null, password: null },
    { id: 2, name: 'Github', login: null, password: null },
    { id: 3, name: 'Facebook', login: null, password: null },
    { id: 4, name: 'Steam', login: null, password: null },
    { id: 5, name: 'La2 Accounts', login: null, password: null },
  ],
}

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_GROUP:
      return {
        ...state,
        groups: [...state.groups, { id: 5, name: action.type, login: null, password: null }],
      }
    default:
      return state
  }
}

export default mainReducer

export const addGroup = name => ({ type: ADD_GROUP, name })
