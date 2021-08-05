import React from 'react'
import { FECards, FECardsDetails } from '../style/Components'

export default function FECard(props) {
  return (
    <FECards>
      <div className={props.bColor}>
        <img src={props.img} alt={props.alt} />
        <FECardsDetails>
          <span>{props.title}</span>
          <p> {props.dates} </p>
        </FECardsDetails>
        <div className={props.accent} />
      </div>
    </FECards>
  )
}
