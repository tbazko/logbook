import { combineReducers } from 'redux'
import checkListReducer from 'modules/checkList/reducer'

const rootReducer = combineReducers({
  checkList: checkListReducer,
})

export default rootReducer
