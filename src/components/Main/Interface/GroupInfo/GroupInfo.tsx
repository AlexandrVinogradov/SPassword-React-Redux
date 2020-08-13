import React from 'react'
import { useTranslation } from 'react-i18next'
import SVGIcon from '../../../../SVGIcons'
import style from './GroupInfo.module.scss'

type GroupInfoPropsTypes = {
  title: string,
  login: string | null,
  password: string | null,
  hintAnimation: (message: string, hintStatus: string) => void,
}

const GroupInfo: React.FC<GroupInfoPropsTypes> = (props: GroupInfoPropsTypes) => {
  const { title, hintAnimation, login, password } = props
  const { t } = useTranslation()

  const loginElement = React.createRef<any>()
  const passwordElement = React.createRef<any>()

  const copyLoginButton = () => {
    const loginValue = loginElement.current
    loginValue.contentEditable = true
    loginValue.focus()
    document.execCommand('selectAll')
    document.execCommand('copy')
    loginValue.contentEditable = false

    const hintMessage = t(`login copied successful`, { title })
    hintAnimation(hintMessage, 'success')
  }
  const copyPasswordButton = () => {
    const passwordValue = passwordElement.current
    passwordValue.contentEditable = true
    passwordValue.focus()
    document.execCommand('selectAll')
    document.execCommand('copy')
    passwordValue.contentEditable = false

    const hintMessage = t(`password copied successful`, { title })
    hintAnimation(hintMessage, 'success')
  }

  return (
    <div className={style.groupInfo}>
      <div className={style.login}>
        <p ref={loginElement}>{login}</p>
        <button onClick={copyLoginButton} type='button'>
          <SVGIcon className={style.icon_copy} name='copyButton' />
        </button>
      </div>
      <div className={style.password}>
        <p ref={passwordElement}>{password}</p>
        <button onClick={copyPasswordButton} type='button'>
          <SVGIcon className={style.icon_copy} name='copyButton' />
        </button>
      </div>
    </div>
  )
}
export default GroupInfo
