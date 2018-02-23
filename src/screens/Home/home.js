import React from 'react';
import PropTypes from 'prop-types';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import {
  Container,
  Content,
  Button,
  Body, Icon, Text, List, ListItem, CheckBox,
} from 'native-base'
import { selectActiveCheckList } from 'modules/checkList/selectors';
import { toggleItemCheckbox, removeListItem } from 'modules/checkList/actions';
import HomeHeader from './home-header'

export const HOME_SCREEN = {
  screen: 'stats.Home',
  title: 'Check list',
  navigatorStyle: {
    navBarHidden: true,
  },
};

const HomeScreen = (props) => {
  function deleteRow(id, secId, rowId, rowMap) {
    rowMap[`${secId}${rowId}`].props.closeRow();
    props.dispatchRemoveListItem(id)
  }

  const { navigator, checkList } = props
  const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

  return (
    <Container>
      <HomeHeader navigator={navigator} timestamp={checkList.timestamp} />
      <Content>
        {checkList &&
          <List
            dataSource={ds.cloneWithRows(checkList.items)}
            renderRow={item => (
              <ListItem>
                <CheckBox
                  style={{ marginLeft: 3 }}
                  checked={item.completed}
                  onPress={() => props.dispatchToggleItemCheckbox(item.id, checkList.timestamp)}
                />
                <Body>
                  <Text>{item.title}</Text>
                </Body>
              </ListItem>
            )}

            renderLeftHiddenRow={data => (
              <Button full warning onPress={() => console.log('Button on left pressed', data)}>
                <Icon active name="md-create" />
              </Button>)}
            renderRightHiddenRow={(data, secId, rowId, rowMap) => (
              <Button full danger onPress={() => deleteRow(data.id, secId, rowId, rowMap)}>
                <Icon active name="trash" />
              </Button>)}
            leftOpenValue={75}
            rightOpenValue={-75}
          />}
      </Content>
    </Container>
  )
}

HomeScreen.propTypes = {
  navigator: PropTypes.shape({ // eslint-disable-line
    push: PropTypes.func,
  }).isRequired,
  checkList: PropTypes.shape({ // eslint-disable-line
    items: PropTypes.arrayOf(PropTypes.object),
    timestamp: PropTypes.number.isRequired,
  }).isRequired,
  dispatchToggleItemCheckbox: PropTypes.func.isRequired,
  dispatchRemoveListItem: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  checkList: selectActiveCheckList(state),
});

const mapDispatchToProps = {
  dispatchToggleItemCheckbox: toggleItemCheckbox,
  dispatchRemoveListItem: removeListItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
