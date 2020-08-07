import React from 'react'
import { WithTranslation } from 'react-i18next'
import SVGIcon from '../../SVGIcons'
import style from './LanguagesToggle.module.scss'

const LanguageToggle: React.FC<WithTranslation> = (props: WithTranslation) => {
  const { i18n } = props

  const changeLanguage = (lng: any) => {
    i18n.changeLanguage(lng)
  }

  return (
    <form className={style.Language_toggle_form}>
      <button className={style.language_button} type='button' onClick={() => changeLanguage('ru')}>
        <SVGIcon className={style.icon_flag} name='flag-russia' />
      </button>
      <button className={style.language_button} type='button' onClick={() => changeLanguage('de')}>
        <SVGIcon className={style.icon_flag} name='flag-UK' />
      </button>
    </form>
  )
}
export default LanguageToggle
