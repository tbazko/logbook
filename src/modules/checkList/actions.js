import moment from 'moment'
import uuid from 'react-native-uuid'
import * as types from './constants'

export const addItem = (id, title) => ({
  type: types.ADD_ITEM,
  id,
  title,
})

export const toggleItemCheckbox = (id, timestamp) =>
  ({ type: types.TOGGLE_ITEM_CHECKBOX, id, timestamp });
export const addListItem = title => ((dispatch) => {
  const id = uuid.v4();
  dispatch(addItem(id, title));
  dispatch(toggleItemCheckbox(id, moment().startOf('day').unix()));
});
export const removeListItem = id => ({ type: types.REMOVE_LIST_ITEM, id });
export const removeAll = () => ({ type: types.REMOVE_ALL });


export const checkAll = timestamp => ({ type: types.CHECK_ALL, timestamp });
export const uncheckAll = timestamp => ({ type: types.UNCHECK_ALL, timestamp });
export const setDefaultCheckboxValue = timestamp => ({ type: types.SET_DEFAULT_ITEMS, timestamp });

export const setActiveCheckList = timestamp => ({ type: types.SET_ACTIVE_CHECKLIST, timestamp });
export const showPrevCheckList = timestamp => ((dispatch) => {
  const prevTimestamp = moment.unix(timestamp).add(-1, 'days').startOf('day').unix();
  dispatch(setDefaultCheckboxValue(prevTimestamp));
  dispatch(setActiveCheckList(prevTimestamp));
})
export const showNextCheckList = timestamp => ((dispatch) => {
  const nextTimestamp = moment.unix(timestamp).add(1, 'days').startOf('day').unix();
  dispatch(setActiveCheckList(nextTimestamp));
});
