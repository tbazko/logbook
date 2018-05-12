import React from 'react'
import PropTypes from 'prop-types'
import { Button, Icon } from 'native-base'

export default function IconButton(props) {
  return (
    <Button transparent onPress={() => props.onPress()}>
      <Icon name={props.iconName} style={{ color: props.color }} />
    </Button>
  )
}

IconButton.propTypes = {
  iconName: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  color: PropTypes.string,
}

IconButton.defaultProps = {
  color: '#d0d0d0',
}
