const axios = require('axios')

const getAll = (name) => {
  try {
    const response = axios.get(
      `https://fakestoreapi.com/products/category/${name}`
    )
    return response
  } catch (error) {
    console.log(error)
    console.log('I am Sorry')
  }
}

const getOne = (id) => {
  try {
    const response = axios.get(`https://fakestoreapi.com/products/${id}`)
    return response
  } catch (error) {
    console.log(error)
    console.log('I am Sorry')
  }
}

module.exports = {
  getAll,
  getOne
}
