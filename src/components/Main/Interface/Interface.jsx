import React from 'react'
import style from './Interface.module.scss'
import shield from '../../../img/shield.png'
import SVGIcon from '../../../SVGIcons'
// import { clearFields } from 'redux-form'

const Interface = props => {
  const { idOfSelectedGroup } = props
  let title
  let login
  let password

  if (idOfSelectedGroup !== undefined && props.groups[props.idOfSelectedGroup]) {
    const selectedGroup = props.groups[props.idOfSelectedGroup]

    console.log(selectedGroup.login);

    title = selectedGroup.name
    login = selectedGroup.login
    password = selectedGroup.password
  }

  const handleDeleteGroup = () => {
    props.deleteGroup(title)
  }

  return (
    <section className={style.interface}>
      <div className={style.header_mobile}>
        <SVGIcon className={style.icon_rectangles} name="rectangles" fill="#FF8364" />
        <div className={style.header__mobile_logo}>
          <p className={style.sidebar__header_name}>SPassword</p>
          <img src={shield} alt="SPassword logo" />
        </div>
      </div>

      <div className={style.header}>
        <h1>{title}</h1>

        <button type="button" className={style.btn}>
          <SVGIcon className={style.icon_dots} name="dots" fill="#5F6CAF" />
        </button>

        <div className={style.edit_btns}>
          <button type="button" className={style.btn}>
            <SVGIcon className={style.icon_pencil} name="pencil" fill="#5F6CAF" />
          </button>
          <button onClick={handleDeleteGroup} type="button" className={style.btn}>
            <SVGIcon className={style.icon_bucket} name="bucket" fill="#FF8364" />
          </button>
        </div>
      </div>

      <div className={style.content}>
        <p>{title ? <GroupInfo login={login} password={password} /> : 'MARKDOWN CONTENT'}</p>
      </div>
    </section>
  )
}

const GroupInfo = props => {
  return (
    <div>
      <p>{props.login}</p>
      <p>{props.password}</p>
    </div>
  )
}
export default Interface
