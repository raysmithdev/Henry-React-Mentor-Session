const initialState = {
  data: []
}

const beers = (state = initialState, action) => {
  switch (action.type) {
    case 'RECIEVE_BEERS':
      return Object.assign({}, state, {
        data: action.beers
      })
    default:
      return state
  }
}

export default beers
