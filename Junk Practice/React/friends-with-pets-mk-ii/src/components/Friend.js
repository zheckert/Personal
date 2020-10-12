import React from "react"
import {Pets} from "./Pets"

export const Friend = (props) => {

    const petMap = props.petData.map(pet => <Pets name={pet.name} breed={pet.breed}/>)

    return(
        <div>
            <h3>{props.name}</h3>
            <h3>{props.age}</h3>
            <p>{petMap}</p>
        </div>
    )
}