import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
import { ActivityForm, EditActivityForm } from 'modules/ActivityForm'
import { THEME } from 'config'
import {
  Button,
  Icon,
  CheckBox,
  Text,
  SwipeRow,
} from 'native-base'

export default class CheckListItem extends PureComponent {
  constructor(props) {
    super(props)
    this.selectedRow = null
    this.component = []
    this.state = {
      isEditMode: false,
    }
    this.editActivityForm = new EditActivityForm(this.props.item.id)
  }

  render() {
    const { isEditMode } = this.state
    return (
      <SwipeRow
        ref={(c) => { this.component[this.props.item.key] = c }}
        style={{
          paddingTop: 0,
          paddingBottom: 0,
          paddingRight: 0,
          paddingLeft: 0,
        }}
        rightOpenValue={-150}
        disableRightSwipe
        onRowOpen={() => {
          if (this.selectedRow && this.selectedRow !== this.component[this.props.item.key]) { this.selectedRow._root.closeRow(); }
          this.selectedRow = this.component[this.props.item.key]
        }}
        body={
          <TouchableOpacity
            onPress={() => this.props.onPress()}
            style={[styles.touchContainer, { backgroundColor: this.props.bgColor }]}
          >

            <View style={styles.checkboxContainer}>
              <CheckBox
                onPress={() => this.props.onPress()}
                style={{ marginLeft: 3 }}
                color={THEME.secondary}
                checked={this.props.checked}
              />
            </View>
            <View style={styles.body}>
              <Text style={{ alignSelf: 'flex-start' }}>{this.props.title}</Text>
            </View>
            <ActivityForm formType={this.editActivityForm} />
          </TouchableOpacity>
        }
        right={
          <View style={styles.buttonsContainer}>
            <Button
              style={styles.button}
              warning
              onPress={() => {
                this.setState({ isEditMode: true })
                this.selectedRow._root.closeRow()
              }}
            >
              <Icon active name="ios-create" />
            </Button>
            <Button style={styles.button} danger onPress={() => this.props.onDelete()}>
              <Icon active name="trash" />
            </Button>
          </View>
        }
      />
    )
  }
}

CheckListItem.propTypes = {
  item: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  bgColor: PropTypes.string,
}

CheckListItem.defaultProps = {
  bgColor: 'transparent',
}

const styles = StyleSheet.create({
  touchContainer: {
    flex: 1,
    flexDirection: 'row',
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonsContainer: {
    flex: 1,
    flexDirection: 'row',
    height: 70,
  },
  checkboxContainer: {
    flex: 1,
  },
  form: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
  },
  input: {
    paddingTop: 0,
    backgroundColor: '#ffffff',
  },
  body: {
    flex: 5,
  },
  button: {
    height: 70,
    width: 70,
    shadowColor: 'transparent',
  },
})
