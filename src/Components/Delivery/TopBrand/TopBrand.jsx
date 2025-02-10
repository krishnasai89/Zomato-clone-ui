import React from 'react'
import './TopBrand.css'
import Slider from 'react-slick';
import NextArrow from '../../common/Carousel/NextArrow'
import PrevArrow from '../../common/Carousel/PrevArrow'

const BrandList = [
  {
    id:0,
    title: "KFC",
    time: "30min",
    cover: "https://b.zmtcdn.com/data/brand_creatives/logos/f1dc700c8be881b9a17be904971a0644_1726681832.png",
  },
  {
    id: 1,
    title: "Shah Ghouse Hotel & Restaurant",
    time: "34min",
    cover: "https://b.zmtcdn.com/data/brand_creatives/logos/8e611fa769c66049e2af45b00b1d8d52_1635882594.png",
  },
  {
    id: 2,
    title: "Burger King",
    time: "26min",
    cover: "https://b.zmtcdn.com/data/brand_creatives/logos/a6927d83d9185b7788814049b4a9fc8c_1726607812.png",
  },
  {
    id: 3,
    title: "Subway",
    time: "30min",
    cover: "https://b.zmtcdn.com/data/brand_creatives/logos/9302c59eca94abbee01aec9acf9305f6_1676520784.png",
  },
  {
    id: 4,
    title: "McDonald's",
    time: "21min",
    cover: "https://b.zmtcdn.com/data/brand_creatives/logos/5c1c97764d187c1e4dc1dbdea54c7318_1726684167.png",
  },
  {
    id: 5,
    title: "Paradise Biryani - A Legend Since 1953",
    time: "37min",
    cover: "https://b.zmtcdn.com/data/brand_creatives/logos/116fd4c89f628d110a526c2fdea08b16_1726681936.png",
  },
  {
    id: 6,
    title: "Varalakshmi Tiffins",
    time: "36min",
    cover: "https://b.zmtcdn.com/data/brand_creatives/logos/e0cb85e5e0823177bdabcb8016e092b0_1728980805.png",
  },
  {
    id: 7,
    title: "Bakingo",
    time: "35min",
    cover: "https://b.zmtcdn.com/data/brand_creatives/logos/10887687d8e18521fa32e8a0ba834bc9_1717476731.png",
  },
  {
    id: 8,
    title: "Dadu's",
    time: "21min",
    cover: "https://b.zmtcdn.com/data/brand_creatives/logos/0613d2d211e0261ffd5baaea0fd643a2_1704893316.png",
  },
  {
    id: 9,
    title: "Udipi's Upahar",
    time: "43min",
    cover: "https://b.zmtcdn.com/data/brand_creatives/logos/5c34d65e95f5544664ae4355ba5f7b54_1602135287.png",
  },
  {
    id: 10,
    title: "G. Pulla Reddy Sweets",
    time: "34min",
    cover: "https://b.zmtcdn.com/data/brand_creatives/logos/577b063a5206927b56905397db020146_1598357966.png",
  }
]

const settings = {
  infinite: false,
  slidesToShow: 5,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />
};

const TopBrand = () => {
  return (
    <div className='top-brands max-width'>
      <div className="collection-title">Top brands for you</div>
      <Slider {...settings}>
        {BrandList.map((brand)=>{
          return <div className='top-brands-cards'>
            <div className="top-brands-cover">
              <img src={brand.cover} alt={brand.title} className="top-brand-images" />
            </div>
            <div className="top-brand-title">{brand.title}</div>
            <div className="top-brand-time">{brand.time}</div>
          </div>;
        })}
      </Slider>
    </div>
  )
}

export default TopBrand