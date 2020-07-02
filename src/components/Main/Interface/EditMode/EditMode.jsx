import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import style from './EditMode.module.scss'
import { Input } from '../../../common/FormsControls/FormControls'

const EditMode = props => {
  const { updateLogin, editModeToggle, isEditMode, login, password } = props

  const handleExitEditMode = values => {
    updateLogin(values)
    props.isEditMode(!props.editModeToggle)
  }

  return (
    <div className={style.edit_mode}>
      <EditModeReduxForm
        login={login}
        password={password}
        editModeToggle={editModeToggle}
        isEditMode={isEditMode}
        onSubmit={handleExitEditMode}
      />
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

const mapStateToProps = (state, props) => ({
  initialValues: {
    customLoginInput: props.login,
    customPasswordInput: props.password,
  },
  enableReinitialize: true,
})
const EditModeReduxForm = connect(mapStateToProps)(
  reduxForm({ form: 'my redux form', enableReinitialize: true })(EditModeForm)
)

export default EditMode
