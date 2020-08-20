import React from 'react'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { reduxForm, Field } from 'redux-form'
import shield from '../../img/shield.png'
import style from './Login.module.scss'
import { Input } from '../common/FormsControls/FormControls'

// type LoginPropsType = {
//   login: (email: string, password: string) => void,
// }

const Login = (props: any) => {
  const { login } = props
  const { t } = useTranslation()

  const onSubmit = (formData: any) => {
    console.log(formData.loginInputValue, formData.passwordInputValue)
    login(formData.loginInputValue, formData.passwordInputValue)
  }

  return (
    <div className={style.Login}>
      <img className={style.shield} src={shield} alt='shield' />
      <span className={style.title}>SPassword - {t('your safe')}</span>

      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  )
}

const LoginForm = (props: any) => {
  const { handleSubmit } = props
  const { t } = useTranslation()

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <Field placeholder={t('placeholderLogin')} component={Input} name='loginInputValue' autoFocus='true' />
      <Field placeholder={t('placeholderPassword')} component={Input} name='passwordInputValue' />

      {/* <NavLink to='/registration' className={style.btn_link}> */}
        <button onClick={handleSubmit} className={style.registration_btn} type='button'>
          {t('registration')}
        </button>
      {/* </NavLink> */}

      {/* <NavLink to='/main' className={style.btn_link}>
        <button className={style.btn} type='button'>
          {t('Login')}
        </button>
      </NavLink> */}
    </form>
  )
}

const LoginReduxForm = reduxForm({ form: 'login redux form' })(LoginForm)

export default Login
