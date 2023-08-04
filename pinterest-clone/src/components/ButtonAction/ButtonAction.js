import React from 'react'
import './ButtonAction.css'

const ButtonAction = ({ children }) => {
  return (
    <button className='button'>
      {children}
    </button>
  )
}
export default ButtonAction
