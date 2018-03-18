import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { FlatList } from 'react-native';

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
    this.renderItem = this.renderItem.bind(this);
    this.keyExtractor = this.keyExtractor.bind(this);
    this.onPressItem = this.onPressItem.bind(this);
  }

  onPressItem(id) {
    // updater functions are preferred for transactional updates
    this.setState((state) => {
      // copy the map rather than modifying state.
      const selected = new Map(state.selected);
      selected.set(id, !selected.get(id)); // toggle
      return { selected };
    });
  }

  renderItem({ item }) {
    return (
      <Li
        id={item.id}
        onPressItem={this.onPressItem}
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
        keyExtractor={item => item.id}
        renderItem={this.renderItem}
      />
    );
  }
}

export default Ul;
