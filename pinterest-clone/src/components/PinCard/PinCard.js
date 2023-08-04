import React from 'react'
import './PinCard.css'
import { Button } from '../Button/Button'
export const PinCard = ({ image, title, total }) => {
  return (
    <div>
      <div className='card-img'>
        <img src={image} alt='' />
        <div className='overlay'>
          <p className=''>pasta</p>
          <Button total={total} />
          <p className=''>{image}</p>
        </div>
      </div>
      <div className='card-content'>
        <h3 className='card-title'>{title}</h3>
        <p className='card-description'>descrição</p>
      </div>
    </div>
  )
}

export default PinCard
