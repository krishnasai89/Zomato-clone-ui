import React from 'react'
import './DeliveryItem.css'

const DeliveryItem = ({item}) => {
  return (
    <div className='delivery-cards'>
        <div className='delivery-item-cover'>
          <img src={item.cover} alt={item.title} className='delivery-item-image' />
        </div>
        <div className='delivery-items-title'>{item.title}</div>
    </div>
  )
}

export default DeliveryItem