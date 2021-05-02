/* eslint-disable no-lone-blocks */
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { CalendarWrapper, EventsDetailsWrap } from '../style/Wrapper';
import 'react-calendar/dist/Calendar.css';
import { DateCard, DateDetails } from '../style/Components'
// Data
import axios from 'axios'
import { useQuery } from "react-query";
import { useWPEventStore } from '../api/store'


export default function OldeCalendar() {
  const [value, onChange] = useState(new Date());
  const [filteredData, setFilteredData] = useState([])
  const WPEvent = useWPEventStore(state => state.someData)
  const addWPEvent = useWPEventStore(state => state.addData)
  const re = /((\S)+\b)/g

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

  const showEvents = () => {
    // TODO Click twice to function
    let preCheck = []
    WPEvent.forEach(e => {
      let selectedDate = value.toString().split(re)
      let checkDate = e.acf.event_date_long.toString().split(re)
      selectedDate = selectedDate[4] + selectedDate[7]
      checkDate = checkDate[4] + checkDate[7]
      if (selectedDate === checkDate) {
        preCheck.push(e)
      } else {
        console.log('nope')
      }
    })
    setFilteredData([preCheck])
    console.log(filteredData)
  };

  return (
    <>
      <h2>{value.toString().slice(3, 15)}</h2>
      <CalendarWrapper>
        <Calendar
          onChange={onChange}
          value={value}
          onClickDay={showEvents}
          calendarType='US'
        />
      </CalendarWrapper>
      {/* Feed the filtered data */}
      <div className='details'>
        {
          filteredData
            ?
            filteredData?.map((event, key) => {
              console.log(event[key], key)
              let dateInfo = event?.acf?.event_date_long.split(re)
              console.log(dateInfo)
              return (
                <EventsDetailsWrap key={key}>
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
              )
            })
            :
            WPEvent.map((event, key) => {
              let dateInfo = event.acf.event_date_long.split(re)
              return (
                <EventsDetailsWrap key={key}>
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
              )
            })
        }
      </div>
    </>
  );
}
