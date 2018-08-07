import React from 'react'
import { AppIntroStyle } from './style'

export class AppIntro extends React.Component {
  state = {
    displayText: ''
  }

  componentDidMount() {
    const { defaultString } = this.props
    this.setState({
      displayText: defaultString
    })
  }

  intro = {
    onClickButton: () => {
      const textInput = this.refs.textInput.value
      this.setState({
        displayText: textInput
      })
    }
  }

  render() {
    const { displayText } = this.state
    const { buttonText } = this.props
    return (
      <AppIntroStyle>
        <p className='text-introduction'>To get started, edit <code>this content</code> and save to reload.</p>
        <div className='segment'>
          <input ref='textInput' type='text' />
          <button onClick={this.intro.onClickButton}>
            {buttonText}
          </button>
        </div>
        <p className='text-result'>
          {' '}
          {displayText}
        </p>
      </AppIntroStyle>
    )
  }
}
