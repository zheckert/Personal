import React from "react"

export const Stuff = (props) => {
    let dollaBills = props.price

    if (dollaBills < 500) {
        dollaBills = "$"
    } else if (dollaBills > 500 && dollaBills < 1000) {
        dollaBills = "$$"
    } else {
        dollaBills = "$$$"
    }

    return(
        <div>
            <p>{props.place}</p>
            <p>{`(Budget required: ${dollaBills}) ${props.price}`}</p>
            <p>{props.timeToGo}</p>
        </div>
    )
}