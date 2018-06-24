import moment from 'moment'
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { FlatList } from 'react-native'
import { TouchListItem } from 'components/molecules'
import CheckListItem from './CheckListItem'
import getTheme from 'theme/components'
import material from 'theme/variables/material'
import { ADD_LIST_ITEM_SCREEN } from 'screens/AddListItemScreen'
import { StyleProvider, Content } from 'native-base'
import * as actions from './actions'
import * as selectors from './selectors'

class ActivityCheckList extends PureComponent {
  static navigatorStyle = {
    navBarHidden: true,
  }

  static propTypes = {
    activeChecklistTimestamp: PropTypes.string.isRequired,
    isDeleteMode: PropTypes.bool.isRequired,
    isEditMode: PropTypes.bool.isRequired,
    isDefaultMode: PropTypes.bool.isRequired,
    checkList: PropTypes.shape({ // eslint-disable-line
      activities: PropTypes.arrayOf(PropTypes.object),
      timestamp: PropTypes.string.isRequired,
    }).isRequired,
    activityTypes: PropTypes.object,
    dispatchToggleItemCheckbox: PropTypes.func.isRequired,
    dispatchRemoveListItem: PropTypes.func.isRequired,
    dispatchSetDefaultCheckboxValue: PropTypes.func.isRequired,
    dispatchSetActiveCheckList: PropTypes.func.isRequired,
    navigator: PropTypes.object.isRequired,
  }

  static defaultProps = {
    activityTypes: null,
  }

  constructor(props) {
    super(props)
    this.todayTS = moment().startOf('day').format()
  }

  componentWillMount() {
    this.initCurrentCheckList(this.props.activeChecklistTimestamp)
  }

  componentWillReceiveProps(nextProps) {
    this.initCurrentCheckList(nextProps.activeChecklistTimestamp)
  }

  initCurrentCheckList(id) {
    if (id === 0) {
      this.props.dispatchSetDefaultCheckboxValue(this.todayTS, this.props.checkList.activities)
      this.props.dispatchSetActiveCheckList(this.todayTS)
    }
  }

  currentListIsToday() {
    return this.props.activeChecklistTimestamp === this.todayTS
  }

  renderCheckListItem(item, index) {
    const {
      checkList, activityTypes, isDeleteMode, isDefaultMode, isEditMode,
    } = this.props

    return (
      <CheckListItem
        item={item}
        bgColor={index % 2 === 0 ? '#fafafa' : '#f1f1f1'}
        title={item.title}
        checked={item.completed}
        isDeleteMode={isDeleteMode}
        isEditMode={isEditMode}
        isDefaultMode={isDefaultMode}
        onDelete={() => this.props.dispatchRemoveListItem(item.id, activityTypes[item.id])}
        onPress={() => this.props.dispatchToggleItemCheckbox(item.id, checkList.timestamp)}
      />
    )
  }

  render() {
    const {
      checkList, isDeleteMode, isDefaultMode, isEditMode,
    } = this.props

    return (
      <StyleProvider style={getTheme(material)}>
        <Content>
          {checkList.activities.length > 0 &&
            <FlatList
              data={checkList.activities}
              keyExtractor={item => item.id}
              extraData={[isDeleteMode, isEditMode, isDefaultMode]}
              renderItem={({ item, index }) => this.renderCheckListItem(item, index)}
            />
          }
          {this.currentListIsToday() &&
            <TouchListItem
              title="Add new goal"
              onPress={() => this.props.navigator.push(ADD_LIST_ITEM_SCREEN)}
            />
          }
        </Content>
      </StyleProvider>
    )
  }
}

const mapStateToProps = state => ({
  activeChecklistTimestamp: selectors.getActiveCheckListId(state),
  activityTypes: selectors.getActivityTypes(state),
  checkList: selectors.getActiveCheckList(state),
  isDeleteMode: selectors.getCheckListMode(state) === 'delete',
  isEditMode: selectors.getCheckListMode(state) === 'edit',
  isDefaultMode: selectors.getCheckListMode(state) === 'default',
})

const mapDispatchToProps = {
  dispatchToggleItemCheckbox: actions.toggleItemCheckbox,
  dispatchRemoveListItem: actions.removeListItem,
  dispatchSetDefaultCheckboxValue: actions.setDefaultCheckboxValue,
  dispatchSetActiveCheckList: actions.setActiveCheckList,
}

export default connect(mapStateToProps, mapDispatchToProps)(ActivityCheckList)
