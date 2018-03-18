// TODO: implement reselect
import _ from 'lodash'

export const selectActiveCheckList = (state) => {
  const { logs, activeCheckListId, items, historicalItems } = state.checkList
  const activeCheckList = { timestamp: activeCheckListId, items: [] };
  if (!logs || !logs[activeCheckListId]) return activeCheckList;

  Object.keys(logs[activeCheckListId]).forEach((itemId) => {
    activeCheckList.items.push({
      id: itemId,
      title: _.get(items[itemId], 'title', false) || _.get(historicalItems[itemId], 'title', false) || 'Unknown',
      completed: logs[activeCheckListId][itemId].completed,
    })
  })
  return activeCheckList
}
