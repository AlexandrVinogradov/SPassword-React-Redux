import { connect } from 'react-redux'
import Main from './Main'
import { addGroup } from '../../redux/main-reducer'

const mapStateToProps = state => {
  return {
    groups: state.mainPage.groups,
  }
}
export default connect(mapStateToProps, { addGroup })(Main)
