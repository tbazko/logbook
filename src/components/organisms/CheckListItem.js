import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
import {
  Button,
  Icon,
  CheckBox,
  Text,
  Form,
  Item,
  Input,
} from 'native-base'

export default class CheckListItem extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      editedTitle: this.props.title,
    }
  }
  render() {
    const { editedTitle } = this.state
    return (
      <TouchableOpacity
        onPress={() => this.props.onPress()}
        style={[styles.touchContainer, { backgroundColor: this.props.bgColor }]}
      >
        {!this.props.isEditMode &&
          <View style={styles.checkboxContainer}>
            <CheckBox
              onPress={() => this.props.onPress()}
              style={{ marginLeft: 3 }}
              checked={this.props.checked}
            />
          </View>
        }
        {!this.props.isEditMode &&
          <View style={styles.body}>
            <Text>{this.props.title}</Text>
          </View>
        }
        {this.props.isEditMode &&
          <Form style={styles.form}>
            <Item regular>
              <Input
                style={styles.input}
                placeholder="Type new name"
                onChangeText={title => this.setState({ editedTitle: title })}
                value={editedTitle}
              />
            </Item>
          </Form>
        }
        {this.props.isDeleteMode &&
          <Button full danger onPress={() => this.props.onDelete()} style={styles.deleteBtn}>
            <Icon active name="trash" />
          </Button>
        }
      </TouchableOpacity>
    )
  }
}

CheckListItem.propTypes = {
  title: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  bgColor: PropTypes.string,
  isDeleteMode: PropTypes.bool.isRequired,
  isEditMode: PropTypes.bool.isRequired,
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
  deleteBtn: {
    height: 70,
    width: 70,
    shadowColor: 'transparent',
  },
})
