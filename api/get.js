import { readFile } from 'fs/promises';
import { join } from 'path';

const filePath = join(__dirname, '..', 'src', 'data', 'FullEventList.json');

export default async (req, res) => {
    const data = await readFile(filePath, 'utf8')
    res.send(data)
    console.log("full list data sent")
}

