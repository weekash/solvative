const dotenv = require("dotenv")
dotenv.config()
const express = require("express")
const cors = require("cors")
const router =  require("./routes")
const errorHandler = require('./middlewares/ErrorHandler')
const app = express()

const PORT = process.env.PORT || 6000
app.use(cors('*'))
app.use(express.json())
app.use(router)
app.use(errorHandler)


app.listen(PORT,()=>{
    console.log(` SERVER RUNNING ON PORT - ${PORT}`)
})

