import React from 'react'
import { AbsCard, AltBtn } from '../style/Components'
import { Link } from 'react-router-dom'


export default function AbstractCard(props) {
  return (
    <AbsCard>
      <img src={props.img} alt={props.alt} />
      <div className={props.bColor}>
        <span>{props.desc}</span>
        <Link to={props.path} >
          <AltBtn className='cardPosition'>{props.btnWds}  🡺</AltBtn>
        </Link>
        <div className={props.aColor}></div>
      </div>
    </AbsCard>
  )
}
