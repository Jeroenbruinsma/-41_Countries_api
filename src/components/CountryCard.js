import React from "react"

function CountryCard( props ){
    const buttonHandler = () => {
        props.increasePatientCounter(props.data.name)
    }
    
    return(
        <div>
            <h3>{props.data.name}</h3>
            <p> Capital: {props.data.capital}</p>
            <p> Area: {props.data.area} km^2?</p>
            <p> Amount of patients: {props.data.coronaPatietents}</p>
            <button onClick={buttonHandler}> add a patient</button>
        </div>
    )
}

export default CountryCard;