import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import style from './Hint.module.scss'
import '../animation.css'

const Hint = () => {
  return (
    <ReactCSSTransitionGroup
      transitionName='anim'
      transitionAppear
      transitionAppearTimeout={1000}
      transitionEnter={false}
      transitionLeave={false}
    >
      <div className={`${style.Hint} anim`}>
        <p>Select a group, my friend</p>
      </div>
    </ReactCSSTransitionGroup>
  )
}

export default Hint
