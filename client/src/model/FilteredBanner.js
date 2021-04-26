import React from 'react'
import { FilterBanner } from '../style/Components'

export default function FilteredBanner(props) {

  function bannerColor(key) {
    console.log(key)
    switch (key) {
      case 'Food & Drink':
        return "dBlue"
      case 'Beauty & Wellness':
        return "dTan"
      case 'Retail':
        return "dGreen"
      case 'Services':
        return "dRed"
      case 'Organization':
        return "dPurple"
      case 'Parking':
        return "dOrange"
      default:
        break;
    }

  }
  console.log(bannerColor(props.text))
  return (
    <div>
      {/* TODO figure out why classname isnt working in components stylesheet */}
      <FilterBanner className='midOrange' >
        <div className={bannerColor(props.text)}>
          <h2>{props.text}</h2>
        </div>
      </FilterBanner>
      {/* <FilterBanner className={bannerColor(props.text)} ><h2>{props.text}</h2></FilterBanner> */}
    </div>
  )
}
