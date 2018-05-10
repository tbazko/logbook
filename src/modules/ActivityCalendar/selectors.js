import _ from 'lodash'
import { getActivityLogs } from 'selectors'

export const getEarliestTimestamp = state => (parseFloat(_.keys(getActivityLogs(state))[0]))
export { getActivityLogs } from 'selectors'
