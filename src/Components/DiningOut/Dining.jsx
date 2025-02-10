import React from 'react'
import './Dining.css'
import Collections from '../common/Collections/Collections'
import Filter from '../common/Filters/Filter'
import Restaurants from '../common/Restaurants/Restaurants'
import { RestaurantsDinningout } from '../data/RestaurantsDinningout'

const restaurantListDinningout = RestaurantsDinningout;

const Dining = () => {
  return (
    <div>
      <Collections />
      <div className="max-width">
        <Filter />
        <img src="https://b.zmtcdn.com/data/o2_assets/e067a1cf0d3fe27b366402b98b994e9f1716296909.png" alt="check_out" className='checkout' />
        <Restaurants 
        Dininglist={restaurantListDinningout}
        CollectionsName='Hyderabad, Telangana, India Restaurants'
        />
      </div>
    </div>
  )
}

export default Dining