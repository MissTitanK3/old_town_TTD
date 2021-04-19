import React from 'react'
import { useWPDataStore } from '../api/store'
import shallow from 'zustand/shallow'

export default function BuisnessCard() {
  // pull data object from params
  // Pulls the data when I save this file, but refreshing the page cause error
  // saying that title is undefined. useEffect?
  const { title, acf, excerpt, _links } = useWPDataStore(state => state.someData[5], shallow)
  console.log(_links)
  const updateDB = '<div>Please Update Database</div>'


  return (
    <div >
      <div dangerouslySetInnerHTML={{ __html: title.rendered ? title.rendered : updateDB }} />
      <div dangerouslySetInnerHTML={{ __html: acf.facebook ? acf.facebook : updateDB }} />
      <div dangerouslySetInnerHTML={{ __html: acf.business_hours ? acf.business_hours : updateDB }} />
      <div dangerouslySetInnerHTML={{ __html: acf.instagram ? acf.instagram : updateDB }} />
      <div dangerouslySetInnerHTML={{ __html: acf.phone_number ? acf.phone_number : updateDB }} />
      <div dangerouslySetInnerHTML={{ __html: acf.twitter ? acf.twitter : updateDB }} />
      <div dangerouslySetInnerHTML={{ __html: acf.website ? acf.website : updateDB }} />
      <div dangerouslySetInnerHTML={{ __html: acf.youtube ? acf.youtube : updateDB }} />
      <div dangerouslySetInnerHTML={{ __html: excerpt.rendered ? excerpt.rendered : updateDB }} />
      {/* <div dangerouslySetInnerHTML={{ __html: _links[0] ? _links[0] : updateDB }} /> */}
      {/* <img src={featuredmedia} alt="" /> */}
      hi
    </div >
  )
}
