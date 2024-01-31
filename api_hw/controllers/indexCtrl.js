const axios = require('axios');

const index = async (req, res) => {
    const mapsUrl = 'https://valorant-api.com/v1/maps';
  
    try {
      const response = await axios.get(mapsUrl);
      const maps = response.data.data;
  
      res.render('index', {maps})
    } catch (error) {
      console.error('Error:', error);
    }
}

module.exports = { index }