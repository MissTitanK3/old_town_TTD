import React from 'react'
import { Link } from 'react-router-dom'

// Stylesheet
import { NavList, TopBar } from '../../style/Components'
import { LogoWrap, MobileWrap, TopNavWrap } from '../../style/Wrapper'

// Assets
import LogoImg from '../../asset/img/OTLogo.png'
// import Search from '../Search'
import DrawerNav from '../DrawerNav'

export default function TopNav() {
  return (
    <div>
      <TopBar />
      <TopNavWrap>
        <LogoWrap>
          <Link to='/'>
            <img src={LogoImg} alt="Olde Town Logo" />
          </Link>
        </LogoWrap>
        <NavList>
          <div>
            {/* TODO Add box shadow */}
            {/* <Search /> */}
          </div>
          <ul>
            <li>
              <Link to='/about'>
                About
              </Link>
            </li>
            <li>
              <Link to='/events'>
                Events
              </Link>
            </li>
            <li>
              <Link to='/directory'>
                Directory
              </Link>
            </li>
            <li>
              <Link to='/news'>
                News
              </Link>
            </li>
            <li>
              <Link to={{ pathname: 'https://olde-town-arvada-business-improvement-district.myshopify.com/collections/all' }} target='_blank'>
                Store
              </Link>
            </li>
          </ul>
          <div>
          </div>
        </NavList>
      </TopNavWrap>
      <MobileWrap>
        <LogoWrap>
          {/* Add link here for mobile home */}
          <img src={LogoImg} alt="Olde Town Logo" />
        </LogoWrap>
        <DrawerNav />
      </MobileWrap>
    </div>
  )
}
