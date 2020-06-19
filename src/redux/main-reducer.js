import idNormalizer from '../utils/object-helpers'

const ADD_GROUP = 'spassword/main/ADD_GROUP'
const DELETE_GROUP = 'spassword/main/DELETE_GROUP'
const SELECT_GROUP = 'spassword/main/SELECT_GROUP'

const initialState = {
  groups: [
    { id: 0, name: 'Vk', login: null, password: null },
    { id: 1, name: 'Github', login: null, password: null },
    { id: 2, name: 'Facebook', login: null, password: null },
    { id: 3, name: 'Steam', login: null, password: null },
    { id: 4, name: 'La2 Accounts', login: null, password: null },
    { id: 5, name: 'La2 Accounts123', login: null, password: null },
  ],
  idOfSelectedGroup: 0,
}

const mainReducer = (state = initialState, action) => {
  // const bb = () => {
  //   console.log('aada')

  //   return 9
  // }
  
  switch (action.type) {
    case ADD_GROUP:

      return {
        ...state,
        groups: [...state.groups, { id: 6, name: action.name, login: null, password: null }],
      }
    case DELETE_GROUP:
      return {
        ...state,
        groups: idNormalizer(state.groups, action),
      }
    case SELECT_GROUP:
      return {
        ...state,
        idOfSelectedGroup: action.idOfSelectedGroup,
      }
    default:
      return state
  }
}

export default mainReducer

export const addGroup = name => ({ type: ADD_GROUP, name })
export const deleteGroup = name => ({ type: DELETE_GROUP, name })
export const selectGroup = idOfSelectedGroup => ({ type: SELECT_GROUP, idOfSelectedGroup })
