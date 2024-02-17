
import { writeFile } from 'fs/promises'

export default async (req, res) => {
    await writeFile('./src/data/FullEventList.json', JSON.stringify([]));
    res.send({"message": "data Removed part 2"})
    console.log("data Removed part 2")
}