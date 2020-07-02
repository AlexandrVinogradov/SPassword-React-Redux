import React from 'react'
import s from './FormControls.module.css'

export const Textarea = ({ input, meta }) => {
  const hasError = meta.touched && meta.error
  return (
    <div className={`${s.formControl} + ' ' + ${(hasError ? s.error : '')}`}>
      <div>
        <textarea {...input} {...meta} />
      </div>
      {hasError && <span>{meta.error}</span>}
    </div>
  )
}

export const Input = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error
  const {placeholder} = props
  return (
    <div className={`${s.formControl} + ' ' + ${(hasError ? s.error : '')}`}>
      <div>
        <input placeholder={placeholder} type="text" {...input} {...meta} />
      </div>
      {hasError && <span>{meta.error}</span>}
    </div>
  )
}
 