const axios = require("axios");

const getAll = async () => {
  const catFactUrl = "https://cat-fact.herokuapp.com/facts";
  
  try {
    const response = await axios.get(catFactUrl);
    const catFact = response.data;
    return catFact;
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getAll,
}

