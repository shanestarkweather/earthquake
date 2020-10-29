import React, { useState, useEffect } from 'react';
import Moment from 'react-moment';
import './EventDetails.css';

const EventDetails = ({ match }) => {
	const [earthquake, setEarthquake] = useState({});
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
		</main>
	);
};

export default EventDetails;
