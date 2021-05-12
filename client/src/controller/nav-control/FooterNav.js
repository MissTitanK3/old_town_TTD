import React from 'react'
import { Link } from 'react-router-dom'

// Stylesheet
import { CWrap, SocialWrap, DetailsWrap } from '../../style/Wrapper'

// Assets
import Insta from '../../asset/img/insta.png'
import FB from '../../asset/img/facebook.png'
import Twit from '../../asset/img/twitter.png'
import YT from '../../asset/img/youtube.png'
import NLForm from '../NLForm'

export default function FooterNav() {
  return (
    <div>
      <div>
        <NLForm />
      </div>
      <DetailsWrap>
        <div>
          <h2>Olde Town <br /> Arvada</h2>
          <ul>
            <li className='LinkAlt'>7307 Grandview Ave</li>
            <li className='LinkAlt'>Arvada, CO 80002</li>
            <li className='LinkAlt'>Phone: 303.450.4769</li>
          </ul>
        </div>
        <div>
          <ul>
            {/* <li><Link to='/covid19'>Covid Respones</Link></li>
            <li><Link to='/shop'>Shop</Link></li> */}
            <li><Link to='/about'>About Olde Town Arvada</Link></li>
            <li><Link to='/directory'>Business Directory</Link></li>
          </ul>
        </div>
        <div>
          <ul>
            <li><Link to='/events'>Events</Link></li>
            <li><Link to='/newsfeed'>Newsfeed</Link></li>
            {/* <li><Link to='/contact'>Contact Us</Link></li> */}
          </ul>
        </div>
      </DetailsWrap>
      <SocialWrap>
        <span>FOLLOW US ON YOUR FAVORITE SOCIAL MEDIA SITES!</span>
        <br />
        <div>
          <a href='https://www.instagram.com/oldetownarvadaco/' target="_blank" rel="noopener noreferrer">
            <img src={Insta} alt="Instagram Logo" />
            <span>INSTAGRAM</span>
          </a>
          <a href='https://www.facebook.com/OldeTownArvadaCO' target="_blank" rel="noopener noreferrer">
            <img src={FB} alt="Facebook Logo" />
            <span>FACEBOOK</span>
          </a>
          <a href='https://www.youtube.com/channel/UCgxdgkZHZsabHarFgoTrAXw' target="_blank" rel="noopener noreferrer">
            <img src={YT} alt="YouTube Logo" />
            <span>YOUTUBE</span>
          </a>
          <a href='https://twitter.com/OldeTownArvada' target="_blank" rel="noopener noreferrer">
            <img src={Twit} alt="Twitter Logo" />
            <span>TWITTER</span>
          </a>
        </div>
      </SocialWrap>
      <CWrap>
        <span>
          <p>
            C 2021 for Olde Town Arvada by T-Time Design
            <a href='https://www.mapbox.com/about/maps/' target='_blank' rel='noreferrer' >     Maps &copy; Mapbox &copy; OpenStreetMap</a>
          </p>

        </span>
      </CWrap>
    </div>
  )
}
