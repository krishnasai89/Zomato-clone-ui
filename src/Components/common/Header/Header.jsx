import React from 'react'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faCaretDown, faSearch, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <div className='max-width header'>
      <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" 
        alt="Zomato-logo" 
        className='header-logo'/>
        <div className="header-right">
          <div className="header-location-search-container">
            <div className="location-wrapper">
              <div className="location-icon-name">
                <FontAwesomeIcon icon={faLocationDot} className='absolute-center location-icon'/>
                <div>Hyderabad</div>
              </div>
              <FontAwesomeIcon icon={faCaretDown} className='absolute-center' />
            </div>
            <div className="location-search-separator"></div>
            <div className="header-searchBar">
              <FontAwesomeIcon icon={faSearch} className='absolute-center search-icon'/>
              <input type="search" placeholder='Search for restaurant, cuisine or dish' className='search-input'/>
            </div>
          </div>
          <div className='profile-wrapper'>
              <img src="https://b.zmtcdn.com/web/assets/2267aec184e096c98c46a1565a5563661664945464.png?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A" 
              alt="profile" className='header-profile' />
              <span className='header-username'>Krishna</span>
              <FontAwesomeIcon icon={faChevronDown} className='profile-options-icon' />
            </div>
        </div>
    </div>
  )
}

export default Header