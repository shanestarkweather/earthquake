import React from 'react'
import './App.css';
import EventList from './components/EventList';
import Header from './components/Header'
import { Route } from 'react-router-dom'
import EventDetails from './components/EventDetails';


function App() {
 
    
  return (
    <div className="App">
     <Header />
     <Route path='/' exact component={EventList}/>
     <Route path='/detail/:id' render={routerProps => <EventDetails match={routerProps.match}/>} />
    </div>
  );
}

export default App;
