import { connect } from 'react-redux'
import Main from './Main'
import { addGroup, selectGroup } from '../../redux/main-reducer'

const mapStateToProps = state => {
  return {
    groups: state.mainPage.groups,
    idOfSelectedGroup: state.mainPage.idOfSelectedGroup
  }
}
export default connect(mapStateToProps, { addGroup, selectGroup })(Main)
