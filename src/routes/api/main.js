import express from 'express'
const app = express()

app.get('/'), (req, res) => {
    res.send({"message": "Hello World!"})
    console.log("full list data sent")
}

module.exports = app