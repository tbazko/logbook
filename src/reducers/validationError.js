import * as types from 'types'

const initialState = null

export default (state = initialState, action) => {
  const { type } = action

  switch (type) {
    case types.AddActivityForm.ADD_ACTIVITY_ERROR:
      return {
        ...state,
        message: action.error.message,
        ...action.error,
      }
    case types.AddActivityForm.ADD_ACTIVITY_TYPE:
      return initialState
    default:
      return state
  }
}
