import React from 'react';
import './DeliveryCollection.css';
import NextArrow from "../../common/Carousel/NextArrow";
import PrevArrow from '../../common/Carousel/PrevArrow'
import Slider from 'react-slick';
import DeliveryItem from './deliveryItem/DeliveryItem';

const deliveryItems = [
    {
        id:1,
        title: "Biryani",
        cover: "https://b.zmtcdn.com/data/o2_assets/bf2d0e73add1c206aeeb9fec762438111727708719.png",
    },
    {
        id:2,
        title:"Pizza",
        cover: "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
    },
    {
        id:3,
        title: "Burger",
        cover: "https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png",
    },
    {
        id: 4,
        title: "Chicken",
        cover: "https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png",
    },
    {
        id: 5,
        title: "Cake",
        cover: "https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png",
    },
    {
        id: 6,
        title: "Rolls",
        cover: "https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png",
    },
    {
        id: 7,
        title: "North India",
        cover: "https://b.zmtcdn.com/data/o2_assets/019409fe8f838312214d9211be010ef31678798444.jpeg",
    },
    {
        id: 8,
        title: "Chicken Mandi",
        cover: "https://b.zmtcdn.com/data/dish_photos/d7c/d68f90bbf43c59ca6b09a0fcd2595d7c.jpg",
    },
    {
        id: 9,
        title: "shawarma",
        cover: "https://b.zmtcdn.com/data/o2_assets/2f34540e0b12058f5f8b9390c3a3fb4a1648972281.png",
    },
    {
        id: 10,
        title: "Thali",
        cover: "https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png",
    },
    {
        id: 11,
        title: "Sweets",
        cover: "https://b.zmtcdn.com/data/dish_images/a9481ab8dce1f7cd553fe5dd6f47f7b91637241749.png",
    },
    {
        id: 12,
        title: "Noodles",
        cover: "https://b.zmtcdn.com/data/dish_images/91c554bcbbab049353a8808fc970e3b31615960315.png",
    }
];

const settings = {
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
};

const DeliveryCollection = () => {
  return (
    <div className='delivery-collection'>
        <div className="max-width">
            <div className='collection-title'>Eat what makes you happy</div>
            <Slider {...settings} >
                {deliveryItems.map((item)=>{
                    return <DeliveryItem item={item} />
                })}
            </Slider>
        </div>
    </div>
  )
}

export default DeliveryCollection