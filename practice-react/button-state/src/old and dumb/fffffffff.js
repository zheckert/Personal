import React, {useState} from "react"

export const App = () => {
    const [color, setColor] = useState()
    const sexy = {backgroundColor: color}
    
    return(
        <div  className="asdf"  style={sexy}>
            <div className="a">
                <button onClick={() => setColor("Black")}>Black</button>
                <button onClick={() => setColor("White")}>White</button>
            </div>
        </div>
        
    )
}