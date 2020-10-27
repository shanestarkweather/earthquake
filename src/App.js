import React from 'react'
import './App.css';
import EventList from './components/EventList';
import Header from './components/Header'


function App() {
  return (
    <div className="App">
     <Header />
     <EventList />
    </div>
  );
}

export default App;
