import React, { useState } from 'react'
import style from './Interface.module.scss'
import shield from '../../../img/shield.png'
import SVGIcon from '../../../SVGIcons'
import AcceptModal from '../AcceptModal/AcceptModal'
import EditMode  from './EditMode/EditMode'

const Interface = props => {
  const { idOfSelectedGroup, updateLogin, groups, deleteGroup } = props

  const [showAcceptModal, isShowAcceptModal] = useState(false)
  const [editModeToggle, isEditMode] = useState(false)

  let title
  let login
  let password

  if (idOfSelectedGroup !== undefined && groups[idOfSelectedGroup]) {
    const selectedGroup = props.groups[props.idOfSelectedGroup]

    title = selectedGroup.name
    login = selectedGroup.login
    password = selectedGroup.password
  }

  const handleShowAcceptModal = () => {
    if (idOfSelectedGroup === 0 || idOfSelectedGroup) {
      isShowAcceptModal(true)
    } else {
      alert('select a group my friend')
    }
  }

  const handleEnterInEditMod = () => {
    if (idOfSelectedGroup === 0 || idOfSelectedGroup) {
      isEditMode(!editModeToggle)
    } else {
      alert('select a group my friend')
    }
  }

  return (
    <main>
      {showAcceptModal ? (
        <AcceptModal title={title} deleteGroup={deleteGroup} isShowAcceptModal={isShowAcceptModal} />
      ) : null}

      <section className={style.interface}>
        <div className={style.header_mobile}>
          <SVGIcon className={style.icon_rectangles} name='rectangles' fill='#FF8364' />
          <div className={style.header__mobile_logo}>
            <p className={style.sidebar__header_name}>SPassword</p>
            <img src={shield} alt='SPassword logo' />
          </div>
        </div>

        <div className={style.header}>
          <h1>{title}</h1>

          <button type='button' className={style.btn}>
            <SVGIcon className={style.icon_dots} name='dots' fill='#5F6CAF' />
          </button>

          <div className={style.edit_btns}>
            <button onClick={handleEnterInEditMod} type='button' className={style.btn}>
              <SVGIcon className={style.icon_pencil} name='pencil' fill='#5F6CAF' />
            </button>
            <button onClick={handleShowAcceptModal} type='button' className={style.btn}>
              <SVGIcon className={style.icon_bucket} name='bucket' fill='#FF8364' />
            </button>
          </div>
        </div>

        <div className={style.content}>
          {editModeToggle ? (
            <EditMode login={login} password={password} editModeToggle={editModeToggle} isEditMode={isEditMode} updateLogin={updateLogin} />
          ) : (
            null
          )}
          <p>{title ? <GroupInfo login={login} password={password} /> : 'MARKDOWN CONTENT'}</p>
        </div>
      </section>
    </main>
  )
}

const GroupInfo = props => {
  const { login, password } = props

  return (
    <div>
      <p>{login}</p>
      <p>{password}</p>
    </div>
  )
}
export default Interface
