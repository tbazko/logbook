import _ from 'lodash'
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import OneInputForm from 'components/organisms/OneInputForm'
import { addItemError, removeItemError } from './actions'
import * as selectors from './selectors'
import validate from './validate'


class ActivityForm extends PureComponent {
  static navigatorStyle = {
    navBarHidden: true,
  }

  static propTypes = {
    // public props
    onValidateSuccess: PropTypes.func.isRequired,
    title: PropTypes.string,
    inline: PropTypes.bool,
    style: PropTypes.object,
    placeholder: PropTypes.string,
    onSubmitFinish: PropTypes.func,
    submitButtonName: PropTypes.string,

    // actions
    dispatchAddItemError: PropTypes.func.isRequired,
    dispatchRemoveItemError: PropTypes.func.isRequired,

    // state
    formError: PropTypes.object,
  }

  static defaultProps = {
    title: '',
    inline: false,
    style: {},
    placeholder: 'Enter text',
    submitButtonName: 'Submit',
    formError: null,
    onSubmitFinish: () => false,
  }

  constructor(props) {
    super(props)
    this.state = {
      title: props.title,
    }
  }

  submit() {
    try {
      validate(this.state.title)
      this.props.onValidateSuccess(this.state.title)
      this.setState({ title: '' })
      this.props.dispatchRemoveItemError()
      this.props.onSubmitFinish()
    } catch (err) {
      if (err.isValidationError) {
        this.props.dispatchAddItemError(err)
      } else {
        throw err
      }
    }
  }

  render() {
    const {
      formError, style, inline, placeholder, submitButtonName,
    } = this.props

    return (
      <OneInputForm
        style={style}
        inline={inline}
        error={_.get(formError, 'message', null)}
        onSubmit={() => this.submit()}
        placeholder={placeholder}
        submitButtonName={submitButtonName}
        value={this.state.title}
        onChangeText={title => this.setState({ title })}
      />
    )
  }
}

const mapStateToProps = state => ({
  formError: selectors.getAddItemFormError(state),
})

const mapDispatchToProps = {
  dispatchAddItemError: addItemError,
  dispatchRemoveItemError: removeItemError,
}

export default connect(mapStateToProps, mapDispatchToProps)(ActivityForm)
