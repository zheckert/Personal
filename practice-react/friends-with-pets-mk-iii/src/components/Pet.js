import React from "react"

export const Pet = (props) => {
    return(
        <div>
            <p>{props.name}</p>
            <p>{props.breed}</p>
        </div>
    )
}