import React from 'react'
import { EctTitleWrap } from '../style/Wrapper'

export default function EctTitleCard(props) {
  return (
    <EctTitleWrap>
      {/* TODO Figure out how to make the border not change when screen resizes */}
      {/* TODO Ask Mx about making it a non-responsive element */}
      <span>{props.name}</span>
      <div className={props.styles} />
    </EctTitleWrap>
  )
}