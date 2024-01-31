const axios = require("axios")

const getCatFact = async (req, res) => {
  const meowFactsUrl = "https://meowfacts.herokuapp.com/"

  try {
    const response = await axios.get(meowFactsUrl)
    console.log(response)
    const meowFact = response.data.data[0]
    res.render("Meow_Facts/index", { meowFact })
  } catch (error) {
    console.log("It did not work")
  }
}

module.exports = {
  getCatFact,
}
