import React, {useState} from "react"

export const ColorChanger = () => {
    
    const [color, setColor] = useState("Pink")
    const bg = {backgroundColor: color}

    //below doesn't work yet, please fix it!
    const previous = () => {
        setColor(prevColor => prevColor)
    }

    return(
        <div>
            <div style={bg} className="square">

            </div>

            <div>
                <button onClick={() => setColor("Red")}>Red</button>
                <button onClick={() => setColor("Yellow")}>Yellow</button>
                <button onClick={() => setColor("Blue")}>Blue</button>
                <button onClick={() => setColor("Chartreuse")}>Chartreuse</button>
                <button onClick={previous}>Last used color</button>
            </div>
        </div>
        

    )
}