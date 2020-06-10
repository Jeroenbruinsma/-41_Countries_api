import React from "react"

function CountryCard( props ){
    console.log("inside the card, (child) props:", props)

    const buttonHandler = (event) => {
        console.log("buttonHandler in the child is called")
        props.sayHelloInParent("hello from the child")
    }


    return(
        <div>
            <h3>{props.data.name}</h3>
            <p> Capital: {props.data.capital}</p>
            <p> Area: {props.data.area} km^2?</p>
            <button onClick={buttonHandler}> click me to say hello</button>
        </div>
    )
}

export default CountryCard;