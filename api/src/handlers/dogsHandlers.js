const { createDogDB, getDogById, getAllDogs, getDogByRace } = require("../controllers/dogsControllers");

const getDogsHandler = async (req, res) => {
    const { name } = req.query;
    try {
        if (name) {
            const dogByName = await getDogByRace(name)
            res.status(200).json(dogByName)
        } else {
            const response = await getAllDogs()
            res.status(200).json(response)
        }
    } catch (error) {
        res.status(400).json({ error: error.message })

    }
}
const getDetailHandler = async (req, res)=>{
    const {id} = req.params;
    const source = isNaN(id) ? "bdd": "api"
    try {
        const response =await getDogById(id, source)
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error: error.message})
        
    }
}

const createDogHandler = async (req, res)=>{
    const {image, name, height, weight, life_span, temperament } = req.body;
    try {
        const response =await createDogDB(image, name, height, weight, life_span, temperament )
        res.status(201).json(response)
    } catch (error) {
        res.status(400).json({error: error.message});
        
    };
}
module.exports = {
    getDetailHandler,
    getDogsHandler,
    createDogHandler
}