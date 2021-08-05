import React from 'react'
import { Link } from 'react-router-dom'

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
          <Link to={props.dest}>
            <GreenBtn>
              {props.btn}
            </GreenBtn>
          </Link>
        </EventDetails>
      </EventsWrap>
    </div>
  )
}
