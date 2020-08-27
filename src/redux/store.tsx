import { createStore, combineReducers, applyMiddleware } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import mainReducer from './main-reducer'
import authReducer from './auth-reducer'


const reducers = combineReducers({
  mainPage: mainReducer,
  form: formReducer,
  auth: authReducer
})

type reducersType = typeof reducers
export type AppStateType = ReturnType<reducersType>
 
type PropertiesTypes<T> = T extends {[key: string]: infer U} ? U : never
export type InfernActionsTypes<T extends {[key: string]: (...args: any[]) => any}> = ReturnType<PropertiesTypes<T>>

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunkMiddleware)))

// @ts-ignore
window.__store__ = store


export default store
