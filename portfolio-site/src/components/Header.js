import React from "react"
import logo from "./other/logo-test.png"
import name from "./other/name2.png"
import linkedIn from "./other/linkedIn.png"
import gitHub from "./other/gitHub.png"

//Need to replace "EMAIL ME" with a functional React form.
//When I move to grayscale, I could have an animation style that moves onto items when I hover to add a splash of color, etc.

export const Header = () => {
    return(
        <div className="headerPosition">
            <div className="headerData">
                <div className="logo">
                    <img width="95%" height="95%" src={logo} alt="Logo"/>
                </div>
                <div className="notLogo">
                    <div className="nameBackground">
                        <img className="center" height="40"src={name} alt="Name"/>
                    </div>
                    <div className="info-alt">
                        <div>
                            <a href="mailto:zach@zachheckert.com">EMAIL ME!</a>
                        </div>
                        <div>
                            <a href="tel:18013195001:">+1-801-319-5001</a>
                        </div>
                        <div>
                            <a href="https://github.com/zheckert" rel="noopener noreferrer" target="_blank"><img className="iconAlign" height="20"src={linkedIn} alt="LinkedIn icon"/></a>
                        </div>
                        <div>
                            <a href="https://www.linkedin.com/in/zach-heckert-73932766/" rel="noopener noreferrer" target="_blank"><img className="iconAlign" height="20"src={gitHub} alt="GitHub icon"/></a>
                        </div>
                    </div>
                    <div className="info">
                        <div>
                            FULL STACK
                        </div>
                        <div>
                            VOICEOVER
                        </div>
                        <div>
                            DESIGN
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}