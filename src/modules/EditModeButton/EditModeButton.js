import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { StyleSheet } from 'react-native'
import {
  Button,
  Icon,
} from 'native-base'
import * as actions from './actions'
import * as selectors from './selectors'


function EditModeButton(props) {
  const { isEditMode } = props

  return (
    <Button
      success
      style={styles.button}
      onPress={isEditMode ?
        () => props.dispatchSetDefaultMode() :
        () => props.dispatchSetEditMode()
      }
    >
      <Icon active name="add" />
    </Button>
  )
}

EditModeButton.propTypes = {
  isEditMode: PropTypes.bool.isRequired,
  dispatchSetDefaultMode: PropTypes.func.isRequired,
  dispatchSetEditMode: PropTypes.func.isRequired,
}

const styles = StyleSheet.create({
  button: {
    height: 70,
    width: 70,
    shadowColor: 'transparent',
  },
})

const mapStateToProps = state => ({
  // isDeleteMode: selectors.getCheckListMode(state) === 'delete',
  isEditMode: selectors.getCheckListMode(state) === 'edit',
  // isDefaultMode: selectors.getCheckListMode(state) === 'default',
})

const mapDispatchToProps = {
  dispatchSetEditMode: () => actions.setViewMode('edit'),
  // dispatchSetDeleteMode: () => actions.setViewMode('delete'),
  dispatchSetDefaultMode: () => actions.setViewMode('default'),
}

export default connect(mapStateToProps, mapDispatchToProps)(EditModeButton)
