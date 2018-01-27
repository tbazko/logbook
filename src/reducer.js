import { combineReducers } from 'redux'
import checkListReducer from 'modules/checkList/reducer'
import counterReducer from 'modules/counter/reducer'

const rootReducer = combineReducers({
  counter: counterReducer,
  checkList: checkListReducer,
})

export default rootReducer
