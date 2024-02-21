import data from './src/data/FullEventList.json'
import express from 'express'
const app = express()

app.get('/get'), (req, res) => {
    res.send(data)
    console.log("full list data sent")
}

module.exports = app