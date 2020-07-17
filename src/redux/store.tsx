import { createStore, combineReducers, applyMiddleware } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import mainReducer from './main-reducer'

const reducers = combineReducers({
  mainPage: mainReducer,
  form: formReducer,
})

type reducersType = typeof reducers
export type AppStateType = ReturnType<reducersType>

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunkMiddleware)))

export default store

// @ts-ignore
window.__store__ = store
