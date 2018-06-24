import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { getStore } from 'store'
import { editItem } from './actions'
import ActivityForm from './ActivityForm'

export default class EditActivityForm extends PureComponent {
  static propTypes = {
    id: PropTypes.string.isRequired,
    onSubmitFinish: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props)
    this.store = getStore()
    const { activityTypes } = this.store.getState()
    this.title = activityTypes[this.props.id].title
  }

  onValidate(title) {
    this.store.dispatch(editItem(this.props.id, { title }))
  }

  render() {
    return (
      <ActivityForm
        style={{ height: 50 }}
        inline
        title={this.title}
        onSubmitFinish={() => this.props.onSubmitFinish()}
        onValidateSuccess={t => this.onValidate(t)}
        placeholder="Type new name"
        submitButtonName="Save"
      />
    )
  }
}
