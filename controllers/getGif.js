const catsModel = require("../models/cats")

const getGif = async (req, res) => {
  // (req, res) => {
  const pic = catsModel.gif()
  res.send(pic)
  res.render()
}
