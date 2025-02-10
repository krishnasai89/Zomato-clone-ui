import React from 'react';
import './RestaurantsCard.css'
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const RestaurantsCard = ({restaurants}) => {
    const coverimgs = restaurants?.info?.image?.url;
    const names = restaurants?.info?.name ?? "";
    const offers = restaurants?.gold?.offerValue;
    const ratings = restaurants?.info?.rating?.rating_text;
    const cuisine = restaurants?.info?.cuisine
    ?.map((item) => item.name).slice(0,3);
    const approxPrice = restaurants?.info?.cft?.text;
    const locality = restaurants?.info?.locality?.name;
    const closetime = restaurants?.info?.timing?.text;
    const distance = restaurants?.distance;

  return (
    <div className='cur-po restaurants-card'>
        <div className="restaurants-card-cover">
            <img src={coverimgs} alt={names} className="restaurants-card-image" />
            {offers && <div className='discounts absolute-center'>Flat {offers}</div>}
        </div>
        <div className="res-row">
          <div className="res-name ">{names}</div>
          <div className='res-rating'>
            {ratings}
            <FontAwesomeIcon icon={ faStar } className='res-rating-i'/>
          </div>
        </div>
        <div className="res-row">
        {cuisine.length && <div className='res-cuisine'>{cuisine.map((item,i)=>{
          return <span className='res-cuisine-tag'>{item}{i!==cuisine.length-1 && ','}</span>
        })}</div>}
        {approxPrice && <div className='approx-Price'>{approxPrice}</div>}
        </div>
        <div className="res-row">
          {locality && <div className='locality'>{locality}</div>}
          {distance && <div className='distance'>{distance}</div>}
        </div>
        <div className="res-row">
          {closetime && <div className='closetime'>{closetime}</div>}
        </div>
    </div>
  )
}

export default RestaurantsCard