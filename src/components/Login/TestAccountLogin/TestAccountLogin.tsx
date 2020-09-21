import React from 'react'
import { useTranslation } from 'react-i18next'
import SVGIcon from '../../../SVGIcons'
import style from './TestAccountLogin.module.scss'

const TestAccountLogin: React.FC = () => {
  const { t } = useTranslation()

  return (
    <div className={style.TestAccountLogin}>
      <div className={style.hintBlock}>
        <span>{t('you can register or use a test account')}</span>
        <p>{t('Login')}: <span className={style.fontBold}>admin@mail.dev</span></p>
        <p>{t('Password')}: <span className={style.fontBold}>admin</span></p>
      </div>
      <SVGIcon className={style.icon_long_arrow} name='iconLongArrow' />
    </div>
  )
}

export default TestAccountLogin
