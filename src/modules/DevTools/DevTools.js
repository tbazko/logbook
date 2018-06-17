import React, { PureComponent } from 'react'
import { getPersistor } from 'store'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Text, Button, Grid, Col } from 'native-base'
import * as actions from './actions'

class DevTools extends PureComponent {
  static navigatorStyle = {
    navBarHidden: true,
  }

  static propTypes = {
    dispatchResetStore: PropTypes.func.isRequired,
    dispatchInsertData: PropTypes.func.isRequired,
  }

  async resetStore() {
    const persistor = await getPersistor()
    persistor.purge()
    this.props.dispatchResetStore()
  }

  render() {
    return (
      <Grid style={{ paddingTop: 4 }}>
        <Col>
          <Button style={{ alignSelf: 'center' }} bordered danger onPress={() => this.resetStore()}>
            <Text>Reset store</Text>
          </Button>
        </Col>
        <Col>
          <Button style={{ alignSelf: 'center' }} bordered success onPress={() => this.props.dispatchInsertData()}>
            <Text>Insert data</Text>
          </Button>
        </Col>
      </Grid>
    )
  }
}


const mapDispatchToProps = {
  dispatchResetStore: actions.resetStore,
  dispatchInsertData: actions.insertData,
}

export default connect(null, mapDispatchToProps)(DevTools)
