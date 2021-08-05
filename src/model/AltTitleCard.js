import React from 'react'
import { AltTitleWrap } from '../style/Wrapper'

export default function AltTitleCard(props) {
  return (
    <AltTitleWrap>
      {/* Figure out how to make the border not change when screen resizes */}
      {/* TODO Ask Mx about making it a non-responsive element */}
      <span>{props.name}</span>
      <div className={props.styles} />
    </AltTitleWrap>
  )
}
