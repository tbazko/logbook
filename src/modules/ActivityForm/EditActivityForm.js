import _ from 'lodash'
import React from 'react'
import { getStore } from 'store'
import OneInputForm from 'components/organisms/OneInputForm'
import { editItem, setViewMode } from './actions'

export default class EditActivityForm {
  constructor(activityTypeId) {
    this.store = getStore()
    this.id = activityTypeId
    this.activityTypes = this.store.getState().activityTypes
    this.title = this.activityTypes[this.id].title
  }

  submit(title) {
    this.store.dispatch(editItem(this.id, { title }))
  }

  render(activityForm) {
    const { formError } = activityForm.props

    return (
      <OneInputForm
        style={{ flexDirection: 'row', height: 100 }}
        error={_.get(formError, 'message', null)}
        onSubmit={() => activityForm.submit()}
        placeholder="Type new name"
        submitButtonName="Save"
        value={!_.isNull(activityForm.state.title) ? activityForm.state.title : this.title}
        onChangeText={title => activityForm.setState({ title })}
      />
    )
  }
}
