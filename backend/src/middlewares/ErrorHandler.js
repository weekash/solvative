const CustomError = require("../utils/CustomError")

function errorHandler(err, req, res, next) {
    if (err instanceof CustomError) {
        res.status(err.statusCode).send({ statusCode: err.statusCode, error: err.message })
    } else {
        console.log(err)
        res.status(500).send({ statusCode: 500, error: "Server Error" })
    }
    next()
}


module.exports = errorHandler