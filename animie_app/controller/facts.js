const axios = require('axios')

const index = async (req, res) => {
  const animieURL = 'https://animechan.xyz/api/quotes'

  try {
    const response = await axios.get(animieURL)
    const animieFacts = response.data
    console.log(response)
    res.render('index', { animieFacts })
  } catch (error) {
    console.log('It didnt work!')
  }
}
module.exports = {
  index
}

