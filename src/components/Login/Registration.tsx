import React from 'react'
import { NavLink, Redirect } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { reduxForm, Field, InjectedFormProps } from 'redux-form'
import shield from '../../img/shield.png'
import style from './Login.module.scss'
import { Input } from '../common/FormsControls/FormControls'
import { required, email, minLength } from '../../utils/validators'

type RegistrationPropsType = {
  registrationFetch: (login: string, password: string, firstName: string, lastName: string) => void,
  isAuth: boolean,
}

const Registration: React.FC<RegistrationPropsType> = (props: RegistrationPropsType) => {
  const { isAuth, registrationFetch } = props
  const { t } = useTranslation()

  const onSubmit = (formData: any) => {
    registrationFetch(
      formData.registrationLoginInputValue,
      formData.registrationPasswordInputValue,
      formData.registrationFirstNameInputValue,
      formData.registrationLastNameInputValue
    )
    // alert('asd')
  }

  if (isAuth === true) {
    return <Redirect to='/main' />
  }

  return (
    <div className={`${style.Login} ${style.Registration}`}>
      <img className={style.shield} src={shield} alt='shield' />
      <span className={style.title}>SPassword - {t('Registration')}</span>

      <RegistrationReduxForm onSubmit={onSubmit} />
    </div>
  )
}

const RegistrationForm: React.FC<InjectedFormProps> = (props: InjectedFormProps) => {
  const { handleSubmit } = props
  const { t } = useTranslation()
  const minLength8 = minLength(8)

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <Field
        placeholder={t('registrationPlaceholderLogin')}
        component={Input}
        name='registrationLoginInputValue'
        autoFocus
        validate={[required, email]}
      />
      <Field
        placeholder={t('registrationPlaceholderPassword')}
        component={Input}
        name='registrationPasswordInputValue'
        validate={[required, minLength8]}
      />
      <Field
        placeholder={t('registrationPlaceholderFirstName')}
        component={Input}
        name='registrationFirstNameInputValue'
        validate={[required]}
      />
      <Field
        placeholder={t('registrationPlaceholderLastName')}
        component={Input}
        name='registrationLastNameInputValue'
        validate={[required]}
      />

      <NavLink to='/login'>
        <button className={style.registration_toggle_btn} type='button'>
          {t('Already have account')}
        </button>
      </NavLink>

      <button onClick={handleSubmit} className={`${style.btn} ${style.btn_setRegistration}`} type='button'>
        {t('Registration')}
      </button>
    </form>
  )
}

const RegistrationReduxForm = reduxForm({ form: 'login redux form' })(RegistrationForm)

export default Registration
