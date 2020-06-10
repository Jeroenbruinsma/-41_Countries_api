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
    const smallAmountOfCountries = response.data
    smallAmountOfCountries.length = 10.
    const listOfCountriesWithCoronaPatients = smallAmountOfCountries.map( country => {
      const copyOfCountry = {...country}
      copyOfCountry.coronaPatietents = 0;
      return copyOfCountry
    })
    set_countries(listOfCountriesWithCoronaPatients)
  }

  useEffect( ()=> {
    getTheCountries()
  },[])
  
  
  const increasePatientCounter = (countryToChange) => {
    const updatedList = countries.map(country => {
      if(country.name === countryToChange){
        const copyOfCountry =  {...country}
        copyOfCountry.coronaPatietents = copyOfCountry.coronaPatietents + 1
        return copyOfCountry
      }
      return country
    })
    set_countries(updatedList)
  }

  const addACountryToTheList = (name) => {
    set_countries([  ...countries,   {
                    name: name,
                    capital: "Unknown capital",
                    area: 10000,
                    alpha3Code: name,
                    coronaPatietents: 0
                }
        ])
  }

  const sortedCountries = [...countries].sort( (a, b) => b.coronaPatietents - a.coronaPatietents  )
  
  return (
    <div className="App">
     <h1>Countries </h1>

    <button onClick={getTheCountries}> Get the countries</button>

      {sortedCountries.map( countryCard => {
        return (
          <CountryCard  key={countryCard.alpha3Code} 
                        data={countryCard} 
                        increasePatientCounter={increasePatientCounter}
                        />
        )
      })}
      <AddACountry addACountryToTheList={addACountryToTheList}/>
    {/* {this afternoon: lifting the state: 1145} */}
    </div>
  );
}

export default App;
