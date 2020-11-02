import React from "react"
import testImg from "./other/test-img.jpg"

export const BodyContent = (props) => {
    return(
        <div className="bodyContentClass">
            <div>
                <img className="imageTest" src={testImg} alt="This is just a test"/>
            </div>
            <div>
                <h2>
                    {props.title}
                </h2>
                <p>
                    {props.bodyText}
                </p>
            </div>
        </div>
    )
}