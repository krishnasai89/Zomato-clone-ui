import React from 'react'
import './Delivvery.css'
import Filter from '../common/Filters/Filter'
import DeliveryCollection from './DeliveryCollection/DeliveryCollection'
import TopBrand from './TopBrand/TopBrand'
import ExploreSection from '../common/exploreSection/ExploreSection'
import { restaurants } from '../data/restaurants'

const restaurantList = restaurants;

const Delivery = () => {
  return (
    <div>
      <div className="max-width">
        <Filter />
      </div>
      <DeliveryCollection />
      <TopBrand />
      <ExploreSection 
      list={restaurantList} 
      collectionName='Delivery Restaurants in Hyderabad'
      />
    </div>
  )
}

export default Delivery