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
          <p className=''>Are you sure that you want to delete {title} passwords</p>
          <div className={style.buttons_block}>
            <button onClick={handleDeleteGroup} type='button'>
              yes
            </button>
            <button onClick={handleCloseAcceptModal} type='button'>
              oh, no
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AcceptModal
