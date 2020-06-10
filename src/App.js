import React, { useState, useEffect } from 'react';
import './App.css';
import Axios from 'axios';
import CountryCard from './components/CountryCard';
import AddACountry from './components/AddACountry';

function App() {
  const apiUrl ="https://restcountries.eu/rest/v2/all"
  const initialValue = []
  const [ countries , set_countries] = useState(initialValue)
  
  const getTheCountries = async () => {
    const response = await Axios.get(apiUrl)
    set_countries(response.data)
  }

  useEffect( ()=> {
    // getTheCountries()
  },[])
  
  
  const sayHello = (data) => {
    console.log("This is the say hello function of app.js",data)
  }

  const addACountryToTheList = (name) => {
    console.log("new country??", name);

    set_countries([  ...countries,   {
                    name: name,
                    capital: "Unknown capital",
                    area: 10000,
                    alpha3Code: name,
                }
        ])
  }
  
  return (
    <div className="App">
     <h1>Countries </h1>

    <button onClick={getTheCountries}> Get the countries</button>

      {countries.map( countryCard => {
        return (
          <CountryCard  key={countryCard.alpha3Code} 
                        data={countryCard} 
                        sayHelloInParent={sayHello}
                        />
        )
      })}
      <AddACountry addACountryToTheList={addACountryToTheList}/>
    {/* {this afternoon: lifting the state: 1145} */}
    </div>
  );
}

export default App;
