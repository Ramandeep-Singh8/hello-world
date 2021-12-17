import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';

function App() {
   const [doeAge, setDoeAge] = useState(45)
  const [johnAge, setJohnAge] = useState(60)
  function ageCounter(name) {
    if (name === 'doe')
    {
      setDoeAge(doeAge=>doeAge+1)
    }
    if (name === 'john')
    {
      setJohnAge(johnAge=>johnAge+1)
      }
  }
   return (
    <div className="App">
      <h1>Doe, Jane</h1>
      <h3>Age: {doeAge}</h3>
      <h3>Hair Color: Black</h3>
      <button onClick={() => ageCounter('doe')}>Birthday Button for Jane Doe</button>
      <div className="App">
      <h1>Smith, John</h1>
      <h3>Age: {johnAge}</h3>
      <h3>Hair Color: Brown</h3>
      <button onClick={() => ageCounter('john')}>Birthday Button for John Smith</button>
      
    </div>
    </div>
    
  );
}
export default App;
