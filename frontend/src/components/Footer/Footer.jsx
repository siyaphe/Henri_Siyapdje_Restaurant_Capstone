import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'


const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className='footer-content'>
          <div className="footer-content-left">
              <img className='my-logo' src={assets.logo} alt="" />
              <p>Welcome to Chrystal Legacy Restaurant, where we serve mouth-watering dishes crafted with love and passion. Our chefs blend tradition with innovation to create culinary delights that will tantalize your taste buds.</p>

              <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
              </div>
          </div>
          <div className="footer-content-center">
              <h2>Chrystal Legacy Restaurant</h2>
              <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
              </ul>
          </div>
          <div className="footer-content-right">
              <h2>GET IN TOUCH</h2>
              <ul>
                <li>+1 412- 540-6587</li>
                <li>contact@ClR.com</li>
              </ul>
          </div>
          
        </div>
        <hr />
        <p className="footer-copyright">© 2024 Chrystal-Legacy.com - All Right Reserved.</p>

    </div>
  )
}

export default Footer