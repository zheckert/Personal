const express = require("express")
const app = express()
const morgan = require("morgan")

app.use(express.json())
app.use(morgan("dev")) //logs requests to console

app.use("/user", require("./routes/userRouter"))
app.use("/pet", require("./routes/petRouter"))

app.listen(9001, () => {
    console.log("The server is running on Port 9001")
})
