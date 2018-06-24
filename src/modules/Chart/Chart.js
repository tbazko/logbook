import _ from 'lodash'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { THEME } from 'config'
import { View, StyleSheet, Dimensions } from 'react-native'
import { connect } from 'react-redux'
import { Content, Text, Form, Picker } from 'native-base'
import { VictoryBar, VictoryChart, VictoryLabel, VictoryAxis } from 'victory-native'
import * as selectors from './selectors'

const { Item } = Picker

class Chart extends Component {
  static propTypes = {
    completedPerWeek: PropTypes.object,
  }

  constructor(props) {
    super(props)
    const { completedPerWeek } = props
    this.state = {
      selected: _.keys(completedPerWeek)[0],
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
          flex: 1, justifyContent: 'center', alignItems: 'flex-start', marginLeft: 50, marginTop: 20,
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
            {_.keys(completedPerWeek).map(name => <Item label={name} value={name} key={name} />)}
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
                  fontSize: 11,
                },
                data: {
                  fill: THEME.secondary,
                },
              }}
              labelComponent={<VictoryLabel angle={90} verticalAnchor="middle" textAnchor="end" />}
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
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

const mapStateToProps = state => ({
  completedPerWeek: selectors.getCompletedPerWeek(state),
})

export default connect(mapStateToProps)(Chart)
