import React from 'react'
import { NavLink } from 'react-router-dom'
import { withTranslation, WithTranslation } from 'react-i18next'
// import i18n from './i18n'
// import { useTranslation } from 'react-i18next'
import shield from '../../img/shield.png'

import style from './Login.module.scss'
import i18n from '../../i18'

const Login: React.FC<WithTranslation> = props => {
  // const { t, i18n } = useTranslation()

  const changeLanguage = (lng: any) => {
    i18n.changeLanguage(lng)
  }

  return (
    <div className={style.Login}>
      <img className={style.shield} src={shield} alt='shield' />
      <span className={style.title}>SPassword - Your safe</span>

      <div>
        <button type='button' onClick={() => changeLanguage('ru')}>
          ru
        </button>
        <button type='button' onClick={() => changeLanguage('de')}>
          en
        </button>
      </div>

      <input className={style.input} placeholder='Placeholder' />
      <input className={style.input} type='password' placeholder='Placeholder' />

      <NavLink to='/main' className={style.btn_link}>
        <button className={style.btn} type='button'>
          {props.t('Login')}
        </button>
      </NavLink>
    </div>
  )
}

export default withTranslation()(Login)
