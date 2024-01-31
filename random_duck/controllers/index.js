const axios = require("axios")

const getDuck = async (req, res) => {
  const randomDuckUrl = "https://random-d.uk/api/random"

  try {
    const response = await axios.get(randomDuckUrl)
    const randomDuck = response.data.url
    res.render("index", { randomDuck })
  } catch (error) {
    console.error("Error fetching random ducks:", error)
    res.status(500).send("Error   fetching random ducks")
  }
}

module.exports = {
  getDuck,
}
