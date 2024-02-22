import { readFile } from 'fs/promises'

export default async (req, res) => {
    let existingData = await readFile('./src/data/FullEventList.json', 'utf-8')
    res.send(existingData)
    console.log("full list data sent")
}

