import { Navigation } from 'react-native-navigation'
import { THEME } from 'config'
import { HOME_SCREEN } from 'screens/HomeScreen'
import { CHART_SCREEN } from 'screens/ChartScreen'
import { CALENDAR_SCREEN } from 'screens/CalendarScreen'

import listIcoSrc from 'static/images/list.png'
import statsIcoSrc from 'static/images/stats.png'
import calendarIcoSrc from 'static/images/calendar.png'

const tabs = [
  {
    label: 'Check list',
    icon: listIcoSrc,
    ...HOME_SCREEN,
  }, {
    label: 'Calendars',
    icon: calendarIcoSrc,
    ...CALENDAR_SCREEN,
  }, {
    label: 'Statistics',
    icon: statsIcoSrc,
    ...CHART_SCREEN,
  }]

export const startTabBasedApp = () => Navigation.startTabBasedApp({
  tabs,
  animationType: 'fade',
  tabsStyle: {
    tabBarShowLabels: 'hidden',
    tabBarButtonColor: THEME.inactiveOnDark,
    tabBarLabelColor: THEME.inactiveOnDark,
    tabBarBackgroundColor: THEME.primaryDark,
    navBarButtonColor: '#ffffff',
    tabBarSelectedLabelColor: THEME.textOnDark,
    tabBarSelectedButtonColor: THEME.textOnDark,
  },
  appStyle: {
    orientation: 'portrait',
    forceTitlesDisplay: true,
    topBarElevationShadowEnabled: false,
    tabBarButtonColor: '#000000',
    tabBarBackgroundColor: THEME.textOnDark,
    navBarButtonColor: '#000000',
    tabBarSelectedButtonColor: THEME.primary,
  },
})
