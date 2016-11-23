const initialState = {
  name: "Ray Smith",
  bio: "Hey my name is Ray and I love to do React & Redux :)"
}

const intro = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_USER_NAME':
      return Object.assign({}, state, {
        name: action.newName
      })
    default:
      return state
  }
}

export default intro
