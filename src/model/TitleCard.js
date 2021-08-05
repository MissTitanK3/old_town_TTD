import React from 'react'
import { AbsTitleWrap } from '../style/Wrapper'

export default function TitleCard(props) {
  return (
    <AbsTitleWrap>
      <span dangerouslySetInnerHTML={{ __html: props.title }} />
      <div className={props.styles} />
    </AbsTitleWrap>
  )
}
