//make a component that has several buttons that change the background using state.

import React, {useState} from "react"

export const App = () => {
    
    const [color, setColor] = useState("Blue")

    const vomitself = {backgroundColor: color}
    
    return(
        <div>
            <div style={vomitself}>
                <button onClick={() => setColor("Red")}>Red</button>
                <button onClick={() => setColor("Green")}>Green</button>
                <button onClick={() => setColor("Pink")}>Pink</button>
                <button onClick={() => setColor("Blue")}>Blue</button>
                <button onClick={() => setColor("White")}>White</button>
            </div>
        </div>
    )
}
