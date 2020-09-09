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
      <span className={style.title}>SPassword - {t('Registration')}</span>

      <LoginReduxForm onSubmit={onSubmit} initialValues={initialValues} />
    </div>
  )
}

const LoginForm = (props: any) => {
  const { handleSubmit } = props
  const { t } = useTranslation()

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <Field
        placeholder={t('registrationPlaceholderLogin')}
        component={Input}
        name='registrationLoginInputValue'
        autoFocus='true'
      />
      <Field
        placeholder={t('registrationPlaceholderPassword')}
        component={Input}
        name='registrationPasswordInputValue'
      />
      <Field
        placeholder={t('registrationPlaceholderFirstName')}
        component={Input}
        name='registrationFirstNameInputValue'
      />
      <Field
        placeholder={t('registrationPlaceholderLastName')}
        component={Input}
        name='registrationLastNameInputValue'
      />

      <NavLink to='/login'>
        <button className={style.registration_btn} type='button'>
          {t('Already have account')}
        </button>
      </NavLink>

      <button onClick={handleSubmit} className={`${style.btn} ${style.btn_setRegistration}`} type='button'>
        {t('Registration')}
      </button>
    </form>
  )
}

const LoginReduxForm = reduxForm({ form: 'login redux form' })(LoginForm)

export default Login
