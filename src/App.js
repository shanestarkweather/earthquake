import React, { useState } from 'react'
import './App.css';
import EventList from './components/EventList';
import { Route } from 'react-router-dom'
import EventDetails from './components/EventDetails';


function App() {
  const [time, setTime] = useState('hour');
  const [magnitude, setMagnitude] = useState('1.0');
    
  return (
		<div className='App'>
			<div className='header'>
				<h1>
					<a href='/'>What's Shakin'?</a>
				</h1>
			</div>
			
			<Route
				path='/'
				exact
				render={() => <EventList time={time} setTime={setTime} magnitude={magnitude} setMagnitude={setMagnitude}/>}
			/>
			<Route
				path='/detail/:id'
				render={(routerProps) => <EventDetails match={routerProps.match} />}
			/>
		</div>
	);
}

export default App;
