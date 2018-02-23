import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import { selectWeeks } from 'modules/chart/selectors';
import { connect } from 'react-redux';
import {
  Container,
  Header,
  Title,
  Content,
  Left,
  Right,
  Body,
} from 'native-base'
import { VictoryBar, VictoryChart, VictoryTheme } from 'victory-native';

export const STATISTICS_SCREEN = {
  screen: 'stats.Statistics',
  title: 'Check list',
  navigatorStyle: {
    navBarHidden: true,
  },
};

class StatisticsScreen extends PureComponent {
  static propTypes = {
    weeks: PropTypes.array,
    navigator: PropTypes.shape({ // eslint-disable-line
      push: PropTypes.func,
    }).isRequired,
  }

  static defaultProps = {
    weeks: null,
  }

  render() {
    const data = [
      { quarter: this.props.weeks[0], earnings: 13000 },
      { quarter: this.props.weeks[1], earnings: 16500 },
      { quarter: this.props.weeks[2], earnings: 14250 },
      { quarter: this.props.weeks[3], earnings: 19000 },
    ];
    const { navigator } = this.props
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
          <View style={styles.container}>
            <VictoryChart width={350}>
              <VictoryBar
                data={data}
                x="quarter"
                y="earnings"
                alignment="start"
                horizontal
                animate={{
                  duration: 2000,
                  onLoad: { duration: 1000 },
                }}
                barRatio={0}
              />
            </VictoryChart>
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
    backgroundColor: '#f5fcff',
  },
})

const mapStateToProps = state => ({
  weeks: selectWeeks(state),
});

export default connect(mapStateToProps)(StatisticsScreen);
