import React from 'react'
import './ExploreOption.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const ExploreOptionList =[
  {
    "heading": "Popular cuisines near me"
  },
  {
    "heading":"Popular restaurant types near me"
  },
  {
    "heading":"Top restaurant chains"
  },
  {
    "heading":"Cities we deliver to"
  },
  {
    "heading":"Popular Dishes Near Me"
  }
]

const ExploreOption = () => {
  return (
    <div className='max-width exploreoption'>
      <div className="collection-title">Explore options near me</div>
      <div className="exploreoption-box">
        {ExploreOptionList.map((items)=>{
          return <div className='exploreoption-box-dropdown'>
            <div className='exploreoption-name'>{items.heading}</div>
            <FontAwesomeIcon icon={faChevronDown} className='dropdown' />
          </div>
        })}
      </div>
    </div>
  )
}

export default ExploreOption