const axios = require('axios')
const index = (req, res) => {
  res.render('Hyrule/index')
}

const randEnemy = async (req, res) => {
  const hyruleEnemiesUrl =
    'https://botw-compendium.herokuapp.com/api/v3/compendium/category/monsters'
  try {
    const response = await axios.get(hyruleEnemiesUrl)
    const hyruleEnemies = response.data.data
    let enemy = hyruleEnemies[Math.floor(Math.random() * hyruleEnemies.length)]
    console.log(enemy)
    res.render('Hyrule/enemy', { enemy })
  } catch (error) {
    console.send(':(')
  }
}
module.exports = { index, randEnemy }
