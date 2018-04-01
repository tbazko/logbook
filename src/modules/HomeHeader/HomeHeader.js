import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import PropTypes from 'prop-types'
import { ADD_LIST_ITEM_SCREEN } from 'screens/AddListItemScreen'
import { HeaderDatePicker } from 'components/molecules'
import {
  Header,
  Left,
  Right,
  Button,
  Icon,
} from 'native-base'
import * as actions from './actions'
import * as selectors from './selectors'

const HomeHeader = (props) => {
  function prevDay() {
    props.dispatchShowPrevDate(props.timestamp, props.activityTypes);
  }

  function nextDay() {
    props.dispatchShowNextDate(props.timestamp);
  }

  return (
    <Header>
      <Left style={{ flex: 2 }}>
        <Button
          transparent
          onPress={() => props.navigator.push(ADD_LIST_ITEM_SCREEN)}
        >
          <Icon name="ios-add" />
        </Button>
      </Left>
      <HeaderDatePicker
        onShowPrevDate={prevDay}
        onShowNextDate={nextDay}
        currentDate={moment.unix(props.timestamp).format('MMMM Do')}
      />
      <Right style={{ flex: 2 }}>
        <Button transparent><Icon name="ios-create" /></Button>
      </Right>
    </Header>
  )
}

HomeHeader.propTypes = {
  navigator: PropTypes.object.isRequired,
  activityTypes: PropTypes.object,
  timestamp: PropTypes.number.isRequired,
  dispatchShowNextDate: PropTypes.func.isRequired,
  dispatchShowPrevDate: PropTypes.func.isRequired,
}

HomeHeader.defaultProps = {
  activityTypes: null,
}

const mapStateToProps = state => ({
  activityTypes: selectors.getActivityTypes(state),
  timestamp: selectors.getActiveCheckListId(state),
})

const mapDispatchToProps = {
  dispatchShowNextDate: actions.showNextDate,
  dispatchShowPrevDate: actions.showPrevDate,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
