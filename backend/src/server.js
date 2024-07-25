const dotenv = require("dotenv")
dotenv.config()
const http = require("http")
const express = require("express")
const cors = require("cors")
const router = require("./routes")
const errorHandler = require('./middlewares/ErrorHandler')
const app = express()
const server = http.createServer(app)

const PORT = process.env.PORT || 8080
app.use(cors('*'))
app.use(express.json())
app.use(router)
app.use(errorHandler)

server.listen(PORT, () => {
    console.log(` SERVER RUNNING ON PORT - ${PORT}`)
})

module.exports = {server}
