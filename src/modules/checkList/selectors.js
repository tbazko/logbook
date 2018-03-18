import _ from 'lodash'
import { createSelector } from 'reselect'

const getLogs = state => state.checkList.logs
const getActiveCheckListId = state => state.checkList.activeCheckListId
const getItems = state => state.checkList.items
const getHistoricalItems = state => state.checkList.historicalItems

export const getActiveCheckList = createSelector(
  [getLogs, getActiveCheckListId, getItems, getHistoricalItems],
  (logs, activeCheckListId, items, historicalItems) => {
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
  },
)
