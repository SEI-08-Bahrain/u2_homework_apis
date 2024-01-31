const axios = require('axios')

const index = async (req, res) => {
  const foxURL = 'https://randomfox.ca/floof/'
  try {
    const response = await axios.get(foxURL)
    const foxImage = response.data.image
    if (foxImage) {
      res.render('index', { foxImage })
    } else {
      throw new Error('No image found')
    }
  } catch (error) {
    console.error('Error fetching fox image:', error.message)
  }
}

module.exports = { index }
