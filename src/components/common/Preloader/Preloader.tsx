import React from 'react'
import preloader from '../../../assets/images/preloader.gif'
import s from './Preloader.module.css'

type PreloaderPropsType = {
  className: string,
}

const Preloader: React.FC<PreloaderPropsType> = (props: PreloaderPropsType) => {
  const { className } = props
  return (
    <div className={`${s.preloader} ${className}`}>
      <img alt='preloader' src={preloader} />
    </div>
  )
}

export default Preloader
