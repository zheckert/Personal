import React from "react"

export const Pets = (props) => {
    return(
        <div>
            <h3>{props.name}</h3>
            <h4>{props.type}</h4>
        </div>
    )
}