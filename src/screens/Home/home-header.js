import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import PropTypes from 'prop-types'
import { ADD_ITEM_SCREEN } from 'screens/AddListItem'
import { showNextCheckList, showPrevCheckList } from 'modules/checkList/actions'
import {
  Header,
  Left,
  Right,
  Title,
  Button,
  Body,
  Icon,
} from 'native-base'

const HomeHeader = (props) => {
  function prevDay() {
    props.dispatchShowPrevCheckList(props.timestamp);
  }

  function nextDay() {
    props.dispatchShowNextCheckList(props.timestamp);
  }

  return (
    <Header>
      <Left style={{ flex: 2 }}>
        <Button
          transparent
          onPress={() => props.navigator.push(ADD_ITEM_SCREEN)}
        >
          <Icon name="ios-add" />
        </Button>
      </Left>
      <Body style={{ flexDirection: 'row', flex: 5 }}>
        <Button transparent onPress={() => prevDay()}><Icon name="ios-arrow-back" /></Button>
        <Title>{moment.unix(props.timestamp).format('MMMM Do')}</Title>
        <Button transparent onPress={() => nextDay()}><Icon name="ios-arrow-forward" /></Button>
      </Body>
      <Right style={{ flex: 2 }}>
        <Button transparent><Icon name="ios-create" /></Button>
      </Right>
    </Header>
  )
}

HomeHeader.propTypes = {
  navigator: PropTypes.object.isRequired,
  timestamp: PropTypes.number.isRequired,
  dispatchShowNextCheckList: PropTypes.func.isRequired,
  dispatchShowPrevCheckList: PropTypes.func.isRequired,
}

const mapDispatchToProps = {
  dispatchShowNextCheckList: showNextCheckList,
  dispatchShowPrevCheckList: showPrevCheckList,
};

export default connect(null, mapDispatchToProps)(HomeHeader);
