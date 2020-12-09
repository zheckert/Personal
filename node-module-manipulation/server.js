const express = require("express")
const app = express()

app.use(express.json())

app.use("/user", require("./routes/userRouter"))
app.use("/pet", require("./routes/petRouter"))

app.listen(9001, () => {
    //You can run your server on whatever number, but probably best to stay below 9k. React is 3k, so don't use that. How about 4200
    console.log("The server is running on Port 9001")
})
