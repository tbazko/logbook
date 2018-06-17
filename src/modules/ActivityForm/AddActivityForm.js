import _ from 'lodash'
import React from 'react'
import { getStore } from 'store'
import OneInputForm from 'components/organisms/OneInputForm'
import { addItem } from './actions'

export default class AddActivityForm {
  submit(activityForm) {
    const store = getStore()
    store.dispatch(addItem(activityForm.state.title))
  }

  render(activityForm) {
    const { formError } = activityForm.props

    return (
      <OneInputForm
        error={_.get(formError, 'message', null)}
        onSubmit={() => activityForm.submit()}
        placeholder="Activity Name"
        submitButtonName="Add to Checklist"
        value={activityForm.state.title}
        onChangeText={title => activityForm.setState({ title })}
      />
    )
  }
}
