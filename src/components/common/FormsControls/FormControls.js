import React from 'react'
import s from './FormControls.module.scss'

export const Textarea = ({ input, meta }) => {
  const hasError = meta.touched && meta.error
  return (
    <div className={`${s.formControl} ${hasError ? s.error : ''}`}>
      <div>
        <textarea {...input} {...meta} />
      </div>
      {hasError && <span>{meta.error}</span>}
    </div>
  )
}

export const Input = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error
  const { placeholder, autoFocus } = props
  return (
    <div className={`${s.formControl} ${hasError ? s.error : ''}`}>
      <div>
        <input autoFocus={autoFocus} placeholder={placeholder} type='text' {...input} {...meta} />
      </div>
      {hasError && <span>{meta.error}</span>}
    </div>
  )
}
