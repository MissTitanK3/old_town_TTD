import React from 'react'

// Stylesheet
import { EventDetails, EventImg, GreenBtn } from '../style/Components'
import { EventsWrap } from '../style/Wrapper'

export default function EventsCard(props) {
  return (
    <div>
      <EventsWrap >
        <EventImg >
          <div className={props.accent} />
          <img className={props.border} src={props.img} alt={props.alt} />
        </EventImg>
        <EventDetails>
          <div>
            <span>{props.title}</span>
          </div>
          <div>
            <p>{props.desc}</p>
          </div>
          <a href={props.link} target='_blank' rel='noreferrer'>
            <GreenBtn>
              {props.btn}
            </GreenBtn>
          </a>
        </EventDetails>
      </EventsWrap>
    </div>
  )
}
