import React from 'react'

// Assets
import EctTitleCard from '../model/EctTitleCard'
import PageBreakOne from '../asset/img/page_break_one.png'
import PiannoGirl from '../asset/img/pianno_girl.png'

// Stylesheet
import { Discover, PageBreakAlt } from '../style/Components'
import EventsCard from '../controller/EventsCard'
import { EventsCardWrapper } from '../style/Wrapper'
export default function Events() {
  return (
    <div>
      <PageBreakAlt>
        {/* TODO Adjust the size of the pagebreaks */}
        <img src={PageBreakOne} alt="Page Break" />
      </PageBreakAlt>
      <EctTitleCard name='Events' styles='aTeal' />
      <Discover>Want the latest info on what's happening in Olde Town? Find something for everyone, this serves as your 'what to do' hub!</Discover>
      <EventsCardWrapper>
        <EventsCard
          accent='aLime'
          border='bBlue'
          img={PiannoGirl}
          alt='Pianno Girl'
          title='EVENTS CALENDAR'
          desc="Planning an event in Olde Town? Tell us the details and we'll get your event added to the community calendar!"
          btn='GO TO CALENDAR'
        />
        <hr />
        <EventsCard
          accent='aBlue'
          border='bOr'
          img={PiannoGirl}
          alt='Pianno Girl'
          title='SUBMIT AN EVENT'
          desc="Planning an event in Olde Town?"
          btn='SUBMIT AN EVENT'
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
        />
        <hr />
        <EventsCard
          accent='aLOr'
          border='bBlue'
          img={PiannoGirl}
          alt='Pianno Girl'
          title='VENDOR REGISTRATION'
          desc="Want to register as a vendor? Click here to fill out the form!"
          btn='GO TO FORM'
        />
      </EventsCardWrapper>
      <div className="featured">
        featured events
      </div>
    </div>
  )
}
