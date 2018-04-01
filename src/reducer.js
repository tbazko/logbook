import { combineReducers } from 'redux'
import * as reducers from 'reducers'

const rootReducer = combineReducers({
  activityTypes: reducers.activityTypes,
  historicalActivityTypes: reducers.historicalActivityTypes,
  validationError: reducers.validationError,
  activityLogs: reducers.activityLogs,
  activeDateTimestamp: reducers.activeDateTimestamp,
})

export default rootReducer
