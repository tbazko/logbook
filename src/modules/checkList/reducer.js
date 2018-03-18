import _ from 'lodash';
import * as types from './constants'

const initialState = {
  items: null,
  logs: null,
}

// const initialState = {
//   historicalItems: {
//     [id]: { title, descr, period }
//   },
//   items: {
//     [id]: { title, descr, period }
//   },
//   [start-of-day-timestamp]: {
//     [vega]: { completed: false, timestamp },
//     [sport]: { completed: false },
//     [alco]: { completed: true }
//   },
// }

export default (state = initialState, action) => {
  const { type } = action;
  const logs = {};

  switch (type) {
    case types.ADD_ITEM:
      return {
        ...state,
        items: {
          ...state.items,
          [action.id]: { title: action.title },
        },
      }
    case types.TOGGLE_ITEM_CHECKBOX:
      return {
        ...state,
        logs: {
          ...state.logs,
          [action.timestamp]: {
            ..._.get(state, `logs[${action.timestamp}]`, undefined),
            [action.id]: {
              completed: !_.get(state, `logs[${action.timestamp}][${action.id}].completed`, true),
            },
          },
        },
      }
    case types.REMOVE_LIST_ITEM:
      return {
        ...state,
        historicalItems: {
          ...state.historicalItems,
          ..._.pick(state.items, [`${action.id}`]),
        },
        items: _.omit(state.items, [`${action.id}`]),
      }
    // case types.CHECK_ALL:
    //   return state.map(item => ({ ...item, completed: true }))
    case types.SET_DEFAULT_ITEMS:
    case types.UNCHECK_ALL:
      if (state.logs && state.logs[action.timestamp]) return state

      if (!state.items) return { ...state, logs: null }
      Object.keys(state.items).forEach((item) => {
        logs[item] = { completed: false }
      });

      return {
        ...state,
        logs: {
          ...state.logs,
          [action.timestamp]: logs,
        },
      }
    case types.SET_ACTIVE_CHECKLIST:
      return {
        ...state,
        activeCheckListId: action.timestamp,
      }
    case types.REMOVE_ALL:
      return {
        ...state,
        items: null,
      }
    default:
      return state
  }
};
