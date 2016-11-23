import { connect } from 'react-redux'
import FormView from '../components/FormView'
import { changeUserName } from '../actions'

// This function is where we map dispatching redux actions to props
// so we can call these props in our View / Presentational component i.e FormView
const mapDispatchToProps = (dispatch) => {
  return {
    changeName: (newName) => {
      return dispatch(changeUserName(newName))
    }
  }
}

export default connect(null, mapDispatchToProps)(FormView)
