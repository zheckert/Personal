import React from "react"
import "./index.css"
import {Header} from "./components/Header"
import {Body} from "./components/Body"
import {Footer} from "./components/Footer"

export const App = () => {
    return(
        <>
        <div>
            <Header />
        </div>
        <div>
            <Body />
        </div>
        <div>
            <Footer/>
        </div>
        </>
    )
}
