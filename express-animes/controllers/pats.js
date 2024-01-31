const axios = require('axios');

const patPics = async (req, res) => {
    try {
      const numberOfImages = 3; // Set the desired number of images
  
      const animePatsArray = [];

      const patsURL = 'https://api.waifu.pics/sfw/pat';
  
      for (let i = 0; i < numberOfImages; i++) {
        const response = await axios.get(patsURL);
        const animePat = response.data;
  
        animePatsArray.push(animePat);
      }
  
      console.log('Anime Pats Array:', animePatsArray);
  
      res.render('index', { animePatsArray });
    } catch (error) {
      console.error('Error fetching anime pats:', error.response.data);
      res.status(500).send('Error fetching anime pats');
    }
};

module.exports = {
    patPics
}