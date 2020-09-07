import React from 'react'
import { NavLink, Redirect } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { reduxForm, Field } from 'redux-form'
import shield from '../../img/shield.png'
import style from './Login.module.scss'
import { Input } from '../common/FormsControls/FormControls'

// type LoginPropsType = {
//   login: (email: string, password: string) => void,
// }

const Login = (props: any) => {
  const { login, initialValues, isAuth } = props
  const { t } = useTranslation()

  const onSubmit = (formData: any) => {
    login(formData.loginInputValue, formData.passwordInputValue)
  }

  if (isAuth === true) {
    return <Redirect to='/main' />
  }

  return (
    <div className={style.Login}>
      <img className={style.shield} src={shield} alt='shield' />
      <span className={style.title}>SPassword - {t('your safe')}</span>

      <LoginReduxForm onSubmit={onSubmit} initialValues={initialValues} />
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

      <NavLink to='/registration'>
        <button className={style.registration_btn} type='button'>
          {t('Registration')}
        </button>
      </NavLink>

      <button onClick={handleSubmit} className={style.btn} type='button'>
        {t('Login')}
      </button>
    </form>
  )
}

const LoginReduxForm = reduxForm({ form: 'login redux form' })(LoginForm)

export default Login
