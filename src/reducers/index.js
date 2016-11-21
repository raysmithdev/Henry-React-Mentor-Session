import { combineReducers } from 'redux'
import user from './user'
import intro from './intro'

const reducers = combineReducers({
  user,
  intro
})

export default reducers
