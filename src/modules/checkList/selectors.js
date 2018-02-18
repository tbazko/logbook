import moment from 'moment'

export const selectCheckList = state => state.checkList
export const selectTodayCheckList = (state) => {
  const todayTimestamp = moment().startOf('day').unix()
  const { logs } = state.checkList
  const checkList = [];
  if (!logs || !logs[todayTimestamp]) return checkList;

  Object.keys(state.checkList.items).forEach((itemId) => {
    checkList.push({
      id: itemId,
      title: state.checkList.items[itemId].title,
      completed: state.checkList.logs[todayTimestamp][itemId].completed,
      timestamp: todayTimestamp,
    })
  });
  return checkList
};
export const selectPrevCheckList = state => state.checkList
export const selectNextCheckList = state => state.checkList

