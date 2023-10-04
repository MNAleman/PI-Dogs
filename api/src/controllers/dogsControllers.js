const axios = require("axios");
const { Op } = require('sequelize');

const { Dog, Temperaments } = require("../db");
const { infoCleaner } = require("../utils/utils");
 

require('dotenv').config()

const URL = `https://api.thedogapi.com/v1/breeds`
const { API_KEY } = process.env

const createDogDB = async (image, name, height, weight, life_span, temperament) => {

    const newDogDB = await Dog.create({ image, name, height, weight, life_span })

    const temperaments = await Temperaments.findAll({
        where: {
            name: temperament
        }
    })
    await newDogDB.addTemperaments(temperaments);
    await newDogDB.reload({
        include: {
            model: Temperaments,
            attributes: ["name"],
            through: { attributes: [] }
        }
    })
    return newDogDB
};

const getDogById = async (id, source) => {
    const dog =
        source === 'api'
            ? (await axios.get(`${URL}/${id}?api_key=${API_KEY}`)).data
            : await Dog.findByPk(id, {
                include: {
                    model: Temperaments,
                    attribute: ['id', 'name']
                }
            });
    return dog;
}

const getAllDogs = async () => {
    const dogBD = await Dog.findAll()
    const infoApi = (await axios.get(`${URL}?key=${API_KEY}`)).data;
    const dogsApi = infoCleaner([...dogBD, ...infoApi].reverse()); //
    return dogsApi;
}

const getDogByRace = async (name) => {
    try{
    const infoApi = (await axios.get(`${URL}?key=${API_KEY}&search=${name.toLowerCase()}`));
    if (!infoApi || !Array.isArray(infoApi.data)) {
        return [];
    }
    const dogsApi = infoCleaner(infoApi.data);
    if (!Array.isArray(dogsApi)) {
        return [];
    }
    // averiguar si el dogsFiltered se hace aca en el back o esto corresponde al front.
    const dogsFiltered = dogsApi.filter(dog => dog.name.toLowerCase().includes(name.toLowerCase()));
    if (!Array.isArray(dogsFiltered)) {
        return [dogsFiltered];
    }

    const dogBD = await Dog.findAll({
        include: Temperaments,
        where: {
            name: {
                [Op.iLike]: `%${name}%`,
            },
        },
    });
    if (dogsFiltered.length === 0 && dogBD.length === 0) {
        throw new Error("Dog not found");
    }
    return [...dogsFiltered, ...dogBD];
    }catch(error){
       return({error:"Raza inexistente"})
    }
}





module.exports = { createDogDB, getDogById, getAllDogs, getDogByRace }



