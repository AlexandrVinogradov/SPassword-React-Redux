import React from 'react'
import { NavLink, Redirect } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { reduxForm, Field, InjectedFormProps } from 'redux-form'
import { useSelector } from 'react-redux'
import shield from '../../assets/images/shield.png'
import style from './Login.module.scss'
import { Input } from '../common/FormsControls/FormControls'
import { email, required } from '../../utils/validators'
import Preloader from '../common/Preloader/Preloader'
import { AppStateType } from '../../redux/store'

type LoginPropsType = {
  login: (email: string, password: string) => void,
  isAuth: boolean,
  errorMessage: string | null,
  // getProfile: () => void,
}

const Login: React.FC<LoginPropsType> = (props: LoginPropsType) => {
  const { login, isAuth, errorMessage } = props
  const { t } = useTranslation()

  const onSubmit = (formData: any) => {
    login(formData.loginInputValue, formData.passwordInputValue)
    // getProfile()
  }

  if (isAuth === true) {
    return <Redirect to='/main' />
  }

  return (
    <div className={style.Login}>
      <img className={style.shield} src={shield} alt='shield' />
      <span className={style.title}>SPassword - {t('your safe')}</span>

      {errorMessage ? <div className={style.errorMessage}>{errorMessage}</div> : null}

      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  )
}

const LoginForm: React.FC<InjectedFormProps> = (props: InjectedFormProps) => {
  const { handleSubmit } = props
  const { t } = useTranslation()
  const isFetching = useSelector((state: AppStateType) => state.auth.isAuthFetching)

  if (isFetching) {
    return <Preloader className={style.preloader} />
  }

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <Field
        validate={[required, email]}
        placeholder={t('placeholderLogin')}
        component={Input}
        name='loginInputValue'
        autoFocus
      />
      <Field
        active={false}
        validate={[required]}
        placeholder={t('placeholderPassword')}
        component={Input}
        name='passwordInputValue'
      />

      <NavLink to='/registration'>
        <button className={style.registration_toggle_btn} type='button'>
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
