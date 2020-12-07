const express =  require("express")
const userRouter = express.Router()
const { v4: uuid } = require("uuid");

const user = [
    { name: "Zach", age: 30, _id: uuid()},
    { name: "Fred", age: 65, _id: uuid()},
    { name: "George", age: 34, _id: uuid()},
    { name: "Giselle", age: 26, _id: uuid()},
    { name: "Louise", age: 34, _id: uuid()},
    { name: "Bruno", age: 14, _id: uuid()},
    { name: "Gertrude", age: 45, _id: uuid()},
    { name: "YES", age: 45, _id: uuid()},
    { name: "test", age: 45, _id: uuid()},
]

userRouter.get("/", (req, res) => {
    res.send(user)
})

userRouter.post("/", (req, res) => {
    //below not neccessary but helps us see
    const newUser = req.body
    newUser._id = uuid()
    user.push(newUser)
    res.send(`Successfully added ${newUser.name} to the database.`)
})

module.exports = userRouter