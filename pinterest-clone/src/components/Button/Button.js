import React from 'react'
import './Button.css'
import Badge from '../Badge/Badge'

export const Button = ({ total }) => {
  return (
    <button className='button'>
      Salvar
      <Badge total={total} />
    </button>
  )
}
export default Button
