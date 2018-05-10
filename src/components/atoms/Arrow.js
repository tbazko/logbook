import React from 'react'
import PropTypes from 'prop-types'
import {
  Icon,
} from 'native-base'

export default function Arrow(props) {
  let direction
  ({ direction } = props.direction)
  if (props.direction === 'left') {
    direction = 'back'
  }

  if (props.direction === 'right') {
    direction = 'forward'
  }

  return (
    <Icon name={`ios-arrow-${direction}`} />
  )
}

Arrow.propTypes = {
  direction: PropTypes.string,
}

Arrow.defaultProps = {
  direction: 'back', // can be "back, left, right, forward"
}
