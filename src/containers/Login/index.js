import React from 'react'
import { connect } from 'react-redux'
import {
  FormLogin
} from 'components'
import {
  setReduxUserAuth
} from 'actions'
import {
  ROUTE_PATH,
  redirect
} from 'helpers'
class LoginContainer extends React.Component {

  login = {
    onClickSubmitForm: (data) => {
      const { setReduxUserAuth } = this.props
      setReduxUserAuth(data)
      redirect(ROUTE_PATH.SITE)
    }
  }

  render() {
    return (
      <FormLogin
        onClickSubmitForm={this.login.onClickSubmitForm}
      />
    )
  }
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
  setReduxUserAuth: data => dispatch(setReduxUserAuth(data))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer)