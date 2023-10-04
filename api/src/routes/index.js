const { Router } = require('express');
const dogsRouter = require('./dogsRouter');
const temperamentsRouter = require('./temperamentsRouter');
//const temperamentsRouter = require('./temperamentsRouter');


// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const mainrouter = Router();

mainrouter.use('/dogs', dogsRouter)
mainrouter.use('/temperaments', temperamentsRouter)

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = mainrouter;
