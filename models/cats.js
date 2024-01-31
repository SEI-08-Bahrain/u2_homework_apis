const axios = require("axios")

const gif = async () => {
  const foxUrl = "https://randomfox.ca/floof/"
  //json=true
  try {
    const response = await axios.get(foxUrl)
    const pic = response.data.image //data._id
    console.log(pic)
    return pic
    // res.json(response)
  } catch (error) {
    console.error("Error fetching cat facts:", error)
    res.status(500).send("Error fetching cat facts")
  }
}

module.exports = { gif }
