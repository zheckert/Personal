import React from "react"

export const Pets = (props) => {
    return(
        <div>
            <h5>
                {props.name}
            </h5>
            <p>
                {props.breed}
            </p>
        </div>
    )
}