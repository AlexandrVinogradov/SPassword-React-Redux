import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import { withTranslation, WithTranslation } from 'react-i18next'
import { Provider } from 'react-redux'
import style from './App.module.scss'
import Login from './components/Login/Login'
import store from './redux/store'
import MainContainer from './components/Main/MainContainer'
import LanguageToggle from './components/LanguagesToggle/LanguagesToggle'

// redux-form types ModalAdd
// rewrite all any
// add languages
// editMode span importants..

const App: React.FC<WithTranslation> = props => {
  const { i18n, tReady, t } = props

  return (
    <div className={style.App}>

      <LanguageToggle i18n={i18n} tReady={tReady} t={t} />

      <BrowserRouter>
        <Switch>
          <Route path='/main' render={() => <MainContainer />} />
          <Route path='/' render={() => <Login />} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

const Spassword: React.FC<WithTranslation> = props => {
  const { i18n, tReady, t } = props

  return (
    <BrowserRouter>
      <Provider store={store}>
        <App i18n={i18n} tReady={tReady} t={t} />
      </Provider>
    </BrowserRouter>
  )
}

export default withTranslation()(Spassword)
