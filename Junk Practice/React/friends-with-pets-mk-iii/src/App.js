import React from "react"
import {friends} from "./data"
import {Friend} from "./components/Friend"

export const App = () => {

    let chumpelstiltskin = friends.map(chump => <Friend name={chump.name} age={chump.age} pet={chump.pets}/>)

    return(
        <div>
            <p>{chumpelstiltskin}</p>
        </div>
    )
}