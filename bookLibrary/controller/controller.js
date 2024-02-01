const axios = require("axios")

const home = (req, res) => {
  res.render("home")
}

const pastas = async (req, res) => {
  const pastaCtrl = "https://foodish-api.com/images/pasta/"

  try {
    const response = await axios.get(pastaCtrl)
    const pastas = response.data

    const regex = /value="([^"]+)"/
    const match = pastas.match(regex)
    const imgSrc = match ? match[1] : null

    res.render("pastas", {
      imgSrc,
    })
  } catch (error) {
    console.error("Error fetching pasta images:", error)
    res.status(500).send("Error fetching pasta images")
  }
}
const sambosa = async (req, res) => {
  const pastaCtrl = "https://foodish-api.com/images/samosa/"

  try {
    const response = await axios.get(pastaCtrl)
    const pastas = response.data

    const regex = /value="([^"]+)"/
    const match = pastas.match(regex)
    const imgSrc = match ? match[1] : null

    res.render("sambosa", {
      imgSrc,
    })
  } catch (error) {
    console.error("Error fetching pasta images:", error)
    res.status(500).send("Error fetching pasta images")
  }
}

const berger = async (req, res) => {
  const pastaCtrl = "https://foodish-api.com/images/burger/"

  try {
    const response = await axios.get(pastaCtrl)
    const pastas = response.data

    const regex = /value="([^"]+)"/
    const match = pastas.match(regex)
    const imgSrc = match ? match[1] : null

    res.render("burger", {
      imgSrc,
    })
  } catch (error) {
    console.error("Error fetching pasta images:", error)
    res.status(500).send("Error fetching pasta images")
  }
}

const desert = async (req, res) => {
  const pastaCtrl = "https://foodish-api.com/images/dessert/"

  try {
    const response = await axios.get(pastaCtrl)
    const pastas = response.data

    const regex = /value="([^"]+)"/
    const match = pastas.match(regex)
    const imgSrc = match ? match[1] : null

    res.render("desert", {
      imgSrc,
    })
  } catch (error) {
    console.error("Error fetching pasta images:", error)
    res.status(500).send("Error fetching pasta images")
  }
}

const biryani = async (req, res) => {
  const pastaCtrl = "https://foodish-api.com/images/biryani/"

  try {
    const response = await axios.get(pastaCtrl)
    const pastas = response.data

    const regex = /value="([^"]+)"/
    const match = pastas.match(regex)
    const imgSrc = match ? match[1] : null

    res.render("biryani", {
      imgSrc,
    })
  } catch (error) {
    console.error("Error fetching pasta images:", error)
    res.status(500).send("Error fetching pasta images")
  }
}

const pizza = async (req, res) => {
  const pastaCtrl = "https://foodish-api.com/images/pizza/"

  try {
    const response = await axios.get(pastaCtrl)
    const pastas = response.data

    const regex = /value="([^"]+)"/
    const match = pastas.match(regex)
    const imgSrc = match ? match[1] : null

    res.render("pizza", {
      imgSrc,
    })
  } catch (error) {
    console.error("Error fetching pasta images:", error)
    res.status(500).send("Error fetching pasta images")
  }
}
module.exports = {
  home,
  pastas,
  sambosa,
  berger,
  desert,
  biryani,
  pizza,
}
