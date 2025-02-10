import React from 'react'
import './Filter.css'
import FilterItem from './filterItem/filteritem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSliders, faSort } from '@fortawesome/free-solid-svg-icons'

const DeliveryFilter = [
  {
    id:1,
    icon: <FontAwesomeIcon icon={faSliders} className='absolute-center'/>,
    title: 'Filters'
  },
  {
    id:2,
    title:"Rating 4.0+"
  },
  {
    id:3,
    title:"Safe and Hygienic"
  },
  {
    id:4,
    title:"Pure Veg"
  },
  {
    id:5,
    title:"Delivery Time",
    icon: <FontAwesomeIcon icon={faSort} className='absolute-center'/>,
  },
  {
    id:6,
    title:"Great Offers"
  }
]

const Filter = () => {
  return (
    <div className='filter'>
      {DeliveryFilter && DeliveryFilter.map((filter) => {
      return <FilterItem filter={filter} key={filter.id} />
    })}
    </div>
  )
}

export default Filter