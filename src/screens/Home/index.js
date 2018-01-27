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
import { ADD_LIST_ITEM_SCREEN } from 'screens/AddListItem';
import { selectCheckList } from 'modules/checkList/selectors';
import { toggleListItem } from 'modules/checkList/actions';

export const HOME_SCREEN = {
  screen: 'stats.Home',
  title: 'Check list',
  navigatorStyle: {
    navBarHidden: true,
  },
};

class HomeScreen extends PureComponent {
  static propTypes = {
    navigator: PropTypes.shape({ // eslint-disable-line
      push: PropTypes.func,
    }).isRequired,
    checkList: PropTypes.arrayOf(PropTypes.object).isRequired,
    dispatchToggleListItem: PropTypes.func.isRequired,
  }

  render() {
    const { navigator } = this.props
    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => navigator.push(ADD_LIST_ITEM_SCREEN)}
            >
              <Icon name="ios-add" />
            </Button>
          </Left>
          <Body>
            <Title>Check list</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <List
            dataArray={this.props.checkList}
            renderRow={item => (
              <ListItem>
                <CheckBox
                  checked={item.completed}
                  onPress={() => this.props.dispatchToggleListItem(item.id)}
                />
                <Body>
                  <Text>{item.title}</Text>
                </Body>
              </ListItem>
            )}
          />
        </Content>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  checkList: selectCheckList(state),
});

const mapDispatchToProps = {
  dispatchToggleListItem: toggleListItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);