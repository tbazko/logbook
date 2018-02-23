// TODO: implement reselect

export const selectActiveCheckList = (state) => {
  const { logs, activeCheckList } = state.checkList
  const checkList = { timestamp: activeCheckList, items: [] };
  if (!logs || !logs[activeCheckList]) return checkList;

  Object.keys(state.checkList.items).forEach((itemId) => {
    checkList.items.push({
      id: itemId,
      title: state.checkList.items[itemId].title,
      completed: state.checkList.logs[activeCheckList][itemId].completed,
    })
  });
  return checkList
};

