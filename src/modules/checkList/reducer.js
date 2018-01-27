import uuid from 'react-native-uuid'
import * as types from './constants'

export default (state = [], action) => {
  const { type } = action;

  switch (type) {
    case types.ADD_LIST_ITEM:
      return [
        ...state,
        {
          id: uuid.v4(),
          title: action.title,
          completed: false,
        },
      ]
    case types.TOGGLE_LIST_ITEM:
      return state.map((todo) => { // eslint-disable-line
        return (todo.id === action.id)
          ? { ...todo, completed: !todo.completed }
          : todo
      })
    default:
      return state
  }
};
