import _ from 'lodash'
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet } from 'react-native'
import { getCompletedPerWeek } from 'modules/chart/selectors'
import { connect } from 'react-redux'
import {
  Container,
  Header,
  Title,
  Content,
  Left,
  Right,
  Body,
  Text,
  Form,
  Picker,
} from 'native-base'
import { VictoryBar, VictoryChart } from 'victory-native'

export const STATISTICS_SCREEN = {
  screen: 'stats.Statistics',
  title: 'Check list',
  navigatorStyle: {
    navBarHidden: true,
  },
}

const { Item } = Picker

class StatisticsScreen extends PureComponent {
  static propTypes = {
    navigator: PropTypes.shape({ // eslint-disable-line
      push: PropTypes.func,
    }).isRequired,
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

  render() {
    const { completedPerWeek } = this.props


    const data = completedPerWeek[this.state.selected]
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>Statistics</Title>
          </Body>
          <Right />
        </Header>
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
      </Container>
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
  completedPerWeek: getCompletedPerWeek(state),
})

export default connect(mapStateToProps)(StatisticsScreen)
