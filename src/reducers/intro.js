const initialState = {
  name: "Ray Smith",
  bio: "Hey my name is Ray and I love to do React & Redux :)"
}

const intro = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    default:
      return state
  }
}

export default intro
