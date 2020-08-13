import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import style from './MobileNavList.module.scss'
import '../animation.scss'
import NavListBar from '../../NavListBar/NavListBar'
import SVGIcon from '../../../../SVGIcons'
import { GroupsType } from '../../../../types/types'

type MobileNavListTypes = {
  editModeToggle: (toggle: boolean) => void,
  groups: GroupsType[],
  selectGroup: (idOfSelectedGroup: number) => void,
  isMobileNavList: (toggle: boolean) => void,
}

const MobileNavList: React.FC<MobileNavListTypes> = (props: MobileNavListTypes) => {
  const { editModeToggle, groups, selectGroup, isMobileNavList } = props

  const handleCloseMobileNavList = () => {
    isMobileNavList(false)
  }

  return (
    <ReactCSSTransitionGroup
      transitionName='anim'
      transitionAppear
      transitionAppearTimeout={1000}
      transitionEnter={false}
      transitionLeave={false}
    >
      <div className={style.MobileNavList}>
        <button onClick={handleCloseMobileNavList} type='button'>
          <SVGIcon className={style.icon_close} name='iconClose' />
        </button>
        <NavListBar
          isMobileNavList={isMobileNavList}
          editModeToggle={editModeToggle}
          groups={groups}
          selectGroup={selectGroup}
        />
      </div>
    </ReactCSSTransitionGroup>
  )
}

export default MobileNavList
