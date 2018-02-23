import moment from 'moment'
import { Provider } from 'react-redux'
import { startTabBasedApp } from './navigation'
import { registerScreens } from './screens'
import { getConfiguredStore } from './store'
import { setDefaultCheckboxValue, setActiveCheckList } from './modules/checkList/actions'

async function init() {
  const { store } = await getConfiguredStore()
  registerScreens({ Provider, store })
  store.dispatch(setDefaultCheckboxValue(moment().add(-5, 'days').startOf('day').unix()))
  store.dispatch(setDefaultCheckboxValue(moment().add(-2, 'days').startOf('day').unix()))
  store.dispatch(setDefaultCheckboxValue(moment().add(-1, 'days').startOf('day').unix()))
  store.dispatch(setDefaultCheckboxValue(moment().startOf('day').unix()))
  store.dispatch(setActiveCheckList(moment().startOf('day').unix()))
  startTabBasedApp()
}

init();
