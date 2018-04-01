import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

class Li extends PureComponent {
  static propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    onPressItem: PropTypes.func.isRequired,
    selected: PropTypes.bool,
  }

  static defaultProps = {
    selected: false,
  }

  onPress() {
    this.props.onPressItem(this.props.id);
  }

  render() {
    const textColor = this.props.selected ? 'red' : 'black';
    return (
      <TouchableOpacity onPress={() => this.onPress()}>
        <View>
          <Text style={{ color: textColor }}>
            {this.props.title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default Li;
