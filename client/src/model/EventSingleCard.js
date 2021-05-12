import React from 'react'
import { useWPEventStore } from '../api/store'
import shallow from 'zustand/shallow'
import { Link, useParams } from 'react-router-dom'
import { EventSingleCardWrapper } from '../style/Wrapper'
import { EventBtn, EventDesc, EventDetailHeader, EventDetailPage, EventTitleCard, PageBreakAlt } from '../style/Components'
import PageBreakOne from '../asset/img/page_break_one.png'
import { height } from '@material-ui/system'

export default function EventSingleCard() {
  const { id } = useParams()
  const WPEvent = useWPEventStore(state => state.someData[id], shallow)
  console.log(WPEvent)


  return (
    <>
      <PageBreakAlt>
        {/* TODO Adjust the size of the pagebreaks */}
        <img src={PageBreakOne} alt="Page Break" />
      </PageBreakAlt>
      <EventSingleCardWrapper>
        <EventDetailHeader>
          <div>
            <h1>{WPEvent?.acf?.event_name}</h1>
            <span><strong>{WPEvent?.acf?.event_date_long}</strong></span>
            <br />
            <br />
            <br />
            <p><strong>Business Name: {WPEvent?.acf?.business_name}</strong></p>
            <p><strong>Address: {WPEvent?.acf?.address}</strong></p>
            <p><strong>Date: {WPEvent?.acf?.event_date_short}</strong></p>
            <p><strong>Time: {WPEvent?.acf?.event_date_short}</strong></p>
            <p><strong>Website: {WPEvent?.acf?.website}</strong></p>
          </div>
          <div>
            <img
              src={WPEvent?.acf?.event_image?.sizes.medium}
              alt={WPEvent?.acf?.event_image?.sizes.medium}
            />
          </div>
        </EventDetailHeader>
        <EventDesc>
          <h3>Event Description:</h3>
          <span>{WPEvent?.acf?.event_description}</span>
        </EventDesc>
        <EventDetailPage>
          <div>
            <EventTitleCard style={{
              position: 'relative',
              top: '-60px',
              left: '0',
              height: '71px'
            }} >
              <span>Event Details</span>
              <div className='aRed' />
            </EventTitleCard>
            <span><strong>{WPEvent?.acf?.event_date_long}</strong></span>
          </div>
          <div>
            <p><strong>Location: </strong>{WPEvent?.acf?.location}</p>
            <p><strong>Address: </strong>{WPEvent?.acf?.address}</p>
          </div>
        </EventDetailPage>
        <EventBtn>
          <Link to='/events-calendar' >VIEW FULL CALENDAR</Link>
        </EventBtn>
      </EventSingleCardWrapper>
    </>
  )
}
