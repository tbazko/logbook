import * as types from './constants'

export const toggleListItem = id => ({ type: types.TOGGLE_LIST_ITEM, id });
export const toggleAll = () => ({ type: types.TOGGLE_ALL_LIST_ITEMS });
export const addListItem = title => ({ type: types.ADD_LIST_ITEM, title });
