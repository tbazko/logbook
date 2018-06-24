import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet } from 'react-native'
import {
  Container,
  Button,
  Form,
  Item,
  Input,
  Text,
} from 'native-base'

export default function OneInputForm(props) {
  function renderInput(p) {
    return (
      <Input
        placeholder={p.placeholder}
        onChangeText={text => p.onChangeText(text)}
        value={p.value}
      />
    )
  }

  function renderButtonName(p) {
    return (<Text>{p.submitButtonName}</Text>)
  }

  const { style, inline } = props
  const { inlineForm, errorText, flexOne } = styles

  return (
    <Container style={style}>

      <Form style={inline ? inlineForm : {}}>
        <Item regular style={inline ? flexOne : {}}>
          {renderInput(props)}
        </Item>
        <Button full={!inline} onPress={() => props.onSubmit()}>
          {renderButtonName(props)}
        </Button>
      </Form>

      {props.error &&
        <Text style={errorText}>{props.error}</Text>
      }


    </Container>
  )
}

OneInputForm.propTypes = {
  inline: PropTypes.bool,
  style: PropTypes.object,
  placeholder: PropTypes.string,
  onChangeText: PropTypes.func,
  value: PropTypes.string,
  submitButtonName: PropTypes.string,
  error: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
}

OneInputForm.defaultProps = {
  inline: false,
  style: {},
  placeholder: 'Enter text',
  onChangeText: null,
  value: '',
  submitButtonName: 'Submit',
  error: '',
}

const styles = StyleSheet.create({
  inlineForm: {
    flex: 1,
    flexDirection: 'row',
  },
  errorText: {
    color: 'red',
    flex: 1,
    flexDirection: 'column',
  },
  flexOne: {
    flex: 1,
  },
})
