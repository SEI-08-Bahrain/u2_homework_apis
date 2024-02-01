// routes/apiRouter.js
const express = require('express')
const router = express.Router()
const axios = require('axios')

router.get('/duck-pics', async (req, res) => {
  const duckPicsUrl = 'https://random-d.uk/api/random'

  try {
    const response = await axios.get(duckPicsUrl)
    const duckPic = response.data.url
    res.json({ duckPic })
  } catch (error) {
    console.error('Error fetching duck pics:', error)
    res.status(500).json({ message: 'Error fetching duck pics' })
  }
})

module.exports = router
