import React from 'react'
import { connect } from 'react-redux'
import {
  Contents,
  Icons,
  Logos,
} from 'themes'
import {
  AppHeader,
  AppIntro,
} from 'components'
import {
  ROUTE_PATH,
  redirect
} from 'helpers'

class MainLayoutContainer extends React.Component {
  main = {
    Logout: () => {
      redirect(ROUTE_PATH.LOGIN)
    }
  }
  render() {
    const { user } = this.props
    return (
      <div className="app-container">
        <AppHeader
          imageLogo={Logos['logo.svg']}
        />
        <pre
          style={{
            padding: '30px',
          }}
        >
          {JSON.stringify(user, undefined, 2)}
        </pre>
        <AppIntro
          defaultString='string'
          buttonText='Change string'
        />
        <div className='segment'>
          <button onClick={this.main.Logout}>Logout</button>
        </div>

        {/* Sample html, inline style, css class, image extension */}
        <div
          style={{
            padding: '30px',
          }}
        >
          <img src={Contents['home-banner.jpg']} alt='Test import jpg' />
          <br />
          <img src={Icons['icon-loading-circular-line.gif']} alt='Test import gif' />
          <br />
          <img src={Logos['logo.svg']} alt='Test import svg' />
          <br />
          <img src={Logos['logo.png']} alt='Test import png' />
          <br />
          <p><a href="https://www.google.co.th">LINK</a></p>
          <br />
          <div className='test-globalstyle-variables-mixins-utilities-typographys'>Sample global style</div>
          <div className='sample-structure-class'>
            <div className='child-element'>Sample structure class</div>
          </div>
          <div className='sample-structure-class is-success'>
            <div className='child-element'>Sample structure class with state class 'is-success'</div>
          </div>
          <div className='sample-structure-class is-error'>
            <div className='child-element'>Sample structure class with state class 'is-error'</div>
          </div>
          <div className='sample-structure-class is-success is-modifier-first'>
            <div className='child-element'>Sample structure class with state class 'is-success' and modifier class 'is-modifier-first'</div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = dispatch => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainLayoutContainer)
