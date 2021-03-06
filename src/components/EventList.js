import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './EventList.css';
import Moment from 'react-moment';
import Header from './Header'

const EventList = ({ time, setTime, magnitude, setMagnitude }) => {
	const [earthquakes, setEarthquakes] = useState([]);
	useEffect(() => {
		const url = `https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/${magnitude}_${time}.geojson`;
		fetch(url)
			.then((res) => res.json())
			.then((json) => {
				setEarthquakes(json.features);
			})
			.catch(console.error);
	}, [time, magnitude]);

	return (
		<div className='list'>
			<Header setTime={setTime} setMagnitude={setMagnitude} />
			<h2>
				Earthquakes above magnitude {magnitude} within in the last {time}:
			</h2>
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
							<h4>Magnitude: {earthquake.properties.mag?.toFixed(2)}</h4>
						</span>
					</div>
				</Link>
			))}
		</div>
	);
};

export default EventList;
