const axios = require('axios')

const getAll = () => {
  try {
    const response = axios.get('https://fakestoreapi.com/products/categories')
    return response
  } catch (error) {
    console.log(error)
    console.log('I am Sorry')
  }
}

module.exports = {
  getAll
}
