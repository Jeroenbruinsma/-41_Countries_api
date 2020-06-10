import React, { useState } from 'react'

export default function AddACountry(props) {
    const [newCountryName, set_newCountryName] = useState("")

    const inputHandler = (event) => {
        set_newCountryName(event.target.value)
    }

    const buttonHandler = () => {
        console.log("button clicked in the add a country component", newCountryName)
        props.addACountryToTheList(newCountryName)
    }

    console.log("what are my props??", props)
    return (
        <div>
            <input value={newCountryName} onChange={inputHandler }/>
            <button onClick={buttonHandler}> add this country with the name {newCountryName}</button>


        </div>
    )
}
