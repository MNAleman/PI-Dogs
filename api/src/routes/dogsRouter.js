const { Router } = require("express");
const { getDetailHandler, getDogsHandler, createDogHandler } = require('../handlers/dogsHandlers');

const dogsRouter = Router();

dogsRouter.get("/", getDogsHandler)
dogsRouter.get("/:id", getDetailHandler);
dogsRouter.post("/", createDogHandler);

module.exports = dogsRouter; 