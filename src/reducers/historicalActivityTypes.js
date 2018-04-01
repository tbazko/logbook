import _ from 'lodash';
import * as types from 'types'

const initialState = null

export default (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case types.ActivityCheckList.REMOVE_LIST_ITEM:
      return {
        ...state,
        [action.id]: action.activityType,
      }
    default:
      return state
  }
};
