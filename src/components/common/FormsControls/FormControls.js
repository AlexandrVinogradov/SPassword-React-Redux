import React from 'react';
import s from './FormControls.module.css';


export const Textarea = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
        <div>
            <textarea {...input} {...meta}/>
        </div>
        {hasError && <span>{meta.error}</span>}
    </div>
}

export const Input = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
        <div>
            <input {...input} {...meta}/>
        </div>
        {hasError && <span>{meta.error}</span>}
    </div>
}

// hasError = false && undefined 
// '', 0, false, null, undef