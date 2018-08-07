import React from 'react'
import { connect } from 'react-redux'
import {
  Route
} from 'react-router-dom'
import {
  setReduxThisRoute
} from 'actions'
import {
  LoginContainer,
  MainLayoutContainer
} from 'containers'
class RouteContainer extends React.Component {
  componentDidMount(){
    const { setReduxThisRoute } = this.props
    setReduxThisRoute(this.props.history)
  }
  render() {
    return (
      <div className="route-container">
        <Route exact path="/" component={LoginContainer} />
        <Route path="/Site" component={MainLayoutContainer} />
      </div>
    )
  }
}


const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
  setReduxThisRoute: data => dispatch(setReduxThisRoute(data))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RouteContainer)