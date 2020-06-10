import React, { useState } from 'react'

export default function AddACountry(props) {
    const [newCountryName, set_newCountryName] = useState("")

    const inputHandler = (event) => {
        set_newCountryName(event.target.value)
    }

    const buttonHandler = () => {
        props.addACountryToTheList(newCountryName)
    }

    return (
        <div>
            <input value={newCountryName} onChange={inputHandler }/>
            <button onClick={buttonHandler}> add this country with the name {newCountryName}</button>


        </div>
    )
}
