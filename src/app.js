import { Provider } from 'react-redux'
import { startTabBasedApp } from './navigation'
import { registerScreens } from './screens'
import { getConfiguredStore } from './store'

const { store } = getConfiguredStore();
registerScreens({ Provider, store })
startTabBasedApp()
