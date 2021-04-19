import React, { useState } from 'react'
import { useQuery } from "react-query";
import axios from 'axios'
import { useWPDataStore } from '../api/store'

export default function Directory() {
  const [filtered, setFiltered] = useState('all')
  const WPData = useWPDataStore(state => state.someData)
  const addWPData = useWPDataStore(state => state.addData)

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
    return data.map(bus => (
      <h3 key={bus.id}>{bus.title.rendered}</h3>
    )
    )
  }

  return (
    <>
      <button onClick={() => setFiltered('all')} >All</button>
      <button onClick={() => setFiltered('food')} >Food & Drink</button>
      <button onClick={() => setFiltered('beauty')} >Beauty & Wellness</button>
      <button onClick={() => setFiltered('retail')} >Retail</button>
      <button onClick={() => setFiltered('services')} >Services</button>
      <button onClick={() => setFiltered('orgs')} >Organization</button>
      <button onClick={() => setFiltered('parking')} >Parking</button>
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
      {/* TODO get googlemap api key */}
    </>
  )
}
