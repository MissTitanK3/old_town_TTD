import React from 'react'
import { useWPEventStore } from '../api/store'
import shallow from 'zustand/shallow'
import { useParams } from 'react-router-dom'

export default function EventSingleCard() {
  const { id } = useParams()
  const WPEvent = useWPEventStore(state => state.someData[id], shallow)
  console.log(WPEvent)


  return (
    <div>
      <h1>Events Card</h1>
      <div>
        <p>{WPEvent.acf?.event_name}</p>
        <p>{WPEvent.acf?.event_date_long}</p>
      </div>
      <div>
        <p>{WPEvent.acf?.event_description}</p>
        <div>
          <img
            src={WPEvent.acf?.event_image?.sizes.medium}
            alt={WPEvent.acf?.event_image?.sizes.medium}
          />
          <p>VOLUNTEER</p>
        </div>
      </div>
      <div>
        <p>Event Details</p>
        <p>{WPEvent.acf?.event_date_long}</p>
        <div>
          <p>{WPEvent.acf?.location}</p>
          <p>{WPEvent.acf?.address}</p>
        </div>
        <p>view full calender btn</p>
      </div>
    </div>
  )
}
