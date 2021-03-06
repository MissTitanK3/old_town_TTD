/* eslint-disable no-lone-blocks */
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { Link } from 'react-router-dom';

// Data
// import axios from 'axios'
// import { useQuery } from "react-query";
import { useWPEventStore } from '../api/store'

// Stylesheet
import { CalendarWrapper, EventsDetailsWrap, EventsCalWrapper, OldeCalWrapper } from '../style/Wrapper';
import 'react-calendar/dist/Calendar.css';
import { DateCard, DateDetails } from '../style/Components'


export default function OldeCalendar() {
  const [value, onChange] = useState(new Date());
  const [filteredData, setFilteredData] = useState([])
  const WPEvent = useWPEventStore(state => state.someData)
  const re = /((\S)+\b)/g


  const showEvents = (date) => {
    let preCheck = []
    WPEvent.forEach(e => {
      let selectedDate = date.toString().split(re)
      let checkDate = e.acf.event_date_long.toString().split(re)
      selectedDate = selectedDate[4] + selectedDate[7]
      checkDate = checkDate[4] + checkDate[7]
      if (selectedDate === checkDate) {
        preCheck.push(e)
      }
    })
    setFilteredData([preCheck])
  };
  console.log(value)
  return (
    <OldeCalWrapper>
      <div>
        <h5>{value.toDateString()}</h5>
        <hr />
      </div>
      <EventsCalWrapper>
        <CalendarWrapper>
          <Calendar
            className='calendar'
            onChange={onChange}
            value={value}
            onClickDay={showEvents}
            calendarType='US'
            showNeighboringMonth={false}
            prev2Label={false}
            next2Label={false}
          />
        </CalendarWrapper>
        <div className='details'>
          {
            filteredData.length > 0
              ?
              filteredData[0]?.map((event, key) => {
                let dateInfo = event?.acf?.event_date_long.split(re)
                return (
                  <Link to={`/events-card/${key}`} key={event.id}>
                    <EventsDetailsWrap>
                      <DateCard>
                        <h4>{dateInfo ? dateInfo[4].toString().toUpperCase() : null}</h4>
                        <br />
                        <span>{dateInfo ? dateInfo[7] : null}</span>
                        <br />
                        <p>{dateInfo ? dateInfo[1] : null}</p>
                      </DateCard>
                      <DateDetails>
                        <h3>{event?.acf?.event_name}</h3>
                        <br />
                        <div>
                          <span>&nbsp;{event?.acf?.event_date_short.slice(-13).trim()}</span>
                          <p >{event?.acf?.location}</p>
                        </div>
                      </DateDetails>
                    </EventsDetailsWrap>
                    <hr />
                  </Link>
                )
              })
              :
              WPEvent.map((event, key) => {
                let dateInfo = event.acf.event_date_long.split(re)
                return (
                  <Link to={`/events-card/${key}`} key={event.id}>
                    <EventsDetailsWrap>
                      <DateCard>
                        <h4>{dateInfo[4].toString().toUpperCase()}</h4>
                        <br />
                        <span>{dateInfo[7]}</span>
                        <br />
                        <p>{dateInfo[1]}</p>
                      </DateCard>
                      <DateDetails>
                        <h3>{event?.acf?.event_name}</h3>
                        <br />
                        <div>
                          <span>&nbsp;{event?.acf?.event_date_short.slice(-13).trim()}</span>
                          <p >{event?.acf?.location}</p>
                        </div>
                      </DateDetails>
                    </EventsDetailsWrap>
                    <hr />
                  </Link>
                )
              })
          }
        </div>
      </EventsCalWrapper>
    </OldeCalWrapper>
  );
}
