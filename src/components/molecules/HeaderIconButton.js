import React from 'react'
import PropTypes from 'prop-types'
import { Left, Right } from 'native-base'
import { IconButton } from 'components/atoms'
import { THEME } from 'config'

export default function HeaderIconButton(props) {
  const Side = props.side === 'left' ? Left : Right
  return (
    <Side style={{ flex: 2 }}>
      <IconButton
        onPress={() => props.onPress()}
        iconName={props.iconName}
      />
    </Side>
  )
}

HeaderIconButton.propTypes = {
  side: PropTypes.string,
  onPress: PropTypes.func.isRequired,
  iconName: PropTypes.string.isRequired,
}

HeaderIconButton.defaultProps = {
  side: 'left',
}
