import React from 'react'
import { LCard } from '../style/Components'

export default function LongCard(props) {
  return (
    <LCard>
      <div className={props.accent}>
        <img src={props.img} alt={props.alt} />
      </div>
      <div className={props.mid} >
        <h2>{props.labeled}</h2>
      </div>
      <div className={props.accent} >
        <h3>{props.details}</h3>
      </div>
    </LCard>
  )
}
