import React from 'react'
import GoogleMapReact from 'google-map-react'
import './Map.css'
import EventDetails from './EventDetails'


const Map = ({ earthquake }) => (
  <div className="map">
    <h2 className="map-h2">{earthquake.title}</h2>

    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GMAP_API_KEY }}
        defaultCenter={{ lat: 39.8283, lng: 98.5795 }}
        defaultZoom={6}
      >
       
      </GoogleMapReact>
    </div>
  </div>
)

export default Map