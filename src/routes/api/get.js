import data from './src/data/FullEventList.json'

module.exports = (req, res) => {
    res.send(data)
    console.log("full list data sent")
}