import React from 'react'
import OldeCalendar from '../controller/OldeCalendar'

// DATA
import { useWPEventStore } from '../api/store';

// Assests
import PiannoGirl from '../asset/img/pianno_girl.png'
import PageBreakOne from '../asset/img/page_break_one.png'

// Stylesheet
import { AltFECardWrapper } from '../style/Wrapper';
import FECard from '../model/FECard';
import { Discover, EventDetails, GreenBtn, PageBreakAlt } from '../style/Components';
import EctTitleCard from '../model/EctTitleCard';
import { Link } from 'react-router-dom';

export default function EventsCal() {
  const WPEvent = useWPEventStore(state => state.someData)
  return (
    <div>
      <PageBreakAlt>
        {/* TODO Adjust the size of the pagebreaks */}
        <img src={PageBreakOne} alt="Page Break" />
      </PageBreakAlt>
      <EctTitleCard name='Events Calendar' styles='aTeal' />
      <Discover>Planning an event in Olde Town? Give us the details and we’ll get your event added to the calendar!</Discover>
      <EventDetails>
        <Link to='/'>
          <GreenBtn>Submit An Event</GreenBtn>
        </Link>
      </EventDetails>
      <AltFECardWrapper>
        {/* TODO make this dynamic with event data */}
        <h2>FEATURED EVENTS</h2>
        <div>
          <FECard
            img={PiannoGirl}
            bColor='bBlue'
            alt='Pianno Girl'
            title={WPEvent[0]?.acf.event_name}
            dates={WPEvent[0]?.acf.event_date_short}
            accent='aBlue'
          />
          <FECard
            img={PiannoGirl}
            bColor='bOran'
            alt='Pianno Girl'
            title={WPEvent[1]?.acf.event_name}
            dates={WPEvent[1]?.acf.event_date_short}
            accent='aRed'
          />
          <FECard
            img={PiannoGirl}
            bColor='bGreen'
            alt='Pianno Girl'
            title={WPEvent[2]?.acf.event_name}
            dates={WPEvent[2]?.acf.event_date_short}
            accent='aGreen'
          />
        </div>
      </AltFECardWrapper>
      <OldeCalendar />
    </div>
  )
}
