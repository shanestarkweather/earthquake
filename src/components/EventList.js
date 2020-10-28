import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

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
		<div>
			{earthquakes.map((earthquake) => (
				<Link to={`/detail/${earthquake.id}`} key={earthquake.id}>
					<p>
						Magnitude {earthquake.properties.mag}
						{earthquake.properties.place}
						{earthquake.properties.time}
					</p>
				</Link>
			))}
		</div>
	);
};

export default EventList;
