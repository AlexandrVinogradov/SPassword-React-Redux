import React from 'react'
import { withTranslation, WithTranslation, useTranslation } from 'react-i18next'

const LanguageToggle: React.FC<WithTranslation> = (props: WithTranslation) => {
  const { i18n, tReady, t } = props

  const changeLanguage = (lng: any) => {
    i18n.changeLanguage(lng)
  }

  return (
    <form>
      <button type='button' onClick={() => changeLanguage('ru')}>
        ru
      </button>
      <button type='button' onClick={() => changeLanguage('de')}>
        en
      </button>
    </form>
  )
}
export default LanguageToggle
