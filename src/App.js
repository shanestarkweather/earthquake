import React from 'react'
import './App.css';
import EventList from './components/EventList';
import Header from './components/Header'
import { Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
     <Header />
     <Route path='/' exact render={() => {
        return <EventList/> 
     }}/>
    </div>
  );
}

export default App;
