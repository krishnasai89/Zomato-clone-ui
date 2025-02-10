import React from 'react'
import './Restaurants.css'
import RestaurantsCard from './RestaurantsCard/RestaurantsCard'

const Restaurants = ({Dininglist, CollectionsName}) => {
  return (
    <div className="max-width Restaurants-section">
      <div className="collection-title">{CollectionsName}</div>
      <div className="restaurants-grid">{Dininglist.map((restaurants)=>{
        return <RestaurantsCard restaurants={restaurants}/>
      })}</div>
    </div>
  )
}

export default Restaurants