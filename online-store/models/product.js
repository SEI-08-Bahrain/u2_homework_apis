const { default: axios } = require('axios')

let productUrl = 'https://fakestoreapi.com/products'

const getAll = () => {
  try {
    const response = axios.get(productUrl)
    return response.data
  } catch (error) {
    return error
  }
}

const getOne = async (id) => {
  const response = await axios.get(`${productUrl}/${id}`)
  return response.data
}

module.exports = {
  getAll,
  getOne
}
