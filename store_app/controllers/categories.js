const Category = require('../models/category')

const index = async (req, res) => {
  const categories = await Category.getAll()
  const categoryArray = categories.data
  res.render('categories/index', { categoryArray })
  //res.send(categories.data)
}

module.exports = {
  index
}
