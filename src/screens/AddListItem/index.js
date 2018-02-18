import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Form,
  Item,
  Input,
  Text,
} from 'native-base'
import { addListItem } from 'modules/checkList/actions'

export const ADD_ITEM_SCREEN = {
  screen: 'stats.AddListItem',
  title: 'Add List Item',
};

class AddListItemScreen extends PureComponent {
  static navigatorStyle = {
    navBarHidden: true,
  }

  static propTypes = {
    navigator: PropTypes.shape({ // eslint-disable-line
      push: PropTypes.func,
    }).isRequired,
    dispatchAddListItem: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      title: '',
    }
  }

  submit() {
    this.props.dispatchAddListItem(this.state.title)
    this.setState({ title: '' })
  }

  render() {
    const { navigator } = this.props;
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => navigator.pop()}>
              <Icon name="ios-arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>AddListItem</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Form >
            <Item regular>
              <Input
                placeholder="Activity Name"
                onChangeText={title => this.setState({ title })}
                value={this.state.title}
              />
            </Item>
          </Form>
          <Button full onPress={() => this.submit()}>
            <Text>Add to Checklist</Text>
          </Button>
        </Content>
      </Container>
    )
  }
}

const mapDispatchToProps = {
  dispatchAddListItem: addListItem,
};

export default connect(null, mapDispatchToProps)(AddListItemScreen);
