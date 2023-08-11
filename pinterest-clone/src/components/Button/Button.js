import React from 'react'
import './Button.css'
import Spinner from '../Spinner/Spinner'

const ButtonAction = ({ label, loading, labelLoading, ...buttonProps }) => {
  return (
    <button className='button buttonAction' {...buttonProps}>
      <Spinner loading={loading} />
      {loading ? labelLoading : label}
    </button>
  )
}
export default ButtonAction
