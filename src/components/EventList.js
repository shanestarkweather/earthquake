import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './EventList.css';
import Moment from 'react-moment';

const EventList = () => {
	const [earthquakes, setEarthquakes] = useState([]);
	useEffect(() => {
		const url =
			'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_hour.geojson';
		fetch(url)
			.then((res) => res.json())
			.then((json) => {
				setEarthquakes(json.features);
			})
			.catch(console.error);
	}, []);

	return (
		<div className='list'>
			<h2>Earthquakes above magnitude 1.0 within in the last hour:</h2>
			{earthquakes.map((earthquake) => (
				<Link to={`/detail/${earthquake.id}`} key={earthquake.id}>
					<div className='list-items'>
						<span className='list-details'>
							<h4>
								<Moment>{earthquake.properties.time}</Moment>
							</h4>
						</span>
						<span className='list-details'>
							<h4>{earthquake.properties.place}</h4>
						</span>
						<span className='list-details'>
							<h4>Magnitude: {earthquake.properties.mag}</h4>
						</span>
					</div>
				</Link>
			))}
		</div>
	);
};

export default EventList;
