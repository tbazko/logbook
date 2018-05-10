import React from 'react'
import PropTypes from 'prop-types'
import {
  Body,
  Button,
  Icon,
  Title,
} from 'native-base'

export default function HeaderDatePicker(props) {
  return (
    <Body style={{ flexDirection: 'row', flex: 5, justifyContent: 'center' }}>
      <Button transparent onPress={() => props.onShowPrevDate()}><Icon name="ios-arrow-back" /></Button>
      <Title>{props.currentDate}</Title>
      <Button transparent onPress={() => props.onShowNextDate()}><Icon name="ios-arrow-forward" /></Button>
    </Body>
  )
}

HeaderDatePicker.propTypes = {
  currentDate: PropTypes.string.isRequired,
  onShowPrevDate: PropTypes.func.isRequired,
  onShowNextDate: PropTypes.func.isRequired,
}
