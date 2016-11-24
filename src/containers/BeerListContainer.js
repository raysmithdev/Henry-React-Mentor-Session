import { connect } from 'react-redux'
import BeerListView from '../components/BeerListView'

const mapStateToProps = (state) => {
  return {
    beers: state.beers.data
  }
}

export default connect(mapStateToProps, null)(BeerListView)
