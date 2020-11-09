import React, {useState} from "react"

export const App = () => {

    const [color, setColor] = useState()

    const yolo = {backgroundColor: color}

    return(
        <div style={yolo}>
            <button onClick={()=> setColor("Red")}>Red</button>
            <button onClick={()=> setColor("Pink")}>Red</button>
            <button onClick={()=> setColor("Purple")}>Red</button>
            <button onClick={()=> setColor("Green")}>Red</button>
        </div>
    )
}