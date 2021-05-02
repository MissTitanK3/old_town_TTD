import React from 'react'
import OldeCalendar from '../controller/OldeCalendar'
import PiannoGirl from '../asset/img/pianno_girl.png'
import { FECardWrapper } from '../style/Wrapper';
import FECard from '../model/FECard';


export default function EventsCal() {
  return (
    <div>
      <FECardWrapper>
        {/* TODO make this dynamic with event data */}
        <h2>FEATURED EVENTS</h2>
        <div>
          <FECard
            img={PiannoGirl}
            bColor='bBlue'
            alt='Pianno Girl'
            title='FESTIVAL'
            dates='4/1/2021&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9-5pm'
            accent='aBlue'
          />
          <FECard
            img={PiannoGirl}
            bColor='bOran'
            alt='Pianno Girl'
            title='FESTIVAL'
            dates='4/1/2021&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9-5pm'
            accent='aRed'
          />
          <FECard
            img={PiannoGirl}
            bColor='bGreen'
            alt='Pianno Girl'
            title='FESTIVAL'
            dates='4/1/2021&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9-5pm'
            accent='aGreen'
          />
        </div>
      </FECardWrapper>
      <OldeCalendar />
    </div>
  )
}
