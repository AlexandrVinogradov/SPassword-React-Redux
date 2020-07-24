import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import style from './Hint.module.scss'
import '../animation.scss'

type HintPropsTypes = {
  hintMessage: string,
  hintStatus: string
}

const Hint: React.FC<HintPropsTypes> = (props: HintPropsTypes) => {
  const { hintMessage, hintStatus } = props

  return (
    <ReactCSSTransitionGroup
      transitionName='anim'
      transitionAppear
      transitionAppearTimeout={1000}
      transitionEnter={false}
      transitionLeave={false}
    >
      <div className={`${style.Hint} anim ${style.Hint} ${style[hintStatus]}` }>
        <p>{hintMessage}</p>
      </div>
    </ReactCSSTransitionGroup>
  )
}

export default Hint
