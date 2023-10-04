const axios = require('axios');
const { Temperaments } = require('../db');

require('dotenv').config()
const URL = `https://api.thedogapi.com/v1/breeds`
const { API_KEY } = process.env

const getAllTemperaments = async () => {
  const allDogs = (await axios.get(`${URL}?key=${API_KEY}`)).data;
  const uniqueTemperamentsSet = new Set();

  allDogs.forEach(dog => {
    if (dog.temperament) {
      const dogTemperaments = dog.temperament.split(',').map(temp => temp.trim());
      dogTemperaments.forEach(temp => uniqueTemperamentsSet.add(temp));
    }
  });

  const uniqueTemperamentsArray = [...uniqueTemperamentsSet].sort();

  const createdTemperaments = await Promise.all(
    uniqueTemperamentsArray.map(async temperament => {
      return await Temperaments.findOrCreate({
        where: { name: temperament },
        defaults: { name: temperament },
      });
    })
  );

  return uniqueTemperamentsArray;
}

module.exports = { getAllTemperaments };