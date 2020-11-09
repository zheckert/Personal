import React, {useState} from "react"

export const App = () => {
      const [color, setColor] = useState()

      const vomitacious = {backgroundColor: color}
      return(
          <div style={vomitacious}>
            <button onClick={()=> setColor("Red")}>Red</button>
            <button onClick={()=> setColor("Yellow")}>Red</button>
            <button onClick={()=> setColor("Pink")}>Red</button>
            <button onClick={()=> setColor("Blue")}>Red</button>
          </div>
      )
}