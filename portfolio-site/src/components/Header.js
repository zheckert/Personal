import React from "react"
import logo from "./other/logo-test.png"
import name from "./other/name.png"
// import name2 from "./other/name-purp.png"
// import name3 from "./other/name-purp-alt.png"
//Need to export a new SVG and make sure it abides by the rules here: https://create-react-app.dev/docs/adding-images-fonts-and-files/


export const Header = () => {
    return(
        <>
        <div className="headerData">
            <div className="logo">
                <img width="150 px" height="150 px" src={logo} alt="Logo"/>
            </div>
            
            <div className="notLogo">
                
                <div className="nameBackground">
                {/* Zach Heckert  */}
                <img class="center" height="40"src={name} alt="Name"/>
                </div>
                
                <div className="personal">
                    <div>
                        zach@zachheckert.com
                    </div>
                    <div>
                        801-319-5001
                    </div>
                </div>

                <div className="skills">
                    <div>
                        Full-stack
                    </div>
                    <div>
                        Voiceover
                    </div>
                    <div>
                        Design
                    </div>
                </div>
                
                    <div className="social">
                        <div>
                            github icon
                        </div>
                        <div>
                            LinkedIn icon
                        </div>
                        <div>
                            Pinterest or something icon
                        </div>
                    </div>

                
            </div>

        </div>
        </>
    )
}