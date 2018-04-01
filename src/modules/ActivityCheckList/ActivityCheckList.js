import moment from 'moment'
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import { Button, Text, Content, ListItem, Body, CheckBox, Icon, List } from 'native-base'
import * as actions from './actions'
import * as selectors from './selectors'

class ActivityCheckList extends PureComponent {
  static navigatorStyle = {
    navBarHidden: true,
  }

  static propTypes = {
    activeCheckListId: PropTypes.number.isRequired,
    checkList: PropTypes.shape({ // eslint-disable-line
      activities: PropTypes.arrayOf(PropTypes.object),
      timestamp: PropTypes.number.isRequired,
    }).isRequired,
    activityTypes: PropTypes.object,
    dispatchToggleItemCheckbox: PropTypes.func.isRequired,
    dispatchRemoveListItem: PropTypes.func.isRequired,
    dispatchSetDefaultCheckboxValue: PropTypes.func.isRequired,
    dispatchSetActiveCheckList: PropTypes.func.isRequired,
  }

  static defaultProps = {
    activityTypes: null,
  }

  constructor(props) {
    super(props)
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
  }

  componentWillMount() {
    this.initCurrentCheckList(this.props.activeCheckListId)
  }

  componentWillReceiveProps(nextProps) {
    this.initCurrentCheckList(nextProps.activeCheckListId)
  }

  initCurrentCheckList(id) {
    if (id === 0) {
      this.props.dispatchSetDefaultCheckboxValue(moment().startOf('day').unix(), this.props.checkList.activities)
      this.props.dispatchSetActiveCheckList(moment().startOf('day').unix())
    }
  }

  deleteRow(id, secId, rowId, rowMap) {
    rowMap[`${secId}${rowId}`].props.closeRow();

    this.props.dispatchRemoveListItem(id, this.props.activityTypes[id])
  }

  render() {
    const { checkList } = this.props
    return (
      <Content>
        {checkList.activities.length === 0 &&
          <Text>
            To set new goal press the &quot;+&quot; (plus) icon above.
          </Text>
        }
        {checkList.activities.length > 0 &&
          <List
            dataSource={this.ds.cloneWithRows(checkList.activities)}
            renderRow={(item) => {
              if (item.isHistorical) return null

              return (
                <ListItem>
                  <CheckBox
                    style={{ marginLeft: 3 }}
                    checked={item.completed}
                    onPress={() => this.props.dispatchToggleItemCheckbox(item.id, checkList.timestamp)}
                  />
                  <Body>
                    <Text>{item.title}</Text>
                  </Body>
                </ListItem>
              )
            }}

            renderLeftHiddenRow={data => (
              <Button full warning onPress={() => console.log('Button on left pressed', data)}>
                <Icon active name="md-create" />
              </Button>)}
            renderRightHiddenRow={(data, secId, rowId, rowMap) => (
              <Button full danger onPress={() => this.deleteRow(data.id, secId, rowId, rowMap)}>
                <Icon active name="trash" />
              </Button>)}
            leftOpenValue={75}
            rightOpenValue={-75}
          />}
      </Content>
    )
  }
}

const mapStateToProps = state => ({
  activeCheckListId: selectors.getActiveCheckListId(state),
  activityTypes: selectors.getActivityTypes(state),
  checkList: selectors.getActiveCheckList(state),
});

const mapDispatchToProps = {
  dispatchToggleItemCheckbox: actions.toggleItemCheckbox,
  dispatchRemoveListItem: actions.removeListItem,
  dispatchSetDefaultCheckboxValue: actions.setDefaultCheckboxValue,
  dispatchSetActiveCheckList: actions.setActiveCheckList,
};

export default connect(mapStateToProps, mapDispatchToProps)(ActivityCheckList);
