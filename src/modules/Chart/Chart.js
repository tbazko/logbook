import _ from 'lodash'
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { THEME } from 'config'
import { View, StyleSheet, Dimensions } from 'react-native'
import { connect } from 'react-redux'
import { Content, Text, Form, Picker } from 'native-base'
import { VictoryBar, VictoryChart, VictoryLabel, VictoryAxis } from 'victory-native'
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
    const chartWidth = Dimensions.get('screen').width

    if (_.isEmpty(this.props.completedPerWeek)) {
      return this.renderEmpty()
    }

    return (
      <Content>
        <Form style={{
          flex: 1, justifyContent: 'center', alignItems: 'flex-start', marginLeft: 50, marginTop: 20
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
            selectedValue={this.state.selected}
            onValueChange={value => this.onValueChange(value)}
          >
            {this.activityNames.map(name => <Item label={name} value={name} key={name} />)}
          </Picker>
        </Form>
        <View style={styles.container}>
          <VictoryChart
            domain={{ x: [0, 5], y: [0, 7] }}
            width={chartWidth}
            domainPadding={{ x: [0, 0] }}
            style={{
              labels: {
                fontSize: 8,
              },
            }}
          >
            <VictoryLabel text="Times per week" x={chartWidth - 50} y={30} textAnchor="end" />
            <VictoryAxis
              dependentAxis
              style={{ tickLabels: { angle: 0 } }}
              tickFormat={[1, 2, 3, 4, 5, 6, 7]}
            />
            <VictoryAxis crossAxis tickFormat={[]} />
            <VictoryBar
              style={{
                labels: {
                  fontSize: 9,
                },
                data: {
                  fill: THEME.secondary,
                },
              }}
              labels={d => d.week}
              barRatio={0.6}
              data={data}
              x="week"
              y="completed"
              alignment="middle"
              animate={{
                duration: 2000,
                onLoad: { duration: 1000 },
              }}
            />
          </VictoryChart>
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

const chartStyles = {
  data: { fill: "tomato", opacity: 0.7 },
  labels: { fontSize: 9 },
  parent: { border: "1px solid #ccc" }
}

const mapStateToProps = state => ({
  completedPerWeek: selectors.getCompletedPerWeek(state),
})

export default connect(mapStateToProps)(Chart)
