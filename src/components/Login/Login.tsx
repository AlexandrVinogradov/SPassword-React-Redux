import React from 'react'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import shield from '../../img/shield.png'
import style from './Login.module.scss'

const Login: React.FC = () => {
  const { t } = useTranslation()

  return (
    <div className={style.Login}>
      <img className={style.shield} src={shield} alt='shield' />
      <span className={style.title}>SPassword - {t('your safe')}</span>

      <input className={style.input} placeholder={t('placeholderLogin')} />
      <input className={style.input} type='password' placeholder={t('placeholderPassword')} />

      <NavLink to='/main' className={style.btn_link}>
        <button className={style.btn} type='button'>
          {t('Login')}
        </button>
      </NavLink>
    </div>
  )
}

export default (Login)
