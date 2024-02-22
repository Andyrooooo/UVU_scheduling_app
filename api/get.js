import { readFile } from 'fs/promises'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const filePath = join(__dirname, '..', 'src', 'data', 'FullEventList.json')

export default async (req, res) => {
    const data = await readFile(filePath, 'utf8')
    res.send(data)
    console.log("full list data sent")
}

