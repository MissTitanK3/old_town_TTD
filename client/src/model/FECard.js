import React from 'react'
import { FECards, FECardsDetails } from '../style/Components'

export default function FECard(props) {
  return (
    <FECards>
      <img src={props.img} alt={props.alt} />
      <FECardsDetails>
        <span>{props.title}</span>
        <p> {props.dates} </p>
      </FECardsDetails>
      {/* TODO Is this okay, or full width on bottom mandatory */}
      <div className={props.accent} />
    </FECards>
  )
}
