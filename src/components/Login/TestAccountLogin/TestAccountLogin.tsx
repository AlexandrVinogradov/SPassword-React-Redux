import React from 'react'
import { useTranslation } from 'react-i18next'
import SVGIcon from '../../../SVGIcons'
import style from './TestAccountLogin.module.scss'

type TestAccountLoginPropsTypes = {
  loadTestAccountData: (data: any) => void,
}

const testLoginData = {
  loginInputValue: 'admin@mail.dev',
  passwordInputValue: 'admin',
}

const TestAccountLogin: React.FC<TestAccountLoginPropsTypes> = (props: TestAccountLoginPropsTypes) => {
  const { t } = useTranslation()
  const { loadTestAccountData } = props

  return (
    <div className={style.TestAccountLogin}>
      <button type='button' onClick={() => loadTestAccountData(testLoginData)} className={style.hintBlock}>
        <span>{t('you can register or use a test account')}</span>
        <p>
          {t('Login')}: <span className={style.fontBold}>admin@mail.dev</span>
        </p>
        <p>
          {t('Password')}: <span className={style.fontBold}>admin</span>
        </p>
      </button>
      <SVGIcon className={style.icon_long_arrow} name='iconLongArrow' />
    </div>
  )
}

export default TestAccountLogin
