const Catetgory = require('../models/category')

const index = async (req, res) => {
  const categories = await Catetgory.getAll()
  res.render('categories/index', { categories })
}

const show = async (req, res) => {

}

module.exports = {
  index
}
