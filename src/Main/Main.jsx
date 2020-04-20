import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './Main.module.scss'
import shield from '../img/shield.png'
import NavListbar from './NavListbar/NavListbar'
import SVGIcon from '../SVGIcons'

const Main = () => {
  return (
    <main className={style.Main}>
      <section className={style.sidebar}>
        <div className={style.sidebar__header}>
          <img src={shield} alt="SPassword logo" />
          <p className={style.sidebar__header_name}>SPassword</p>
        </div>

        <NavLink className={style.circle_btn} to="/login">
          <p>Add group</p>
          <SVGIcon className={style.circle_btn__icon} name="addGroup" fill={'#FFB677'} />
        </NavLink>

        <NavListbar />

        <NavLink className={style.circle_btn + ' ' + style.circle_btn__logout} to="/login">
          <p>Logout</p>
          <SVGIcon className={style.circle_btn__icon} name="logout" fill={'#FFB677'} />
        </NavLink>
      </section>

      <section className={style.interface}>
        <div className={style.interface__header}>
          <h1>GitHub</h1>

          <div className={style.interface__header_btns}>
            <button type="button" className={style.interface__header_btn}>
              <SVGIcon className={style.icon_pencil} name="pencil" fill={'#5F6CAF'} />
            </button>
            <button type="button" className={style.interface__header_btn}>
              <SVGIcon className={style.icon_bucket} name="bucket" fill={'#FF8364'} />
            </button>
          </div>
        </div>

        <div className={style.interface__content}>
          <p>MARKDOWN CONTENT</p>
        </div>
      </section>
    </main>
  )
}

export default Main
