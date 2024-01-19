import express from 'express'
import { readFile, writeFile } from 'fs/promises'
import cors from 'cors'

// import bodyParser from 'body-parser'
const app = express()
const port = 5175

app.use(cors())
app.use(express.json({ limit: '50mb' })) 
app.use(express.urlencoded({ extended: true, limit: '50mb' })) 

app.post('/add', async (req, res) => {
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
})

app.listen(port, () => {
    console.log(`server is listening at http://localhost:${port}`)
})   






































/* import express from 'express'

import { convertCSV2JSON, simulateMain } from './scripts/convertCSV2JSON.ts'

import bodyParser from 'body-parser'
const app = express()
const port = 5174
import cors from 'cors'
import multer from 'multer' 

app.use(cors())
app.use(bodyParser.json()) 
app.use(bodyParser.urlencoded({ extended: true })) 

const storage = multer.memoryStorage()
const upload = multer({ storage: storage})
let fileContents

app.get('/', async (req, res) => {
    console.log("hello")
    res.send("I am working") 
})

app.post('/convert', upload.single('file'), async (req, res) => {
    const uploadedFile = req.file
    
    
    if (uploadedFile) {
        fileContents = uploadedFile.buffer
        await convertCSV2JSON(fileContents)
        await simulateMain()
    }
    
   console.log("processing done")
})

app.listen(port, () => {
    console.log(`server is listening at http://localhost:${port}`)
})    */



/* /* eslint-disable @typescript-eslint/no-var-requires */
/* const express = require('express');
// const { convertCSV2JSON, simulateMain } = require('./scripts/convertCSV2JSON.ts');
const bodyParser = require('body-parser');
const app = express();
const port = 5174;
const cors = require('cors');
const multer = require('multer');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
let fileContents;

app.get('/', async (req, res) => {
    console.log("hello");
    res.send("I am working");
});

app.post('/convert', upload.single('file'), async (req, res) => {
    const uploadedFile = req.file;

    if (uploadedFile) {
        fileContents = uploadedFile.buffer;
        const { convertCSV2JSON, simulateMain } = require('./scripts/convertCSV2JSON.ts');
        await convertCSV2JSON(fileContents);
        await simulateMain();
    }

    console.log("processing done");
});

app.listen(port, () => {
    console.log(`server is listening at http://localhost:${port}`);
});
 */
/* we changed the package.json "type" to commonjs from module to get this to work */ 