import React from 'react'
import style from './Interface.module.scss'
import shield from '../../../img/shield.png'
import SVGIcon from '../../../SVGIcons'

const Interface = () => {
  return (
    <section className={style.interface}>
      <div className={style.interface__header_mobile}>
        <SVGIcon className={style.icon_rectangles} name="rectangles" fill={'#FF8364'} />
        <div className={style.header__mobile_logo}>
          <p className={style.sidebar__header_name}>SPassword</p>
          <img src={shield} alt="SPassword logo" />
        </div>
      </div>

      <div className={style.interface__header}>
        <h1>GitHub</h1>

        <button type="button" className={style.interface__header_btn}>
          <SVGIcon className={style.icon_dots} name="dots" fill={'#5F6CAF'} />
        </button>

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
  )
}

export default Interface
