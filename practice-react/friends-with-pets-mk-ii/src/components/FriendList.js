import React from "react"
import {Friend} from "./Friend"
import {data} from "./data"

export const FriendList = () => {

    const friendTest = data.map(friend => <Friend name={friend.name} age={friend.age} petData={friend.pets}/>)

    return(
        <div>
            {friendTest}
        </div>
    )
}