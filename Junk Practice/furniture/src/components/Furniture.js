import React from "react"

function Furniture(props){

    return(
        <p>{props.pieceOfFurniture.map(pieceOfFurniture => <div>{pieceOfFurniture}</div>)}</p>
    )
}

export default Furniture