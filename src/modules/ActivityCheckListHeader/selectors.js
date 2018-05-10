import { getActiveLogTimestamp } from 'selectors'

export const getActiveCheckListId = state => getActiveLogTimestamp(state)
export { getActivityTypes, getCheckListMode } from 'selectors'
