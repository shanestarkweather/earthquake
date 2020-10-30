import React from 'react'
import GoogleMapReact from 'google-map-react'
import './Map.css'

const AnyReactComponent = ({ text }) => <div>{text}</div>;


const Map = ({ earthquake }) => {
  if (!earthquake.latitude) {
  return null
  }
  return <div className="map">
    <h2 className="map-h2">{earthquake.title}</h2>

    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GMAP_API_KEY }}
        center={{ lat: parseInt(earthquake.latitude), lng: parseInt(earthquake.longitude) }}
        defaultZoom={10}
      >
        <AnyReactComponent
            lat={parseInt(earthquake.latitude)}
            lng={parseInt(earthquake.longitude)}
            text={earthquake.title}
          />
      </GoogleMapReact>
    </div>
  </div>
}


export default Map