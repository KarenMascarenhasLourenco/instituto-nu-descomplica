import React from 'react'
import './Button.css'

export const Button = ({ children }) => {
  return (
    <button className='button'>
      Salvar
      {children}
    </button>
  )
}
export default Button
