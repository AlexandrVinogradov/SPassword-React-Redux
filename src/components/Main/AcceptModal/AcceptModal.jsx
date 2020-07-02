import React from 'react'
import style from './AcceptModal.module.scss'

const AcceptModal = props => {
  const handleCloseAcceptModal = () => {
    props.isShowAcceptModal(false)
  }

  const handleDeleteGroup = () => {
    props.deleteGroup(props.title)
    props.isShowAcceptModal(false)
  }

  const {title} = props

  return (
    <div className={style.accept_modal__container}>
      <div className={style.accept_modal}>
        <div className={style.accept_modal__content}>
          <p>Are you sure that you want to delete <span>{title}</span> passwords</p>
          <div className={style.buttons_block}>
            <button onClick={handleDeleteGroup} type='button'>
              Yes
            </button>
            <button onClick={handleCloseAcceptModal} type='button'>
              Oh, no
            </button>
          </div>
        </div>
      </div>
    </div> 
  )
}

export default AcceptModal
