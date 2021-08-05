import React from 'react'
import { Link } from 'react-router-dom'
import { CarouselCardWrapper } from '../style/Wrapper'

export default function CarouselCard(props) {
  return (
    <CarouselCardWrapper>
      <Link to={props.link}>
        <h2>{props.title}</h2>
        <img src={props.img} alt="" />
        <p>{props.desc}</p>
      </Link>
    </CarouselCardWrapper>
  )
}
