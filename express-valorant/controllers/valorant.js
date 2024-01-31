const axios = require('axios')

const allAgents = async (req, res) => {
  const valAgentsURL =
    'https://valorant-api.com/v1/agents?isPlayableCharacter=true'
  try {
    const response = await axios.get(valAgentsURL)
    const agentsInfo = response.data.data
    res.render('valorant/index', { agentsInfo })
  } catch (error) {
    console.error('Error fetching agents data:', error)
    res.status(500).send('Error fetching agents data')
  }
}
module.exports = {
  allAgents
}
