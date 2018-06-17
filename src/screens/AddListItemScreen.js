import React from 'react'
import PropTypes from 'prop-types'
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Left,
  Right,
  Body,
  Icon,
} from 'native-base'
import { ActivityForm, AddActivityForm } from 'modules/ActivityForm'

export const ADD_LIST_ITEM_SCREEN = {
  screen: 'stats.AddListItem',
  title: 'Add List Item',
  navigatorStyle: {
    navBarHidden: true,
  },
}

export default function AddListItemScreen(props) {
  return (
    <Container>
      <Header>
        <Left>
          <Button transparent onPress={() => props.navigator.pop()}>
            <Icon name="ios-arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title>AddListItem</Title>
        </Body>
        <Right />
      </Header>
      <Content>
        <ActivityForm formType={new AddActivityForm()} />
      </Content>
    </Container>
  )
}

AddListItemScreen.propTypes = {
  navigator: PropTypes.shape({ // eslint-disable-line
    pop: PropTypes.func,
  }).isRequired,
}
