import React from "react"

export const Footer = () => {
    let date =  new Date().getFullYear();
    return(
    <div className="footerData">All Content © Zach Heckert {date}</div>
    )
}