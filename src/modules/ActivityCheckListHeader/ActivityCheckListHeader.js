import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import PropTypes from 'prop-types'
import { HeaderDatePicker, HeaderIconButton } from 'components/molecules'
import { Header } from 'native-base'
import * as actions from './actions'
import * as selectors from './selectors'

const ActivityCheckListHeader = (props) => {
  const { isEditMode, isDeleteMode, timestamp, activityTypes } = props

  return (
    <Header>
      <HeaderIconButton
        side="left"
        iconName={isEditMode ? 'ios-close' : 'ios-create'}
        onPress={isEditMode ?
          () => props.dispatchSetDefaultMode() :
          () => props.dispatchSetEditMode()
        }
      />
      <HeaderDatePicker
        onShowPrevDate={() => props.dispatchShowPrevDate(timestamp)}
        onShowNextDate={() => props.dispatchShowNextDate(timestamp, activityTypes)}
        currentDate={moment.unix(timestamp).format('MMMM Do')}
        isDisabledNext={props.timestamp === moment().startOf('day').unix()}
      />
      <HeaderIconButton
        side="right"
        iconName={isDeleteMode ? 'ios-close' : 'ios-trash'}
        onPress={isDeleteMode ?
          () => props.dispatchSetDefaultMode() :
          () => props.dispatchSetDeleteMode()
        }
      />
    </Header>
  )
}

ActivityCheckListHeader.propTypes = {
  activityTypes: PropTypes.object,
  timestamp: PropTypes.number.isRequired,
  isEditMode: PropTypes.bool.isRequired,
  isDeleteMode: PropTypes.bool.isRequired,
  dispatchSetEditMode: PropTypes.func.isRequired,
  dispatchSetDeleteMode: PropTypes.func.isRequired,
  dispatchSetDefaultMode: PropTypes.func.isRequired,
  dispatchShowNextDate: PropTypes.func.isRequired,
  dispatchShowPrevDate: PropTypes.func.isRequired,
}

ActivityCheckListHeader.defaultProps = {
  activityTypes: null,
}

const mapStateToProps = state => ({
  activityTypes: selectors.getActivityTypes(state),
  timestamp: selectors.getActiveCheckListId(state),
  isDeleteMode: selectors.getCheckListMode(state) === 'delete',
  isEditMode: selectors.getCheckListMode(state) === 'edit',
  isDefaultMode: selectors.getCheckListMode(state) === 'default',
})

const mapDispatchToProps = {
  dispatchShowNextDate: actions.showNextDate,
  dispatchShowPrevDate: actions.showPrevDate,
  dispatchSetEditMode: () => actions.setViewMode('edit'),
  dispatchSetDeleteMode: () => actions.setViewMode('delete'),
  dispatchSetDefaultMode: () => actions.setViewMode('default'),
}

export default connect(mapStateToProps, mapDispatchToProps)(ActivityCheckListHeader)
