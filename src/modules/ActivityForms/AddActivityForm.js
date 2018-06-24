import React, { PureComponent } from 'react'
import { getStore } from 'store'

import { addItem } from './actions'
import ActivityForm from './ActivityForm'

export default class AddActivityForm extends PureComponent {
  constructor(props) {
    super(props)
    this.store = getStore()
  }

  onValidate(title) {
    this.store.dispatch(addItem(title))
  }

  render() {
    return (
      <ActivityForm
        onValidateSuccess={t => this.onValidate(t)}
        placeholder="Activity Name"
        submitButtonName="Add to Checklist"
      />
    )
  }
}
