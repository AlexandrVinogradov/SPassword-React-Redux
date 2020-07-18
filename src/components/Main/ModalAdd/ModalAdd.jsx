import React from 'react'
import { NavLink } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import { Input } from '../../common/FormsControls/FormControls'
import SVGIcon from '../../../SVGIcons'
import style from './ModalAdd.module.scss'
import { required, maxLengthCreator } from '../../../utils/validators'

const maxLength = maxLengthCreator(20)

const ModalAdd = props => {
  const { handleCloseModal, showModal, onAddGroup, toggleModal } = props

  const addAndSelectGroup = value => {
    onAddGroup(value)
    console.log(112321312) /////////////////
  }

  const closeModalOnEsc = event => {
    if (event.keyCode === 27) {
      toggleModal(false)
    }
  }

  return (
    <div
      onKeyDown={closeModalOnEsc}
      tabIndex={0}
      role='button'
      id='modal'
      onClick={handleCloseModal}
      className={style.addGroup__popup_container}
      isOpen={showModal}
    >
      <GroupReduxForm onSubmit={addAndSelectGroup} />
    </div>
  )
}

const GroupForm = props => {
  const { handleSubmit , value} = props


  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div id='popup' className={style.content}>
          <Field
            validate={[required, maxLength]}
            placeholder='Enter name of group'
            component={Input}
            name='customInput'
            autoFocus='true'
          />

          <button type='submit'>
            {/* <NavLink to={`/main/${value}`} activeClassName={style.active} className={style.a}> */}
              <SVGIcon className={style.checkMark_btn__icon} name='checkMark' />
            {/* </NavLink> */}
          </button>
        </div>
      </div>
    </form>
  )
}

const GroupReduxForm = reduxForm({ form: 'my redux form' })(GroupForm)

export default ModalAdd
