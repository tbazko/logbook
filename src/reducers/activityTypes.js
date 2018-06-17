import _ from 'lodash'
import * as types from 'types'

const initialState = null

export default (state = initialState, action) => {
  const { type } = action

  switch (type) {
    case types.ActivityForm.ADD_ACTIVITY_TYPE:
      return {
        ...state,
        [action.id]: { title: action.title, createdAt: action.createdAt },
      }
    case types.ActivityCheckList.REMOVE_LIST_ITEM:
      return {
        ..._.omit(state, [action.id]),
      }
    // case types.ActivityCheckList.CHECK_ALL:
    //   return state.map(item => ({ ...item, completed: true }))
    case types.ActivityForm.EDIT_ACTIVITY_TYPE:
      return {
        ...state,
        [action.id]: { ...state[action.id], ...action.payload },
      }
    case types.ActivityCheckList.REMOVE_ALL:
      return initialState
    case types.DevTools.INSERT_DATA:
      return {
        ...state,
        ...action.payload.activityTypes,
      }
    case types.DevTools.REMOVE_ALL_DATA:
      return initialState
    default:
      return state
  }
}
