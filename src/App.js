import React, { useState, useEffect } from 'react';
import './App.css';
import Axios from 'axios';
import CountryCard from './components/CountryCard';

function App() {
  const apiUrl ="https://restcountries.eu/rest/v2/all"
  const initialValue = []
  const [ countries , set_countries] = useState(initialValue)
  
  const getTheCountries = async () => {
    const response = await Axios.get(apiUrl)
    set_countries(response.data)
  }

  useEffect( ()=> {
    getTheCountries()
  },[])
  
  // google does not use useEffect
  // Wikipedia does not use useEffect
  //coolblue is using useEffect to get inital data


  return (
    <div className="App">
     <h1>Countries </h1>

    <button onClick={getTheCountries}> Get the countries</button>

      {countries.map( countryCard => {
        return (
          <CountryCard key={countryCard.alpha3Code} data={countryCard}/>
        )
      })}
    {/* {this afternoon: lifting the state: 1145} */}
    </div>
  );
}

export default App;
