import React from 'react'
import PropTypes from 'prop-types'
import {
  Container,
  Button,
  Form,
  Item,
  Input,
  Text,
} from 'native-base'

export default function OneInputForm(props) {
  return (
    <Container
      style={{
        flex: 1,
        flexDirection: 'row',
        height: 50,
      }}
    >
      <Form style={{ flex: 1, flexDirection: 'row' }}>
        <Item regular style={{ flex: 1 }}>
          <Input
            placeholder={props.placeholder}
            onChangeText={text => props.onChangeText(text)}
            value={props.value}
          />
        </Item>
        <Button onPress={() => props.onSubmit()} style={{ height: 50 }}>
          <Text>{props.submitButtonName}</Text>
        </Button>
      </Form>

      {props.error &&
        <Text>{props.error}</Text>
      }
    </Container>
    // <Container style={props.style}>
    //   <Form>
    //     <Item regular>
    //       <Input
    //         placeholder={props.placeholder}
    //         onChangeText={text => props.onChangeText(text)}
    //         value={props.value}
    //       />
    //     </Item>
    //   </Form>
    //   <Button full onPress={() => props.onSubmit()}>
    //     <Text>{props.submitButtonName}</Text>
    //   </Button>
    //   {props.error &&
    //     <Text>{props.error}</Text>
    //   }
    // </Container>
  )
}

OneInputForm.propTypes = {
  style: PropTypes.object,
  placeholder: PropTypes.string,
  onChangeText: PropTypes.func,
  value: PropTypes.string,
  submitButtonName: PropTypes.string,
  error: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
}

OneInputForm.defaultProps = {
  style: {},
  placeholder: 'Enter text',
  onChangeText: null,
  value: '',
  submitButtonName: 'Submit',
  error: '',
}
