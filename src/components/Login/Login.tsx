import React from 'react'
import { NavLink, Redirect } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { reduxForm, Field, InjectedFormProps } from 'redux-form'
import { useSelector } from 'react-redux'
import shield from '../../assets/images/shield.png'
import style from './Login.module.scss'
import TestAccountLogin from './TestAccountLogin/TestAccountLogin'
import { Input } from '../common/FormsControls/FormControls'
import { email, required } from '../../utils/validators'
import Preloader from '../common/Preloader/Preloader'
import { AppStateType } from '../../redux/store'

type LoginPropsType = {
  login: (email: string, password: string) => void,
  isAuth: boolean,
  errorMessage: string | null,
  loadTestAccountData: (data: any) => void,
  initialValues: any,
}

// const testLoginData = {
//   loginInputValue: 'admin@mail.dev',
//   passwordInputValue: 'admin',
// }

const Login: React.FC<LoginPropsType> = (props: LoginPropsType) => {
  const { initialValues, loadTestAccountData, login, isAuth, errorMessage } = props
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

      {errorMessage ? <div className={style.errorMessage}>{errorMessage}</div> : null}

      <LoginReduxForm initialValues={initialValues} loadTestAccountData={loadTestAccountData} onSubmit={onSubmit} />

    </div>
  )
}

type LoginFormPropsTypes = {
  loadTestAccountData: (data: any) => void,
}
type LoginFormOwnPropsTypes = InjectedFormProps & LoginFormPropsTypes

const LoginForm: React.FC<any> = (props: LoginFormOwnPropsTypes) => {
  const { handleSubmit, loadTestAccountData } = props
  const { t } = useTranslation()
  const isFetching = useSelector((state: AppStateType) => state.auth.isAuthFetching)

  if (isFetching) {
    return <Preloader className={style.preloader} />
  }

  const resetInitialValues = () => {
    loadTestAccountData(null)
  }

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <Field
        validate={[required, email]}
        placeholder={t('placeholderLogin')}
        component={Input}
        name='loginInputValue'
        autoFocus
        onChange={resetInitialValues}
      />
      <Field
        active={false}
        validate={[required]}
        placeholder={t('placeholderPassword')}
        component={Input}
        name='passwordInputValue'
        onChange={resetInitialValues}
      />
      <NavLink to='/registration'>
        <button onClick={resetInitialValues} className={style.registration_toggle_btn} type='button'>
          {t('Registration')}
        </button>
      </NavLink>

      <TestAccountLogin loadTestAccountData={loadTestAccountData} />

      <button onClick={handleSubmit} className={style.btn} type='button'>
        {t('Login')}
      </button>
    </form>
  )
}

const LoginReduxForm: any = reduxForm({ form: 'login redux form', touchOnBlur: false, enableReinitialize: true })(
  LoginForm
)

export default Login
