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

//temp spot for the below getter
petRouter.get("/:petId", (req, res) => {
  const petId = req.params.petId
  const foundPet = pet.find( pet => pet._id === petId)
  res.send(foundPet)
})

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

petRouter.get("/:petId", (res, req) => {
  const petId = req.params.petId
  const foundPet = pet.filter( pet => pet._id === petId)
  res.send(foundPet)
})

petRouter.get("/search/type", (req, res) => {
  const type = req.query.type
  const filteredPet = pet.filter( pet => pet.type === type)
  res.send(filteredPet)
})

petRouter.delete("/:petId", (req, res) => {
  const petId = req.params.petId
  const petIndex = pet.findIndex(pet => pet._id === petId)
  pet.splice(petIndex, 1)
  res.send("Pet deleted. You monster!")
})

petRouter.put("/:petId", (req, res) => {
  const petId = req.params.petId
  const updateObject = req.body
  const petIndex = pet.findIndex(pet => pet._id === petId)
  const updatedPet = Object.assign(pet[petIndex], updateObject)
  res.send(updatedPet)
})

module.exports = petRouter
