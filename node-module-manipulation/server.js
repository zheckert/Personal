const express = require("express")
const app = express()

const users = [
    { name: "Zach", age: 30 },
    { name: "Fred", age: 65 },
    { name: "George", age: 34 },
    { name: "Giselle", age: 26 },
    { name: "Louise", age: 34 },
    { name: "Bruno", age: 14 },
    { name: "Gertrude", age: 45 },
    { name: "YES", age: 45 },
    { name: "test", age: 45 },
]
// request, response, but we shorten it
app.get("/users", (req, res) => {

    res.send(users)
})
// app.put()
// app.post()
// app.delete()


app.listen(9000, () => {
    //You can run your server on whatever number, but probably best to stay below 9k. React is 3k, so don't use that. How about 4200
    console.log("The server is running on Port 9000")
})