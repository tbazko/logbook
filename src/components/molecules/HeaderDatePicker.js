import React from 'react'
import PropTypes from 'prop-types'
import { THEME } from 'config'
import getTheme from 'theme/components'
import material from 'theme/variables/material'
import {
  Body,
  Button,
  Icon,
  Title,
  StyleProvider,
} from 'native-base'

export default function HeaderDatePicker(props) {
  return (
    <StyleProvider style={getTheme(material)}>
      <Body style={{ flexDirection: 'row', flex: 5, justifyContent: 'center' }}>
        <Button transparent disabled={props.isDisabledPrev} onPress={() => props.onShowPrevDate()}>
          <Icon name="ios-arrow-back" style={{ color: props.isDisabledPrev ? THEME.disabled : THEME.primary }} />
        </Button>
        <Title>{props.currentDate}</Title>
        <Button transparent disabled={props.isDisabledNext} onPress={() => props.onShowNextDate()}>
          <Icon name="ios-arrow-forward" style={{ color: props.isDisabledNext ? THEME.disabled : THEME.primary }} />
        </Button>
      </Body>
    </StyleProvider>
  )
}

HeaderDatePicker.propTypes = {
  currentDate: PropTypes.string.isRequired,
  onShowPrevDate: PropTypes.func.isRequired,
  onShowNextDate: PropTypes.func.isRequired,
  isDisabledNext: PropTypes.bool,
  isDisabledPrev: PropTypes.bool,
}

HeaderDatePicker.defaultProps = {
  isDisabledNext: false,
  isDisabledPrev: false,
}
