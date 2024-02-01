const axios = require('axios')

const fetchDuckPic = async () => {
  const duckPicsUrl = 'https://random-d.uk/api/random'

  try {
    const response = await axios.get(duckPicsUrl)
    const duckPic = response.data.url
    return duckPic
  } catch (error) {
    console.error('Error fetching duck pics:', error)
    throw new Error('Error fetching duck pics')
  }
}

module.exports = {
  fetchDuckPic
}
