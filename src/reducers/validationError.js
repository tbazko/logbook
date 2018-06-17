import * as types from 'types'

const initialState = null

export default (state = initialState, action) => {
  const { type } = action

  switch (type) {
    case types.ActivityForm.ADD_ACTIVITY_ERROR:
      return {
        ...state,
        message: action.error.message,
        ...action.error,
      }
    case types.ActivityForm.ADD_ACTIVITY_TYPE:
      return initialState
    case types.DevTools.REMOVE_ALL_DATA:
      return initialState
    default:
      return state
  }
}
