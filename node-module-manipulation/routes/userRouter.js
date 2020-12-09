const express =  require("express")
const userRouter = express.Router()
const { v4: uuid } = require("uuid");

const user = [
    { name: "Zach", age: 30, _id: uuid()},
    { name: "Fred", age: 65, _id: uuid()},
    { name: "George", age: 34, _id: uuid()},
    { name: "Zach", age: 123, _id: uuid()},
    { name: "Giselle", age: 26, _id: uuid()},
    { name: "Louise", age: 34, _id: uuid()},
    { name: "Zach", age: 67, _id: uuid()},
    { name: "Bruno", age: 14, _id: uuid()},
    { name: "Gertrude", age: 45, _id: uuid()},
    { name: "YES", age: 45, _id: uuid()},
    { name: "test", age: 45, _id: uuid()},
    { name: "Zach", age: 15, _id: uuid()},
    
]

userRouter.route("/")
    .get((req, res) => {
        res.send(user)
    })

    .post((req, res) => {
        //below not neccessary but helps us see
        const newUser = req.body
        newUser._id = uuid()
        user.push(newUser)
        res.send(`Successfully added ${newUser.name} to the database.`)
    })

userRouter.get("/:userId", (req, res) => {
    const userId = req.params.userId
    const foundUser = user.find(user => user._id === userId)
    res.send(foundUser)
})

userRouter.get("/search/name", (req, res) =>{
    const name = req.query.name
    const filteredUser = user.filter(user => user.name === name)
    res.send(filteredUser)
})

userRouter.delete("/:userId", (req, res) => {
    const userId = req.params.userId
    const userIndex = user.findIndex(user => user._id === userId)
    user.splice(userIndex, 1)
    res.send("Successfully removed user.")
})
///request and response
userRouter.put("/:userId", (req, res) => {
    const userId = req.params.userId
    const updateObject = req.body
    const userIndex = user.findIndex(user => user._id === userId )
    const updatedUser = Object.assign(user[userIndex], updateObject)
    res.send(updatedUser)
})

module.exports = userRouter