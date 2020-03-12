import React from 'react'
import style from './Main.module.scss'
import shield from '../img/shield.png'
import plus from '../img/Icon-plus.png'
import arrow from '../img/icon-arrow.png'
import NavListbar from './NavListbar/NavListbar'

const Main = () => {
  return (
    <main className={style.Main}>
      <section>
        <div>
          <img src={shield} alt="SPassword logo" />
          <p>SPassword</p>
        </div>

        <div>
          <p>Add group</p>
          <img src={plus} alt="SPassword logo" />
        </div>

        <NavListbar />

        <div>
          <p>Logput</p>
          <img src={arrow} alt="SPassword logo" />
        </div>
      </section>
      
      <section>2</section>
    </main>
  )
}

export default Main
