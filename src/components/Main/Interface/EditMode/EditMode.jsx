import React from 'react'
import style from './EditMode.module.scss'


const EditMode = () => {
  return (
    <div className={style.edit_mode}>
      <input />
      <input />
      <button type='button'>Edit</button>
    </div>
  )
}

export default EditMode
