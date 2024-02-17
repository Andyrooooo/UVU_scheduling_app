import { readFile } from 'fs/promises'

export default async (req, res) => {
    const data = await readFile('./src/data/FullEventList.json', 'utf-8');
    res.send(data)
    console.log("data sent")
}