import React from "react"

export const Stuff = (props) =>{
    return(
        <div className="child">
            <p>{props.place}</p>
            <p>{props.price}</p>
            <p>{props.timeToGo}</p>
        </div>
    )
}