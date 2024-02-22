import data from './src/data/FullEventList.json'

export default (req, res) => {
    res.send(data)
    console.log("full list data sent")
}