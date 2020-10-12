import React from "react"
import {vacationSpots} from "./components/vacationSpots"
import {Stuff} from "./components/Stuff"
import "./index.css"

function App(){

    const datus = vacationSpots.map(spots => <Stuff place={spots.place} price={spots.price} timeToGo={spots.timeToGo}/>)

    return(
        <div className="parent">
            {datus}
        </div>
    )
}

export default App