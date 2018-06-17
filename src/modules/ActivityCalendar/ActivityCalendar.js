import moment from 'moment'
import React, { PureComponent } from 'react'
import { THEME } from 'config'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Calendar } from 'react-native-calendars'
import { Content, Form, Picker, Item } from 'native-base'
import { Arrow } from 'components/atoms'
import * as actions from './actions'
import * as selectors from './selectors'

class ActivityCalendar extends PureComponent {
  static navigatorStyle = {
    navBarHidden: true,
  }

  static propTypes = {
    successDatesPerType: PropTypes.object,
    earliestTimestamp: PropTypes.string,
    activityTypes: PropTypes.object,
  }

  static defaultProps = {
    successDatesPerType: null,
    earliestTimestamp: moment().format(),
    activityTypes: null,
  }

  constructor(props) {
    super(props)
    const { activityTypes } = this.props
    const firstKey = activityTypes ? Object.keys(activityTypes)[0] : false
    this.state = {
      dateString: moment().format('YYYY-MM-DD'),
      activityTypeId: firstKey,
    }
  }

  onValueChange(value) {
    this.setState({
      activityTypeId: value,
    })
  }

  getMarkedDates() {
    return this.props.successDatesPerType[this.state.activityTypeId]
  }

  render() {
    const { activityTypes } = this.props
    return (
      <Content>
        {activityTypes &&
          <Form style={{
            flex: 1, justifyContent: 'center', alignItems: 'flex-start', marginLeft: 20, marginTop: 20,
          }}
          >
            <Picker
              textStyle={{ color: THEME.textOnPrimary }}
              style={{
                backgroundColor: THEME.primary,
                height: 40,
              }}
              mode="dropdown"
              placeholder="Select One"
              selectedValue={this.state.activityTypeId}
              onValueChange={value => this.onValueChange(value)}
            >
              {Object.keys(activityTypes).map(id =>
                <Item label={activityTypes[id].title} value={id} key={id} />)}
            </Picker>
          </Form>
        }
        <Calendar
          markedDates={this.getMarkedDates()}
          markingType="custom"
          // Initially visible month. Default = Date()
          current={this.state.dateString}
          // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
          minDate={moment(this.props.earliestTimestamp).format('YYYY-MM-DD')}
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
      </Content>
    )
  }
}

const successStyle = {
  customStyles: {
    container: {
      backgroundColor: THEME.success,
    },
    text: {
      color: THEME.textOnSuccess,
    },
  },
}

const mapStateToProps = (state) => {
  selectors.setStylesForSuccessDates(successStyle)

  return {
    successDatesPerType: selectors.getSuccessDates(state),
    earliestTimestamp: selectors.getEarliestTimestamp(state),
    activityTypes: selectors.getActivityTypes(state),
  }
}

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(ActivityCalendar)
