const {Router} = require ('express');
const {saveTemperamentsHandler} = require('../handlers/temperamentsHandler')

const temperamentsRouter = Router();

temperamentsRouter.get ("/", saveTemperamentsHandler);

module.exports = temperamentsRouter;