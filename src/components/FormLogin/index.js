import React, { Component } from 'react'
import {
  FormLoginStyle,
  FormLoginSecondaryStyle,
} from './style'

export class FormLogin extends Component {
  onClickSubmitForm = (ev) => {
    const { onClickSubmitForm } = this.props
    ev.preventDefault()
    const userAuth = {
      username: ev.target.username.value,
      password: ev.target.password.value
    }
    if (onClickSubmitForm) {
      onClickSubmitForm(userAuth)
    }
  }

  render() {
    return (
      <React.Fragment>
        <FormLoginStyle onSubmit={this.onClickSubmitForm}>
          <div className='segment'>
            <label className='label'>Username</label>
            <input name='username' type='text' />
          </div>
          <div className='segment'>
            <label className='label'>Password</label>
            <input name='password' type='password' />
          </div>
          <div className='segment'>
            <button type='submit'>Submit</button>
          </div>
        </FormLoginStyle>
        <FormLoginSecondaryStyle>
          <div className='segment'>
            <label className='label'>Sample styled-components extend style</label>
          </div>
          <div className='segment'>
            <label className='label'>Sample minor component in main component</label>
          </div>
        </FormLoginSecondaryStyle>
      </React.Fragment>
    )
  }
}
