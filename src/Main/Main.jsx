import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './Main.module.scss'
import shield from '../img/shield.png'
import NavListBar from './NavListBar/NavListBar'
import SVGIcon from '../SVGIcons'
import Interface from './interface/interface'

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

  handleCloseModal = (event) => {
    console.log(event.target.classList.contains('addGroup__popup_container__31n-c')); 
    // console.log(event.target.classList); 
    // if (event.target.classList.contains('addGroup__popup_content') )
    this.setState({ showModal: false })
  }

  render() {
    const { showModal } = this.state

    return (
      <main className={style.Main}>

        {showModal ? (
        <div onClick={this.handleCloseModal} className={style.addGroup__popup_container} isOpen={showModal}>
          <button type="button" onClick={this.handleCloseModal}>
            close
          </button>
          <div id="popup" className={style.addGroup__popup_content}>
            <input  />
            <button type="button">
              <SVGIcon className={style.checkMark_btn__icon} name="checkMark" fill={'#FFFFFF'} />
            </button>
          </div>
        </div>
        ) : null}

        <section className={style.sidebar}>
          <div className={style.sidebar__header}>
            <img src={shield} alt="SPassword logo" />
            <p className={style.sidebar__header_name}>SPassword</p>
          </div>

          <button type="button" onClick={this.handleOpenModal} className={style.circle_btn}>
            <p>Add group</p>
            <SVGIcon className={style.circle_btn__icon} name="addGroup" fill={'#FFB677'} />
          </button>

          <NavListBar />

          <NavLink className={`${style.circle_btn} ${style.circle_btn__logout}`} to="/login">
            <p>Logout</p>
            <SVGIcon className={style.circle_btn__icon} name="logout" fill={'#FFB677'} />
          </NavLink>
        </section>

        <Interface />
      </main>
    )
  }
}

export default Main
