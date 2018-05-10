import React from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
import {
  Icon,
  Text,
} from 'native-base'

export default function TouchListItem(props) {
  return (
    <TouchableOpacity
      onPress={() => props.onPress()}
      style={[styles.touchContainer, { backgroundColor: props.bgColor }]}
    >
      <View style={styles.iconContainer}>
        <Icon name="ios-add" />
      </View>
      <View style={styles.body}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  )
}

TouchListItem.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  bgColor: PropTypes.string,
}

TouchListItem.defaultProps = {
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
  iconContainer: {
    flex: 1,
    flexDirection: 'row',
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    flex: 5,
  },
})
