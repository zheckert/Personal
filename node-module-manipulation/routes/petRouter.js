const express = require("express");
const petRouter = express.Router()
const { v4: uuid } = require("uuid");

const pet = [
  { name: "Ozzie", type: "parrot", _id: uuid() },
  { name: "Louie", type: "parrot", _id: uuid() },
  { name: "Papa Gallo", type: "parrot", _id: uuid() },
  { name: "Luke", type: "dog", _id: uuid() },
  { name: "Dickie", type: "rat", _id: uuid() },
]

petRouter.route("/")
  .get((req, res) => {
    res.send(pet)
  })
  .post((req, res) => {
    const newPet = req.body
    newPet._id = uuid()
    pet.push(newPet)
    res.send(`Successfully added ${newPet.name} to the database.`)
  })

module.exports = petRouter
