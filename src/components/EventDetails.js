import React, { useState, useEffect } from 'react';

const EventDetails = ({ match }) => {
    const [earthquake, setEarthquake] = useState({})
    useEffect(() => {
        const url = `https://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/${match.params.id}.geojson`;
        fetch(url)
        .then ((res) => res.json())
        .then ((json) => {
            setEarthquake(json.properties.products.origin[0].properties);
        })
        .catch(console.error)
    }, [])
    return (
			<div>
				{earthquake.depth}km
				{earthquake.magnitude}
				{earthquake.title}
				{earthquake.latitude}
				{earthquake.longitude}
				<a href={`https://earthquake.usgs.gov/earthquakes/eventpage/${match.params.id}`}>More details from the USGS</a>
			</div>
		);
};

export default EventDetails;