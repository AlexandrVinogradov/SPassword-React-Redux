import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Input } from '../../common/FormsControls/FormControls'
import SVGIcon from '../../../SVGIcons'
import style from './ModalAdd.module.scss'

const ModalAdd = props => {
  const { handleClick, handleCloseModal, showModal, groups, onAddGroup } = props

  return (
    <div
      onKeyDown={handleClick} // resolve the question
      tabIndex={0}
      role="button"
      id="modal"
      onClick={handleCloseModal}
      className={style.addGroup__popup_container}
      isOpen={showModal}
    >
      {/* doesnt need groups */}
      <GroupReduxForm onSubmit={onAddGroup} group={groups} /> 
    </div>
  )
}

const GroupForm = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div id="popup" className={style.content}>
          <Field component={Input} name="customInput" />

          <button type="submit">
            <SVGIcon className={style.checkMark_btn__icon} name="checkMark" />
          </button>
        </div>
      </div>
    </form>
  )
}

const GroupReduxForm = reduxForm({ form: 'my redux formm' })(GroupForm)

export default ModalAdd
