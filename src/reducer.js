import { combineReducers } from 'redux'
import * as reducers from 'reducers'

const rootReducer = combineReducers({
  activityTypes: reducers.activityTypes,
  activityCheckList: reducers.activityCheckList,
  historicalActivityTypes: reducers.historicalActivityTypes,
  validationError: reducers.validationError,
  activityLogs: reducers.activityLogs,
  activeLogTimestamp: reducers.activeLogTimestamp,
})

export default rootReducer
