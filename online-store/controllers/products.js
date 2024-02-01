const Product = require('../models/product')

const index = async (req, res) => {
  // const category = req.params.category ?? null
  const products = await Product.getAll()
  console.log(products)
  res.render('products/index', { products })
}

const show = async (req, res) => {
  const id = req.params.id
  const product = await Product.getOne(id)
  res.render('products/show', { product })
}

module.exports = {
  index,
  show
}
