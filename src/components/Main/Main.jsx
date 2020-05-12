import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { NavLink } from 'react-router-dom'
import style from './Main.module.scss'
import shield from '../../img/shield.png'
import NavListBar from './NavListBar/NavListBar'
import SVGIcon from '../../SVGIcons'
import Interface from './Interface/Interface'

import { Input } from '../common/FormsControls/FormControls'

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
    this.props.addGroup(value.customInput)
    console.log(value.customInput);
  }

  render() {
    const { showModal } = this.state

    // redux-form
    const groupElement = this.props.groups.map(g => <GroupElement id={g.id} key={g.id} groups={g.groups} />)

    return (
      <main className={style.Main}>
        {showModal ? (
          <div
            onKeyDown={this.handleClick} // resolve the question
            tabIndex={0}
            role="button"
            id="modal"
            onClick={this.handleCloseModal}
            className={style.addGroup__popup_container}
            isOpen={showModal}
          >
            <GroupReduxForm onSubmit={this.onAddGroup} group={this.props.groups} />

            <div id="popup" className={style.addGroup__popup_content}>
              <input />
              <button type="button">
                <SVGIcon className={style.checkMark_btn__icon} name="checkMark" />
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
            <SVGIcon className={style.circle_btn__icon} name="addGroup" />
          </button>

          <NavListBar groups={this.props.groups} />

          <NavLink className={`${style.circle_btn} ${style.circle_btn__logout}`} to="/login">
            <p>Logout</p>
            <SVGIcon className={style.circle_btn__icon} name="logout" />
          </NavLink>
        </section>

        <Interface />
      </main>
    )
  }
}

export default Main

const GroupElement = props => {
  return (
    <div>
      <li>{props.groups}</li>
    </div>
  )
}

const GroupForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Input} name="customInput" />
        <button>add</button>
      </div>
    </form>
  )
}

const GroupReduxForm = reduxForm({ form: 'my redux form' })(GroupForm)
