import React from "react"
import {Pet} from "./Pet"

export const Friend = (props) => {

    const pets = props.pet.map(pet => <Pet name={pet.name} breed={pet.breed}/>)

    return(
        <div>
            <p>{props.name}</p>
            <p>{props.age}</p>
            <p>{pets}</p>
        </div>
    )
}