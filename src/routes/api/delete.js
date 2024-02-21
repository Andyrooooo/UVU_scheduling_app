import express from 'express'
const app = express()

import { writeFile } from 'fs/promises'
app.use(express.json({ limit: '50mb' })) 
app.use(express.urlencoded({ extended: true, limit: '50mb' })) 

app.get('/delete'), async (res) => {
    await writeFile('./src/data/FullEventList.json', JSON.stringify([]));
    res.send({"message": "data Removed part 2"})
    console.log("data Removed part 2")
}

module.exports = app