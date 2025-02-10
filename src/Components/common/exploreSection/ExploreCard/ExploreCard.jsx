import React from 'react';
import './ExplorCard.css'
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ExploreCard = ({restaurant}) => {
  const name = restaurant?.info?.name ?? "";
  const coverImg = restaurant?.info?.image?.url;
  const deliveryTime = restaurant?.order?.deliveryTime;
  const rating = restaurant?.info?.rating?.rating_text;
  const approxPrice = restaurant?.info?.cfo?.text;
  const offers = restaurant?.bulkOffers?? [];
  const cuisine = restaurant?.info?.cuisine
  ?.map((item) => item.name).slice(0,3);

  const discount =
  offers.length>1
  ? offers[1].text
  : offers.length===1
  ? offers[0].text : null;
  
  return (
    <div className='explore-card cur-po'>
      <div className="explore-card-cover">
        <img src={coverImg} alt={name} className="explore-card-image" />
        {discount && <div className='discount absolute-center'>{discount}</div>}
      </div>
      <div className='res-row'>
        <div className='res-name'>{name}</div>
        <div className='res-rating'>
          {rating}
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
        <div className='delivery-time'>{deliveryTime}</div>
      </div>
    </div>
  )
} 

export default ExploreCard