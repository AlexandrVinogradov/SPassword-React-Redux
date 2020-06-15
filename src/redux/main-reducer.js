const ADD_GROUP = 'spassword/main/ADD_GROUP'
const SELECT_GROUP = 'spassword/main/SELECT_GROUP'

const initialState = {
  groups: [
    { id: 1, name: 'Vk', login: null, password: null, isSelected: true },
    { id: 2, name: 'Github', login: null, password: null, isSelected: false },
    { id: 3, name: 'Facebook', login: null, password: null, isSelected: false },
    { id: 4, name: 'Steam', login: null, password: null, isSelected: false },
    { id: 5, name: 'La2 Accounts', login: null, password: null, isSelected: false },
  ],
}

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_GROUP:
      return {
        ...state,
        groups: [...state.groups, { id: 6, name: action.name, login: null, password: null }],
      }
    case SELECT_GROUP:
      return {
        ...state,
        // groups.find(i => {

        // })

        // groups: true,
      }
    default:
      return state
  }
}

export default mainReducer

export const addGroup = name => ({ type: ADD_GROUP, name })
export const selectGroup = isSelected => ({ type: SELECT_GROUP, isSelected })
