import React from 'react'
import { useWPDataStore, useWPEventStore } from '../api/store'
import shallow from 'zustand/shallow'
import { useParams } from 'react-router-dom'

export default function EventSingleCard() {
  const { id } = useParams()
  const WPEvent = useWPEventStore(state => state.someData[id], shallow)
  const WPData = useWPDataStore(state => state.someData[id], shallow)
  console.log(WPEvent)
  console.log(WPData)
  return (
    <div>
      <h1>Events Card</h1>
      <div>
        <p>Title</p>
        <p>date</p>
      </div>
      <div>
        <p>description</p>
        <div>
          <p>img</p>
          <p>VOLUNTEER</p>
        </div>
      </div>
      <div>
        <p>Event Details</p>
        <p>long date</p>
        <div>
          <p>location</p>
          <p>address</p>
        </div>
        <p>view full calender btn</p>
      </div>
    </div>
  )
}
