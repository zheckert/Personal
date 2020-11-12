import React from "react"
import {Counter} from "./stuff/Counter"
import {ColorChanger} from "./stuff/ColorChanger"
import { LegendaryWeaponRandomizer } from "./stuff/LegendaryWeaponRandomizer"
import { ToDo } from "./stuff/ToDo"

export const App = () => {
    return(
        <>
        <div className="boundary">
            <Counter />
        </div>
        <div className="boundary">
            <ColorChanger />
        </div> 
        <div className="boundary">
            <LegendaryWeaponRandomizer />
        </div> 
        <div className="boundary">
            <ToDo />
        </div>
        </>
    )
}