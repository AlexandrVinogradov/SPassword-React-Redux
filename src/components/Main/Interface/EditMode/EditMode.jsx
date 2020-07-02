import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import style from './EditMode.module.scss'
import { Input } from '../../../common/FormsControls/FormControls'

const EditMode = props => {
  const { updateLogin, editModeToggle, isEditMode, login, password } = props

  const getInitialValues = () => {
    return {
      customLoginInput: login,
      customPasswordInput: password,
    }
  }

  const handleExitEditMode = values => {
    updateLogin(values)
    props.isEditMode(!props.editModeToggle)
  }

  return (
    <div className={style.edit_mode}>
      <EditModeReduxForm
        getInitialValues={getInitialValues}
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
      <Field placeholder='Enter login' component={Input} name='customLoginInput' />
      <Field placeholder='Enter password' component={Input} name='customPasswordInput' />
      <button type='submit'>Edit</button>
    </form>
  )
}

const mapStateToProps = (state, props) => ({
  initialValues: props.getInitialValues(),
  enableReinitialize: true,
})
const EditModeReduxForm = connect(mapStateToProps)(
  reduxForm({ form: 'my redux form', enableReinitialize: true })(EditModeForm)
)

export default EditMode
