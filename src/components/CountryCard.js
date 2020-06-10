import React from "react"

function CountryCard( props ){
    return(
        <div>
            <h3>{props.data.name}</h3>
            <p> Capital: {props.data.capital}</p>
            <p> Area: {props.data.area} km^2?</p>
        </div>
    )
}

export default CountryCard;