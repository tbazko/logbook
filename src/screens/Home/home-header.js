import React from 'react'
import moment from 'moment'
import PropTypes from 'prop-types';
import { ADD_ITEM_SCREEN } from 'screens/AddListItem';
import {
  Header,
  Left,
  Right,
  Title,
  Button,
  Body,
  Icon,
} from 'native-base'

const HomeHeader = (props) => {
  return (
    <Header>
      <Left>
        <Button
          transparent
          onPress={() => props.navigator.push(ADD_ITEM_SCREEN)}
        >
          <Icon name="ios-add" />
        </Button>
      </Left>
      <Body>
        <Title>{moment().format('MMMM Do')}</Title>
      </Body>
      <Right>
      </Right>
    </Header>
  )
}

HomeHeader.propTypes = {
  navigator: PropTypes.object.isRequired,
}

export default HomeHeader
