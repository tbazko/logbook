import _ from 'lodash'
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { Content, Text, Form, Picker } from 'native-base'
import { VictoryBar, VictoryChart } from 'victory-native'
import * as selectors from './selectors'

const { Item } = Picker

class Chart extends PureComponent {
  static propTypes = {
    completedPerWeek: PropTypes.object,
  }

  constructor(props) {
    super(props)
    const { completedPerWeek } = props
    this.activityNames = _.keys(completedPerWeek)
    this.state = {
      selected: this.activityNames[0],
    }
  }

  onValueChange(value) {
    this.setState({
      selected: value,
    })
  }

  renderEmpty() {
    return (
      <Content>
        <Text>
          No data to display yet. To get some, you need to start logging your activities.
        </Text>
      </Content>
    )
  }

  render() {
    const { completedPerWeek } = this.props
    const data = completedPerWeek[this.state.selected]

    if (_.isEmpty(this.props.completedPerWeek)) {
      return this.renderEmpty()
    }

    return (
      <Content>
        <Form>
          <Picker
            mode="dropdown"
            placeholder="Select One"
            selectedValue={this.state.selected}
            onValueChange={value => this.onValueChange(value)}
          >
            {this.activityNames.map(name => <Item label={name} value={name} key={name} />)}
          </Picker>
        </Form>
        <View style={styles.container}>
          <VictoryChart width={360} domainPadding={{ x: [20, 20] }}>
            <VictoryBar
              data={data}
              x="week"
              y="completed"
              alignment="middle"
              animate={{
                duration: 2000,
                onLoad: { duration: 1000 },
              }}
              barRatio={1}
            />
          </VictoryChart>
          <Text>Week</Text>
        </View>
      </Content>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

const mapStateToProps = state => ({
  completedPerWeek: selectors.getCompletedPerWeek(state),
})

export default connect(mapStateToProps)(Chart)
