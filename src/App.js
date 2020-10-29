import React, { useState } from 'react'
import './App.css';
import EventList from './components/EventList';
import Header from './components/Header'
import { Route } from 'react-router-dom'
import EventDetails from './components/EventDetails';


function App() {
  const [time, setTime] = useState('hour');
	const [magnitude, setMagnitude] = useState('1.0');
    
  return (
    <div className="App">
     <Header setTime={setTime} setMagnitude={setMagnitude}/>
     <Route path='/' exact render={ () => (<EventList time={time} magnitude={magnitude}/>) } />
     <Route path='/detail/:id' render={routerProps => <EventDetails match={routerProps.match}/>} />
    </div>
  );
}

export default App;
