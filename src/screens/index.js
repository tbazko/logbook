import { Navigation } from 'react-native-navigation'

import Home, { HOME_SCREEN } from './HomeScreen'
import AddListItem, { ADD_LIST_ITEM_SCREEN } from './AddListItemScreen'
import Statistics, { CHART_SCREEN } from './ChartScreen'
import Calendars, { CALENDAR_SCREEN } from './CalendarScreen'


const registerComponent =
  redux =>
    (name, component) =>
      Navigation.registerComponent(name, () => component, redux.store, redux.Provider)

export function registerScreens(redux) {
  registerComponent(redux)(HOME_SCREEN.screen, Home)
  registerComponent(redux)(ADD_LIST_ITEM_SCREEN.screen, AddListItem)
  registerComponent(redux)(CHART_SCREEN.screen, Statistics)
  registerComponent(redux)(CALENDAR_SCREEN.screen, Calendars)
}
