import React from "react"
import testImg from "./other/test-img.jpg"
import {BodyContent} from "./BodyContent"

//3 columns? Need to determine best way to display content + implement

//Add about and/or skill proficiencies? photoshop, illustrator, css, html, js, react, ajax, axios, 

export const Body = () => {
    return(
        <>
        <div>
            Development Voiceover Design About
        </div>
        <div className="bodyData">
            <div className="bodyContent">
                <BodyContent 
                    title={"Weapon Randomizer"}
                    bodyText={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
                />
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