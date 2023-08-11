import React from 'react'
import './Spinner.css'

const Spinner = ({ loading, disable }) => {
  return (
    loading ? <div className='spinner' disable={disable}/> : ''
  )
}
export default Spinner
