import React from "react"
import testImg from "./other/test-img.jpg"

//3 columns? Need to determine best way to display content + implement

export const Body = () => {
    return(
        <>
        <div className="bodyData">
            <div className="bodyContent">
                <img className="imageTest" src={testImg} alt="This is just a test"/>
                <img className="imageTest" src={testImg} alt="This is just a test"/>
                <img className="imageTest" src={testImg} alt="This is just a test"/>
            </div>
            <div className="bodyContent">
                <img className="imageTest" src={testImg} alt="This is just a test"/>
                <img className="imageTest" src={testImg} alt="This is just a test"/>
                <img className="imageTest" src={testImg} alt="This is just a test"/>
            </div>
            <div className="bodyContent">
                <img className="imageTest" src={testImg} alt="This is just a test"/>
                <img className="imageTest" src={testImg} alt="This is just a test"/>
                <img className="imageTest" src={testImg} alt="This is just a test"/>
            </div>
        </div>
        
        </>
    )
}