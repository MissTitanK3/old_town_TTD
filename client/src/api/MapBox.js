import React, { useState } from 'react'
import ReactMapGl, { Marker } from 'react-map-gl'
import RoomIcon from '@material-ui/icons/Room';

import './Map.css'

const token = 'pk.eyJ1Ijoib2xkZXRvd25kZXYiLCJhIjoiY2tucGVpemN6MDF3bTJ2cXAwcWN6ajN0MCJ9.xuXc-tBveJGQ3te0rLZb_A'


export default function MapBox(props) {
  const locations = props.data
  const [viewport, setViewport] = useState({
    latitude: 39.79915,
    longitude: -105.08069,
    width: "50vw",
    height: "50vh",
    zoom: 18
  })
  return (
    <div className='map-container' >
      <ReactMapGl
        {...viewport}
        mapboxApiAccessToken={token}
        onViewportChange={viewport => setViewport(viewport)}
        mapStyle='mapbox://styles/oldetowndev/cknpeppgj3m1217l8qzvk5k7v'
      >
        {locations ?
          locations?.map(loc => (
            <Marker className='markers' key={loc.key} latitude={loc.lat} longitude={loc.lng} >
              <RoomIcon fontSize='large' />
            </Marker>
          ))
          : <h3>Loading...</h3>}
      </ReactMapGl>
    </div>
  )
}
