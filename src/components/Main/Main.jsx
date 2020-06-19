import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './Main.module.scss'
import shield from '../../img/shield.png'
import NavListBar from './NavListBar/NavListBar'
import SVGIcon from '../../SVGIcons'
import Interface from './Interface/Interface'
import ModalAdd from './ModalAdd/ModalAdd'

class Main extends React.Component {
  constructor() {
    super()
    this.state = {
      showModal: false,
    }
  }

  handleOpenModal = () => {
    this.setState({ showModal: true })
  }

  handleCloseModal = event => {
    if (event.target.id === 'modal') {
      this.setState({ showModal: false })
    }
  }

  onAddGroup = value => {
    const { addGroup } = this.props
    addGroup(value.customInput)
    this.state.showModal = false
  }

  render() {
    const { showModal } = this.state
    const { groups, selectGroup, idOfSelectedGroup, deleteGroup } = this.props

    return (
      <main className={style.Main}>
        {showModal ? (
          <ModalAdd
            showModal={showModal}
            handleCloseModal={this.handleCloseModal}
            onAddGroup={this.onAddGroup}
            groups={groups}
          />
        ) : null}

        <section className={style.sidebar}>
          <div className={style.header}>
            <img src={shield} alt="SPassword logo" />
            <p className={style.header_name}>SPassword</p>
          </div>

          <button type="button" onClick={this.handleOpenModal} className={style.circle_btn}>
            <p>Add group</p>
            <SVGIcon className={style.circle_btn__icon} name="addGroup" />
          </button>

          <NavListBar groups={groups} selectGroup={selectGroup} idOfSelectedGroup={idOfSelectedGroup} />

          <NavLink className={`${style.circle_btn} ${style.circle_btn__logout}`} to="/login">
            <p>Logout</p>
            <SVGIcon className={style.circle_btn__icon} name="logout" />
          </NavLink>
        </section>

        <Interface deleteGroup={deleteGroup} groups={groups} idOfSelectedGroup={idOfSelectedGroup} />
      </main>
    )
  }
}

export default Main
