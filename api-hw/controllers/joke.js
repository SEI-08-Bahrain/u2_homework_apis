const axios = require('axios');
const jokechose = (req,res) => {
    res.render('joke/index')
}

const showSingle = async (req,res) => {
    const singleJokeUrl = 'https://v2.jokeapi.dev/joke/Any?type=single';
    try {
        const response = await axios.get(singleJokeUrl)
        const singleJoke = response.data.joke  
        res.render('joke/showsingle',{singleJoke})
    } catch (error) {
        console.error('Error fetching Joke:', error);
    }
}

const showTwoPart = async (req,res) => {
    const twoPartJokeUrl = 'https://v2.jokeapi.dev/joke/Any?type=twopart';
    try {
        const response = await axios.get(twoPartJokeUrl)
        const firstPartJoke = response.data.setup  
        const secondPartJoke = response.data.delivery  
        res.render('joke/showtwopart',{firstPartJoke ,secondPartJoke })
    } catch (error) {
        console.error('Error fetching Joke:', error);
    }
}

module.exports ={jokechose
,showSingle
,showTwoPart}