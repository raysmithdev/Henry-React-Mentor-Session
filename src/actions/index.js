import { API_KEY } from '../config'

const recieveBeers = (beers) => {
  return {
    type: 'RECIEVE_BEERS',
    beers
  }
}

export const fetchBeers = (beerName) => {
  return dispatch => {
    return fetch(`http://api.brewerydb.com/v2/beers?key=${API_KEY}&name=${beerName}`)
      .then(response => response.json())
      .then(beers => dispatch(recieveBeers(beers.data)))
  }
}
