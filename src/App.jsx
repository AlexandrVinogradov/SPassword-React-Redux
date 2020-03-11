import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import style from './App.module.scss'
import Login from './Login/Login'
import Main from './Main/Main'

const App = () => {
  return (
    <div className={style.App}>
      <Login />
      <BrowserRouter>
        <Switch>
          <Route path="/main" render={() => <Main />} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
