const axios = require('axios')

const index = async (req, res) => {
  const title = 'Anime'
  const animeQuotesUrl = 'https://animechan.xyz/api/quotes'

  try {
    const response = await axios.get(animeQuotesUrl)
    const quotes = response.data
    res.render('quotes/index', { quotes, title })
  } catch (error) {
    console.log('not working', error)
  }
}

module.exports = {
  index
}
