const express = require("express")
const app = express()


// request, response, but we shorten it
app.get("/userdata", (req, res) => {
    res.send({name: "zach", age: 20})
})
// app.put()
// app.post()
// app.delete()


app.listen(9000, () => {
    //You can run your server on whatever number, but probably best to stay below 9k. React is 3k, so don't use that. How about 4200
    console.log("The server is running on Port 9000")
})