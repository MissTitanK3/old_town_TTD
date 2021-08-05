import React from 'react'
import { EctTitleWrap } from '../style/Wrapper'

export default function EctTitleCard(props) {
  return (
    <EctTitleWrap className={props.bStyle}>
      <span>{props.name}</span>
      <div className={props.styles} />
    </EctTitleWrap>
  )
}