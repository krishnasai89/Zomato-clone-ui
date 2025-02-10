import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';

const FooterList = [
  {
    header: "About Zomato",
    body: ["Who We Are", "Blog", "Work With Us", "Investor Relations", "Report Fraud", "Press Kit", "Contact Us"]
  },
  {
    header: "Zomaverse",
    body: ["Zomato", "Blinkit", "District", "Feeding India", "Hyperpure", "Zomato Live", "Zomaland", "Weather Union"]
  },
  {
    header: "For Restaurants",
    body: ["Partner With Us", "Apps For You"]
  },
  {
    header: "Learn More",
    body: ["Privacy", "Security", "Terms"]
  }
];

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="max-width">
        <div className="footer-top">
          <img
            src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*"
            alt="Zomato Logo"
            className="footer-logo"
          />
          <div className="footer-settings">
            <div className="footer-location">
              <span className='india'></span>
              <span className="footer-country">India</span>
              <FontAwesomeIcon icon={faChevronDown} className="footer-icon" />
            </div>
            <div className="footer-location">
              <span className='footer-country'>English</span>
              <FontAwesomeIcon icon={faChevronDown} className="footer-icon" />
            </div>
          </div>
        </div>
        <div className="footer-content">
          {FooterList.map((list, index) => (
            <div className="footer-section" key={index}>
              <div className="footer-header">{list.header}</div>
              <div className="footer-body">
                {list.body.map((item, i) => (
                  <div className="footer-item" key={i}>{item}</div>
                ))}
              </div>
            </div>
          ))}
          <div className="footer-setion">
          <div className="footer-header">Social links</div>
            <div className="">
              <ul>
                <li><FontAwesomeIcon icon={faLinkedinIn} className='footer-social-icon' /></li>
                <li><FontAwesomeIcon icon={faInstagram } className='footer-social-icon' /></li>
                <li><FontAwesomeIcon icon={faXTwitter} className='footer-social-icon' /></li>
                <li><FontAwesomeIcon icon={faYoutube} className='footer-social-icon' /></li>
                <li><FontAwesomeIcon icon={faFacebookF} className='footer-social-icon' /></li>
              </ul>
            </div>
            <div className="footer-apps-img">
              <img src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png" alt="" /> <br />
              <img src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png" alt="" />
            </div>
          </div>
        </div>
        <hr className="footer-divider" />
        <div className="footer-credit absolute-center">
          Made with <span role="img" aria-label="fire">🔥</span> by Krishna
        </div>
      </div>
    </div>
  );
};

export default Footer;
