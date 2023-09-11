import React, { useState } from "react";
import data from './data.js';
import Tours from './components/Tours';

const App = () => {
  const [tours, setTours] = useState(data);
  
  function removeTour(id) {
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  }

  function removeallTour(id) {
    const newTour = tours.filter(tour => tour.id === id);
    setTours(newTour);
  }

  if (tours.length === 0) { 
    return (
      <div className="refresh">
        <h2>No Tours Left</h2>
        <button className="btn-white" onClick={() => setTours(data)}>
          Refresh
        </button>
      </div>
    );
  }

  return (
    <div className="App">
      <Tours tours={tours} removeTour={removeTour} removeallTour={removeallTour}/>
    </div>
  )
};

export default App;
