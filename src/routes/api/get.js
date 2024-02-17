import data from './src/data/FullEventList.json'

export default async (req, res) => {
    res.send(data)
    console.log("data sent")
}