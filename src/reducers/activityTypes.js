import _ from 'lodash';
import * as types from 'types'

const initialState = null

export default (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case types.AddActivityForm.ADD_ACTIVITY_TYPE:
      return {
        ...state,
        [action.id]: { title: action.title },
      }
    case types.ActivityCheckList.REMOVE_LIST_ITEM:
      return {
        ..._.omit(state, [action.id]),
      }
    // case types.ActivityCheckList.CHECK_ALL:
    //   return state.map(item => ({ ...item, completed: true }))
    case types.ActivityCheckList.REMOVE_ALL:
      return initialState
    default:
      return state
  }
};
