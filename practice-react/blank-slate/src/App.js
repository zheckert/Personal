import React from "react"
import {Counter} from "./stuff/Counter"
import {ColorChanger} from "./stuff/ColorChanger"

export const App = () => {
    return(
        <>
        <div className="boundary">
            <Counter />
        </div>
        <div className="boundary">
            <ColorChanger />
        </div> 
        </>
    )
}