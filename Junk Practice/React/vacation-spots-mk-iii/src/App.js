import React from "react"
import {vacationSpots} from "./data/vacationSpots"
import {Stuff} from "./data/Stuff"

export const App = () => {

    const mapperoni = vacationSpots.map( spots => <Stuff place={spots.place} price={spots.price} timeToGo={spots.timeToGo}/>)

    return(
        <div>{mapperoni}</div>
    )
}