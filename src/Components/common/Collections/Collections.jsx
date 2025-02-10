import React from 'react'
import './Collections.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import Slider from 'react-slick';
import NextArrow from '../Carousel/NextArrow';
import PrevArrow from '../Carousel/PrevArrow';

const settings = {
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
};

const CollectionsList=[
    {
        id: 1,
        title: "Top Trending Spots",
        cover: "https://b.zmtcdn.com/data/collections/684397cd092de6a98862220e8cc40aca_1721907131.png",
        place: "23 Places",
    },
    {
        id: 2,
        title: "Candle Lit Dining",
        cover: "https://b.zmtcdn.com/data/collections/c24b480f58f07a77719d00ff85c47ab3_1738912390.png",
        place: "9 Places",
    },
    {
        id: 3,
        title: "Pizza Day Celebrations",
        cover: "https://b.zmtcdn.com/data/collections/68113c6bddb038ac936a1f63bcf5262e_1707387334.png",
        place: "18 Places",
    },
    {
        id: 4,
        title: "Newly Opened Places",
        cover: "https://b.zmtcdn.com/data/collections/6922d49fb675d0490edb652abf5ca45f_1727171286.png",
        place: "23 Places",
    },
    {
        id: 5,
        title: "Best Rooftop Places",
        cover: "https://b.zmtcdn.com/data/collections/2b9361aa328a43b08986f77bbec280bd_1715844025.png",
        place: "29 Places",
    },
    {
        id: 6,
        title: "Best Insta-worthy Places",
        cover: "https://b.zmtcdn.com/data/collections/a5e6d123ac773de6d33250da4bb3b93f_1731309690.png",
        place: "17 Places",
    },
    {
        id: 7,
        title: "Regional Flavours",
        cover: "https://b.zmtcdn.com/data/collections/c0659397d7fe2cb45d024d9375c2c5ea_1725362174.png",
        place: "34 Places",
    },
    {
        id: 8,
        title: "Best Buffets In Town",
        cover: "https://b.zmtcdn.com/data/collections/4e41758598775d808a8e70d6654df929_1725604011.png",
        place: "12 Places",
    }
  ]

const Collections = () => {
  return (
    <div className='collection-wrapper'>
        <div className="max-width collection">
            <div className="collection-title">Collections</div>
            <div className="collection-subtitle-row">
                <div className='collection-subtitle-text'>Explore curated lists of top restaurants, cafes, pubs, and bars in Hyderabad, based on trends</div>
                <div className='collection-location'>
                    <div>All collections in Hyderabad</div>
                    <FontAwesomeIcon icon={faCaretRight} />
                </div>
            </div>
            <Slider {...settings}>
                {CollectionsList.map((item)=>(
                    <div className="">
                        <div className="collection-cover">
                            <img src={item.cover} alt={item.title} className="collection-image" />
                            <div className="gradient-bg"></div>
                            <div className='collection-card-title'>{item.title}</div>
                            <div className="collection-card-subtitle">
                                <div>{item.place}</div>
                                <FontAwesomeIcon icon={faCaretRight} />
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    </div>
  )
}

export default Collections