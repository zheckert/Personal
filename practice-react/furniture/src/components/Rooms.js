import React from "react"
import rooms from "./furnitureList"
import Furniture from "./Furniture"

function Rooms(){

    const mappedRooms = rooms.map(room => <div><p>{room.name}</p> <p><Furniture pieceOfFurniture = {room.furniture}/></p></div>)

    return(
        <div>
            <p>{mappedRooms}</p>
        </div>
    )
        
}

export default Rooms