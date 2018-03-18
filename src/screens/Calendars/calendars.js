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
  Body, Icon,
} from 'native-base'
import { ADD_ITEM_SCREEN } from 'screens/AddListItem';
import { toggleItemCheckbox, removeListItem } from 'modules/checkList/actions';

export const CALENDARS_SCREEN = {
  screen: 'stats.Calendars',
  title: 'Check list',
  navigatorStyle: {
    navBarHidden: true,
  },
};

class CalendarScreen extends PureComponent {
  static propTypes = {
    navigator: PropTypes.shape({ // eslint-disable-line
      push: PropTypes.func,
    }).isRequired,
    dispatchRemoveListItem: PropTypes.func.isRequired,
  }

  deleteRow(id, secId, rowId, rowMap) {
    rowMap[`${secId}${rowId}`].props.closeRow();
    this.props.dispatchRemoveListItem(id)
  }

  render() {
    const { navigator } = this.props
    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => navigator.push(ADD_ITEM_SCREEN)}
            >
              <Icon name="ios-add" />
            </Button>
          </Left>
          <Body>
            <Title>Check list</Title>
          </Body>
          <Right />
        </Header>
        <Content />
      </Container>
    )
  }
}

const mapStateToProps = () => ({
});

const mapDispatchToProps = {
  dispatchToggleItemCheckbox: toggleItemCheckbox,
  dispatchRemoveListItem: removeListItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(CalendarScreen);
