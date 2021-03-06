import React from 'react'

// DATA
import { useWPEventStore } from '../api/store'

// Assets
import EctTitleCard from '../model/EctTitleCard'
import PageBreakOne from '../asset/img/page_break_one.png'
import PiannoGirl from '../asset/img/pianno_girl.png'

// Stylesheet
import { Discover, PageBreakAlt } from '../style/Components'
import EventsCard from '../controller/EventsCard'
import AltEventsCard from '../controller/AltEventsCard'
import { EventsCardWrapper, FECardWrapper } from '../style/Wrapper'
import FECard from '../model/FECard'
import { useQuery } from 'react-query'
import axios from 'axios'

export default function Events() {
  const WPEvent = useWPEventStore(state => state.someData)
  const addWPEvent = useWPEventStore(state => state.addData)

  function useBusiness() {
    return useQuery("posts", async () => {
      const { data } = await axios.get(
        "https://oldetownarvada.org/wp-json/wp/v2/eventlistings"
      );
      addWPEvent(data)
    });
  }
  // TODO this doesnt work in a useEffect, debug
  useBusiness()

  return (
    <div>
      <PageBreakAlt>
        {/* TODO Adjust the size of the pagebreaks */}
        <img src={PageBreakOne} alt="Page Break" />
      </PageBreakAlt>
      <EctTitleCard name='Events' styles='aTeal' />
      <Discover>Heading to Olde Town? We want to make sure you're in the loop! Check out our Events Calendar to see all that is happening!</Discover>
      <EventsCardWrapper>
        <AltEventsCard
          accent='aLime'
          border='bBlue'
          img={PiannoGirl}
          alt='Pianno Girl'
          title='EVENTS CALENDAR'
          desc="From signature Olde Town events to live music, retail specials, and more, there is always something to do in Olde Town!"
          btn='GO TO CALENDAR'
          dest='/events-calendar'
        />
        <hr />
        <EventsCard
          accent='aBlue'
          border='bOr'
          img='https://oldetownarvada.org/wp-content/uploads/2021/03/Submit-an-Event.jpg'
          alt='Pianno Girl'
          title='SUBMIT AN EVENT'
          desc="Planning an event in Olde Town? Tell us the details and we???ll get your event added to the community calendar!"
          btn='SUBMIT AN EVENT'
          link='http://eepurl.com/hyxqpX'
        />
        <hr />
        <EventsCard
          accent='aRed'
          border='bDOr'
          img={PiannoGirl}
          alt='Pianno Girl'
          title='VOLUNTEER'
          desc="Want to lend a hand? Click here to fill out the colunteer form!"
          btn='GO TO FORM'
          link='http://eepurl.com/hyxqkH'
        />
        <hr />
        <EventsCard
          accent='aLOr'
          border='bBlue'
          img={PiannoGirl}
          alt='Pianno Girl'
          title='VENDOR REGISTRATION'
          desc="Interested in receiving info about vending at an Olde Town event? Click here to be added to our vendor email list!"
          btn='GO TO FORM'
          link='http://eepurl.com/gPsSR9'
        />
      </EventsCardWrapper>
      <FECardWrapper>
        {/* Pulls the lastest 3 entries */}
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
        <hr />
      </FECardWrapper>
    </div>
  )
}
