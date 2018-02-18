import { Navigation } from 'react-native-navigation';

import Home, { HOME_SCREEN } from './Home';
import AddListItem, { ADD_ITEM_SCREEN } from './AddListItem';
import Statistics, { STATISTICS_SCREEN } from './Statistics';
import Calendars, { CALENDARS_SCREEN } from './Calendars';
import NestedScreenA, { NESTED_SCREEN_A } from './NestedScreenA';
import NestedScreenB, { NESTED_SCREEN_B } from './NestedScreenB';


const registerComponent =
  redux =>
    (name, component) =>
      Navigation.registerComponent(name, () => component, redux.store, redux.Provider);

export function registerScreens(redux) {
  registerComponent(redux)(HOME_SCREEN.screen, Home);
  registerComponent(redux)(ADD_ITEM_SCREEN.screen, AddListItem);
  registerComponent(redux)(STATISTICS_SCREEN.screen, Statistics);
  registerComponent(redux)(CALENDARS_SCREEN.screen, Calendars);
  registerComponent(redux)(NESTED_SCREEN_A.screen, NestedScreenA);
  registerComponent(redux)(NESTED_SCREEN_B.screen, NestedScreenB);
}
