import React, { useState } from 'react'
import Calendar from 'react-calendar';
import { CalendarWrapper } from '../style/Wrapper'
import 'react-calendar/dist/Calendar.css';

export default function OldeCalendar() {
  const [value, onChange] = useState(new Date());
  console.log(value)

  const showEvents = () => {
    console.log('Clicked on a day to render a filtered list of events')
  }

  return (
    <CalendarWrapper>
      <Calendar
        onChange={onChange}
        value={value.toLocaleDateString()}
        onClickDay={showEvents}
      />
    </CalendarWrapper>
  )
}
