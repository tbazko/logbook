import _ from 'lodash'
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import OneInputForm from 'components/organisms/OneInputForm'
import { addItem, addItemError } from './actions'
import * as errors from './errors'
import * as selectors from './selectors'


class AddActivityForm extends PureComponent {
  static navigatorStyle = {
    navBarHidden: true,
  }

  static propTypes = {
    dispatchAddItem: PropTypes.func.isRequired,
    dispatchAddItemError: PropTypes.func.isRequired,
    formError: PropTypes.object,
    historicalActivityTypes: PropTypes.object,
    activityTypes: PropTypes.object,
  }

  static defaultProps = {
    formError: null,
    historicalActivityTypes: null,
    activityTypes: null,
  }

  constructor(props) {
    super(props)
    this.state = {
      title: '',
    }
  }

  submit() {
    try {
      this.validateTitle(this.state.title);
      this.props.dispatchAddItem(this.state.title)
      this.setState({ title: '' })
    } catch (err) {
      this.props.dispatchAddItemError(err)
    }
  }

  validateTitle(title) {
    const { historicalActivityTypes, activityTypes } = this.props
    if (this.isEmptyString(title)) {
      throw new errors.EmptyTitleError()
    }

    if (!this.isUniqueTitle(title, activityTypes)) {
      throw new errors.NotUniqueTitleError()
    }

    if (!this.isUniqueTitle(title, historicalActivityTypes)) {
      throw new errors.NotUniqueTitleError()
    }
  }

  isEmptyString(str) {
    return str.length === 0
  }

  isUniqueTitle(title, activityTypes) {
    if (!activityTypes) return true;
    const hItems = _.keys(activityTypes).map(key => activityTypes[key])
    return !hItems.find(item => item.title.toLowerCase() === title.toLowerCase())
  }

  render() {
    const { formError } = this.props;
    return (
      <OneInputForm
        error={_.get(formError, 'message', null)}
        onSubmit={() => this.submit()}
        placeholder="Activity Name"
        submitButtonName="Add to Checklist"
        title={this.state.title}
        onChangeText={title => this.setState({ title })}
      />
    )
  }
}

const mapStateToProps = state => ({
  formError: selectors.getAddItemFormError(state),
  historicalActivityTypes: selectors.getHistoricalActivityTypes(state),
  activityTypes: selectors.getActivityTypes(state),
});

const mapDispatchToProps = {
  dispatchAddItem: addItem,
  dispatchAddItemError: addItemError,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddActivityForm);
