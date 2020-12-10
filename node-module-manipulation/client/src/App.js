import React, { useState, useEffect } from "react"
import axios from "axios"
import { Users } from "./components/Users"
import { Pets } from "./components/Pets"

export const App = () => {
    const [users, setUsers] = useState([])
    const [pets, setPets] = useState([])

    useEffect(() => {
        axios.get("/user")
            .then(res => setUsers(res.data))
            .catch(err => console.log(err))
        axios.get("/pet")
            .then(res => setPets(res.data))
            .catch(err => console.log(err))
    }, [])

    return(
        <>
        <div>
            { users.map(user => <Users {...user} key={user._id}/>) }
        </div>
        <div>
            { pets.map(pet => <Pets {...pet} key={pet._id}/>) }
        </div>
        </>
    )
}