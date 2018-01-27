import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  FlatList,
} from 'react-native';

import Li from '../Li';

class Ul extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      selected: new Map(),
    };
    console.log('constructor', this.state);
    this._renderItem = this._renderItem.bind(this);
    this._keyExtractor = this._keyExtractor.bind(this);
    this._onPressItem = this._onPressItem.bind(this);
  }

  _keyExtractor(item, index) {
    return item.id;
  }

  _onPressItem(id) {
    // updater functions are preferred for transactional updates
    this.setState((state) => {
      // copy the map rather than modifying state.
      const selected = new Map(state.selected);
      selected.set(id, !selected.get(id)); // toggle
      return { selected };
    });
  }

  _renderItem({ item }) {
    console.log(this.state);
    return (
      <Li
        id={item.id}
        onPressItem={this._onPressItem}
        selected={!!this.state.selected.get(item.id)}
        title={item.title}
      />
    );
  }

  render() {
    return (
      <FlatList
        data={this.props.data}
        extraData={this.state}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />
    );
  }
}

export default Ul;
