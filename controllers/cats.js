const catsModel = require("../models/cats")

const getGif = async (req, res) => {
  // (req, res) => {
  let pic = await catsModel.gif()
  // let pic = response.toString()
  // console.log(response)
  // res.send(pic)
  res.render("cats.ejs", { pic })
}

module.exports = { getGif }
