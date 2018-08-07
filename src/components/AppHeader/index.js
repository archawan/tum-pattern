import React from 'react'
import { AppHeaderStyle } from './style'

export const AppHeader = ({ imageLogo }) => {
  return (
    <AppHeaderStyle>
      <div className='segment'>
        <img src={imageLogo} className='logo' alt='Logo' />
      </div>
      <div className='segment'>
        <h1 className='title'>Welcome to React</h1>
      </div>
    </AppHeaderStyle>
  )
}
