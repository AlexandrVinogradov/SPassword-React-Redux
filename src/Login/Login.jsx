import React from 'react'
import style from './Login.module.scss'
import shield from '../img/shield.png'

const Login = () => {
  return (
    <div className={style.Login}>
      <img className={style.Login__shield} src={shield} alt='shield'/>
      <span className={style.Login__title}>SPassword - Your safe</span>
      <input className={style.Login__input} placeholder="Placeholder" />
      <input className={style.Login__input} placeholder="Placeholder" />
      <button className={style.Login__btn} type='button'>Login</button>
    </div>
  )
}

export default Login
