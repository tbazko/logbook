import * as types from 'types'

const initialState = {
  viewMode: 'default',
}

export default (state = initialState, action) => {
  const { type } = action

  switch (type) {
    case types.ActivityCheckListHeader.SET_VIEW_MODE:
      return {
        viewMode: action.viewMode,
      }
    case types.DevTools.REMOVE_ALL_DATA:
      return initialState
    default:
      return state
  }
}
