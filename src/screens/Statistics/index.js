import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Left,
  Right,
  Body, Icon, Text, List, ListItem, CheckBox,
} from 'native-base'

export const STATISTICS_SCREEN = {
  screen: 'stats.Statistics',
  title: 'Check list',
  navigatorStyle: {
    navBarHidden: true,
  },
};

class StatisticsScreen extends PureComponent {
  static propTypes = {
    navigator: PropTypes.shape({ // eslint-disable-line
      push: PropTypes.func,
    }).isRequired,
  }

  render() {
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
        <Content />
      </Container>
    )
  }
}

export default connect()(StatisticsScreen);
