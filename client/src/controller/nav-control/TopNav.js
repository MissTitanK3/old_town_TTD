import React from 'react'
import { LogoWrap, NavList, TopBar } from '../../style/Components'
import { MobileWrap, TopNavWrap } from '../../style/Wrapper'
import LogoImg from '../../asset/img/OTLogo.png'
import { Link } from 'react-router-dom'
import Search from '../Search'
import DrawerNav from '../DrawerNav'

export default function TopNav() {
  return (
    <div>
      <TopBar />

      <TopNavWrap>
        <LogoWrap>
          <img src={LogoImg} alt="Olde Town Logo" />
        </LogoWrap>
        <NavList>
          <div>
            {/* TODO Add box shadow */}
            <Search />
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
              <Link to='/contact-us'>
                Contact Us
              </Link>
            </li>
          </ul>
          <div>
          </div>
        </NavList>
      </TopNavWrap>
      <MobileWrap>
        <LogoWrap>
          <img src={LogoImg} alt="Olde Town Logo" />
        </LogoWrap>
        <DrawerNav />
      </MobileWrap>
    </div>
  )
}
