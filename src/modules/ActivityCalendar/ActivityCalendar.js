import moment from 'moment'
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Calendar } from 'react-native-calendars'
import { Arrow } from 'components/atoms'
import * as actions from './actions'
import * as selectors from './selectors'

class ActivityCalendar extends PureComponent {
  static navigatorStyle = {
    navBarHidden: true,
  }

  static propTypes = {
    activityLogs: PropTypes.object,
    earliestTimestamp: PropTypes.number,
  }

  static defaultProps = {
    activityLogs: null,
    earliestTimestamp: moment.unix(),
  }

  constructor(props) {
    super(props)
    this.state = {
      dateString: moment().format('YYYY-MM-DD'),
    }
  }

  render() {
    return (
      <Calendar
        // Initially visible month. Default = Date()
        current={this.state.dateString}
        // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
        minDate={moment.unix(this.props.earliestTimestamp).format('YYYY-MM-DD')}
        // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
        maxDate={moment().endOf('month').format('YYYY-MM-DD')}
        // Handler which gets executed on day press. Default = undefined
        onDayPress={(day) => { console.log('selected day', day) }}
        // Handler which gets executed on day long press. Default = undefined
        onDayLongPress={(day) => { console.log('selected day', day) }}
        // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
        monthFormat="yyyy MMMM"
        // Handler which gets executed when visible month changes in calendar. Default = undefined
        onMonthChange={({ dateString }) => { this.setState({ dateString }) }}
        // Hide month navigation arrows. Default = false

        // Replace default arrows with custom ones (direction can be 'left' or 'right')
        renderArrow={direction => (<Arrow direction={direction} />)}

        // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
        // day from another month that is visible in calendar page. Default = false
        disableMonthChange
        // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
        firstDay={1}
        // Handler which gets executed when press arrow icon left. It receive a callback can go back month
        onPressArrowLeft={substractMonth => substractMonth()}
        // Handler which gets executed when press arrow icon left. It receive a callback can go next month
        onPressArrowRight={addMonth => addMonth()}
      />
    )
  }
}

const mapStateToProps = state => ({
  activityLogs: selectors.getActivityLogs(state),
  earliestTimestamp: selectors.getEarliestTimestamp(state),
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(ActivityCalendar)
