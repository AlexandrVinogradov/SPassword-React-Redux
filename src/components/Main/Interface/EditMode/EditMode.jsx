import React from 'react'
import { Field, reduxForm } from 'redux-form'
import style from './EditMode.module.scss'
import { Input } from '../../../common/FormsControls/FormControls'

const EditMode = props => {
  const { updateLogin, editModeToggle, isEditMode } = props

  // const handleExitEditMode = () => {
  //   updateLogin('yuyu')
  //   props.isEditMode(!props.editModeToggle)
  // }

  return (
    <div className={style.edit_mode}>
      <EditModeReduxForm editModeToggle={editModeToggle} isEditMode={isEditMode} onSubmit={updateLogin} />
    </div>
  )
}

const EditModeForm = props => {
  const { handleSubmit } = props

  return (
    <form onSubmit={handleSubmit}>
      <Field component={Input} name='customLoginInput' />
      <Field component={Input} name='customPasswordInput' />
      <button type='submit'>Edit</button>
    </form>
  )
}

const EditModeReduxForm = reduxForm({ form: 'my redux form' })(EditModeForm)

export default EditMode
