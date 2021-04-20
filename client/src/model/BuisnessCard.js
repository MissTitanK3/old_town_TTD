import React from 'react'
import { useWPDataStore } from '../api/store'
import shallow from 'zustand/shallow'
import { useParams } from 'react-router-dom'
import MapBox from '../api/MapBox'

export default function BuisnessCard() {
  const { id } = useParams()
  const WPData = useWPDataStore(state => state.someData[id], shallow)
  const updateDB = '<div>Please Update Database</div>'
  console.log(WPData)


  return (
    <div >
      <div dangerouslySetInnerHTML={{ __html: WPData?.title.rendered ? WPData.title.rendered : updateDB }} />
      <div dangerouslySetInnerHTML={{ __html: WPData?.acf.facebook ? WPData.acf.facebook : updateDB }} />
      <div dangerouslySetInnerHTML={{ __html: WPData?.acf.anchorfm ? WPData.acf.anchorfm : updateDB }} />
      <div dangerouslySetInnerHTML={{ __html: WPData?.acf.pinterest ? WPData.acf.pinterest : updateDB }} />
      <div dangerouslySetInnerHTML={{ __html: WPData?.acf.business_hours ? WPData.acf.business_hours : updateDB }} />
      <div dangerouslySetInnerHTML={{ __html: WPData?.acf.instagram ? WPData.acf.instagram : updateDB }} />
      <div dangerouslySetInnerHTML={{ __html: WPData?.acf.phone_number ? WPData.acf.phone_number : updateDB }} />
      <div dangerouslySetInnerHTML={{ __html: WPData?.acf.twitter ? WPData.acf.twitter : updateDB }} />
      <div dangerouslySetInnerHTML={{ __html: WPData?.acf.website ? WPData.acf.website : updateDB }} />
      <div dangerouslySetInnerHTML={{ __html: WPData?.acf.youtube ? WPData.acf.youtube : updateDB }} />
      <div dangerouslySetInnerHTML={{ __html: WPData?.excerpt.rendered ? WPData.excerpt.rendered : updateDB }} />
      <div dangerouslySetInnerHTML={{ __html: WPData?.excerpt.rendered ? WPData.excerpt.rendered : updateDB }} />
      <img src={WPData?.acf.images.sizes.large} alt={WPData?.acf.images.filename} />
      <MapBox />
    </div >
  )
}
