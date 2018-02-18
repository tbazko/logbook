import { Navigation } from 'react-native-navigation'
import { THEME } from 'config'
import { HOME_SCREEN } from 'screens/Home/index'
import { STATISTICS_SCREEN } from 'screens/Statistics/index'
import { CALENDARS_SCREEN } from 'screens/Calendars/index'

import listIcoSrc from 'static/images/list.png'
import statsIcoSrc from 'static/images/stats.png'
import calendarIcoSrc from 'static/images/calendar.png'

const tabs = [{
  label: 'Check list',
  icon: listIcoSrc,
  ...HOME_SCREEN,
}, {
  label: 'Calendars',
  icon: calendarIcoSrc,
  ...CALENDARS_SCREEN,
}, {
  label: 'Statistics',
  icon: statsIcoSrc,
  ...STATISTICS_SCREEN,
}]

export const startTabBasedApp = () => Navigation.startTabBasedApp({
  tabs,
  animationType: 'fade',
  tabsStyle: {
    tabBarShowLabels: 'hidden',
    tabBarButtonColor: THEME.textOnPrimary,
    tabBarBackgroundColor: '#000000',
    navBarButtonColor: '#000000',
    tabBarSelectedButtonColor: THEME.primary,
  },
  appStyle: {
    orientation: 'portrait',
    forceTitlesDisplay: true,
    topBarElevationShadowEnabled: false,
    tabBarButtonColor: '#000000',
    tabBarBackgroundColor: THEME.textOnPrimary,
    navBarButtonColor: '#000000',
    tabBarSelectedButtonColor: THEME.primary,
  },
})
