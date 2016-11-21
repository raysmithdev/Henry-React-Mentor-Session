import IntroView from '../components/IntroView'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    name: state.intro.name,
    about: state.intro.bio
  }
}

export default connect(mapStateToProps)(IntroView)
