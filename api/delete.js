import { writeFile } from 'fs/promises'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const filePath = join(__dirname, '..', 'src', 'data', 'FullEventList.json')

export default async (req, res) => {
    await writeFile(filePath, JSON.stringify([]));
    res.send({"message": "data Removed part 2"})
    console.log("data Removed part 2")
}