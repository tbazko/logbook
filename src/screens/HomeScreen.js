import { resetStore } from 'modules/debug'
import React from 'react';
import PropTypes from 'prop-types';
import { Container, Button, Text } from 'native-base'
import ActivityCheckList from 'modules/ActivityCheckList'
import HomeHeader from 'modules/HomeHeader'

export const HOME_SCREEN = {
  screen: 'stats.Home',
  title: 'Check list',
  navigatorStyle: {
    navBarHidden: true,
  },
};

export default function HomeScreen(props) {
  return (
    <Container>
      <HomeHeader navigator={props.navigator} />
      <Button danger onPress={() => resetStore()}><Text>Reset store</Text></Button>
      <ActivityCheckList />
    </Container>
  )
}

HomeScreen.propTypes = {
  navigator: PropTypes.object.isRequired,
}
