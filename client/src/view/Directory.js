import React, { useState } from 'react'
import { Link } from 'react-router-dom';

// Data
import axios from 'axios'
import { useQuery } from "react-query";
import { useWPDataStore } from '../api/store'
import MapBox from '../api/MapBox';

// Stylesheets
import { FilterCard, CardBtn, Results, PageBreakAlt } from '../style/Components';
import { FilterWrapper, MapWrap } from '../style/Wrapper';

// Assets
import OTLogo from '../asset/img/OTLogo.png'
import FilteredBanner from '../model/FilteredBanner';
import AltTitleCard from '../model/AltTitleCard';
import PageBreakOne from '../asset/img/page_break_one.png'

export default function Directory() {
  const [filtered, setFiltered] = useState('all')
  const WPData = useWPDataStore(state => state.someData)
  const addWPData = useWPDataStore(state => state.addData)
  let mapData = []

  function useBusiness() {
    return useQuery("posts", async () => {
      const { data } = await axios.get(
        "https://oldetownarvada.org/wp-json/wp/v2/businessdirectory/"
      );
      addWPData(data)
    });
  }
  // TODO this doesnt work in a useEffect, debug
  useBusiness()

  function filteredResults(data, keys) {
    const newArr = []
    for (let i = 0; i < data.length; i++) {
      if (data[i].categories[0] === keys) {
        newArr.push(data[i])
      }
    }
    return results(newArr)
  }

  function results(data) {
    try {
      mapData.push(data)
      let values = data.map((bus, index) => (
        <Link to={`/directory/${index}`} key={bus.id} >
          <strong>
            {bus.title.rendered}
            <br />
            {bus.acf.phone_number}
          </strong>
          <br /> </Link >
      ))
      return values
    } catch (error) {
      console.error(error)
    }
  }

  function FilterText(key) {
    switch (key) {
      case 'food':
        return "Food & Drink"
      case 'beauty':
        return "Beauty & Wellness"
      case 'retail':
        return "Retail"
      case 'services':
        return "Services"
      case 'orgs':
        return "Organization"
      case 'parking':
        return "Parking"
      default:
        break;
    }
  }

  return (
    <>
      {/* TODO add feature to expand card imgages when active */}
      <div>
        <PageBreakAlt>
          {/* TODO Adjust the size of the pagebreaks */}
          <img src={PageBreakOne} alt="Page Break" />
        </PageBreakAlt>
        <AltTitleCard name='Directory' styles='aBlue' />
      </div>
      <FilterWrapper>
        <FilterCard onClick={() => setFiltered('food')} >
          <img src={OTLogo} alt="" />
          <CardBtn>
            <div className='dBlue'>
              Food & Drink
            </div>
          </CardBtn>
        </FilterCard>
        <FilterCard onClick={() => setFiltered('beauty')} >
          <img src={OTLogo} alt="" />
          <CardBtn>
            <div className='dTan'>
              Beauty & Wellness
            </div>
          </CardBtn>
        </FilterCard>
        <FilterCard onClick={() => setFiltered('retail')} >
          <img src={OTLogo} alt="" />
          <CardBtn>
            <div className='dGreen'>
              Retail
            </div>
          </CardBtn>
        </FilterCard>
        <FilterCard onClick={() => setFiltered('services')} >
          <img src={OTLogo} alt="" />
          <CardBtn>
            <div className='dRed'>
              Services
            </div>
          </CardBtn>
        </FilterCard>
        <FilterCard onClick={() => setFiltered('orgs')} >
          <img src={OTLogo} alt="" />
          <CardBtn>
            <div className="dPurple">
              Organization
            </div>
          </CardBtn>
        </FilterCard>
        <FilterCard onClick={() => setFiltered('parking')} >
          <img src={OTLogo} alt="" />
          <CardBtn>
            <div className="dOrange">
              Parking
            </div>
          </CardBtn>
        </FilterCard>
      </FilterWrapper>
      {filtered === 'all'
        ? null
        : <FilteredBanner text={FilterText(filtered)} />
      }
      <Results>
        {
          filtered === 'all' ?
            results(WPData)
            : null
        }
        {
          filtered === 'food' ?
            filteredResults(WPData, 20)
            : null
        }
        {
          filtered === 'beauty' ?
            filteredResults(WPData, 21)
            : null
        }
        {
          filtered === 'retail' ?
            filteredResults(WPData, 22)
            : null
        }
        {
          filtered === 'services' ?
            filteredResults(WPData, 23)
            : null
        }
        {
          filtered === 'orgs' ?
            filteredResults(WPData, 24)
            : null
        }
        {
          filtered === 'parking' ?
            filteredResults(WPData, 25)
            : null
        }
      </Results>
      <MapWrap>
        <MapBox data={mapData[0].map((data, i) => {
          return (
            { key: data?.title.rendered, lat: Number(data.acf?.latitude), lng: Number(data.acf?.longitude) }
          )
        })}>
        </MapBox>
      </MapWrap>
    </>
  )
}