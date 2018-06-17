import React from 'react'
import PropTypes from 'prop-types'
import { Container, Footer } from 'native-base'
import ActivityCheckList from 'modules/ActivityCheckList'
import ActivityCheckListHeader from 'modules/ActivityCheckListHeader'
import DevTools from 'modules/DevTools'

export const HOME_SCREEN = {
  screen: 'stats.Home',
  title: 'Check list',
  navigatorStyle: {
    navBarHidden: true,
  },
}

export default function HomeScreen(props) {
  return (
    <Container>
      <ActivityCheckListHeader />
      <ActivityCheckList navigator={props.navigator} />
      <Footer>
        <DevTools />
      </Footer>
    </Container>
  )
}

HomeScreen.propTypes = {
  navigator: PropTypes.object.isRequired,
}
