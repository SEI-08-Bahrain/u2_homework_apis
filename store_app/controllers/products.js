const Product = require('../models/product')

const index = async (req, res) => {
  const { name } = req.params
  const products = await Product.getAll(name)

  const productArray = products.data
  res.render('products/index', { productArray })
  //res.send(products.data)
}

const show = async (req, res) => {
  const products = await Product.getOne(req.params.id)
  const oneProduct = products.data
  res.render('products/show', { oneProduct })
  //res.send(products.data)
}

module.exports = {
  index,
  show
}
