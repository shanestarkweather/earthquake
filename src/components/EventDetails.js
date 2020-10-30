import React, { useState, useEffect } from 'react';
import Moment from 'react-moment';
import './EventDetails.css';
import Map from './Map'

const EventDetails = ({ match }) => {
	const [earthquake, setEarthquake] = useState({});
	const location = {
  address: '1600 Amphitheatre Parkway, Mountain View, california.',
  lat: 37.42216,
  lng: -122.08427,
}
	useEffect(() => {
		const url = `https://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/${match.params.id}.geojson`;
		fetch(url)
			.then((res) => res.json())
			.then((json) => {
				setEarthquake(json.properties.products.origin[0].properties);
			})
			.catch(console.error);
	}, []);
	return (
		<main>
			<div className='details'>
				Location: {earthquake.title}
				<br />
				Time: <Moment>{earthquake.eventtime}</Moment>
				<br />
				Depth: {earthquake.depth} km
				<br />
				Magnitude: {earthquake.magnitude}
				<br />
				Latitude: {earthquake.latitude}
				<br />
				Longitude: {earthquake.longitude}
				<br />
				<a
					href={`https://earthquake.usgs.gov/earthquakes/eventpage/${match.params.id}`}>
					Click for more details from the USGS
				</a>
			</div>
			<Map earthquake={earthquake} />
		</main>
	);
};

export default EventDetails;
