import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { ListView } from 'react-native';
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
import { ADD_ITEM_SCREEN } from 'screens/AddListItem';
import { selectCheckList } from 'modules/checkList/selectors';
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
    // checkList: PropTypes.arrayOf(PropTypes.object).isRequired,
    dispatchToggleItemCheckbox: PropTypes.func.isRequired,
    dispatchRemoveListItem: PropTypes.func.isRequired,
  }

  deleteRow(id, secId, rowId, rowMap) {
    rowMap[`${secId}${rowId}`].props.closeRow();
    this.props.dispatchRemoveListItem(id)
  }

  render() {
    const { navigator } = this.props
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
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

const mapStateToProps = state => ({
  // checkList: selectCheckList(state),
});

const mapDispatchToProps = {
  dispatchToggleItemCheckbox: toggleItemCheckbox,
  dispatchRemoveListItem: removeListItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(CalendarScreen);
