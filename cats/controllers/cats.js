const cat = require("../models/cat");

const index = async (req, res) => {
  const cats = await cat.getAll();
  res.render("index", { cats });
};

module.exports = {
  index,
}