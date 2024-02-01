const { default: axios } = require('axios')
const categoryUrl = 'https://fakestoreapi.com/products/categories'

const getAll = async () => {
    try {
      const response = await axios.get(categoryUrl)
      return response.data
    } catch (error) {
      return `Error Occured: ${error}`
    }
}

module.exports = {
  getAll
}
