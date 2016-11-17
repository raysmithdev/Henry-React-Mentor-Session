import { connect } from 'react-redux'
import AppView from '../components/AppView'

const mapStateToProps = (state) => {
  return {
    x: state.user.name
  }
}

export default connect(mapStateToProps)(AppView)
