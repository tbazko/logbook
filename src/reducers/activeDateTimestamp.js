import * as types from 'types'

const initialState = 0

export default (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case types.HomeHeader.SHOW_PREV_DATE:
    case types.HomeHeader.SHOW_NEXT_DATE:
    case types.ActivityCheckList.SET_ACTIVE_CHECKLIST:
      return action.timestamp
    default:
      return state
  }
};
