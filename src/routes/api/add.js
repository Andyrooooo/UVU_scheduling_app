import express from 'express'
const app = express()

import { readFile, writeFile } from 'fs/promises'

app.get('/delete'), async (req, res) => {
    // Read the existing content of FullEventList.json
    let existingData = await readFile('./src/data/FullEventList.json', 'utf-8');
    // let existingList = JSON.parse(existingData);

    // Update the list with new data
    const newList = req.body;
    existingData = [...newList];

    // Write the updated list back to FullEventList.json
    await writeFile('./src/data/FullEventList.json', JSON.stringify(existingData));
    console.log("part two done")
    res.send({"message": "part two done!"})
}

module.exports = app