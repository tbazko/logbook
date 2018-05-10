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
    <Container>
      <Form>
        <Item regular>
          <Input
            placeholder={props.placeholder}
            onChangeText={text => props.onChangeText(text)}
            value={props.title}
          />
        </Item>
      </Form>
      <Button full onPress={() => props.onSubmit()}>
        <Text>{props.submitButtonName}</Text>
      </Button>
      {props.error &&
        <Text>{props.error}</Text>
      }
    </Container>
  )
}

OneInputForm.propTypes = {
  placeholder: PropTypes.string,
  onChangeText: PropTypes.func,
  title: PropTypes.string,
  submitButtonName: PropTypes.string,
  error: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
}

OneInputForm.defaultProps = {
  placeholder: 'Enter text',
  onChangeText: null,
  title: '',
  submitButtonName: 'Submit',
  error: false,
}
