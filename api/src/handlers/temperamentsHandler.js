const { getAllTemperaments } = require('../controllers/temperamentsController');

const saveTemperamentsHandler = async (req, res) => {
  //Declara una función llamada saveTemperamentsHandler, que acepta dos parámetros, req y res, que representan la solicitud y la respuesta HTTP respectivamente.
  const { temperament } = req.body;
  //Desestructura el cuerpo de la solicitud (req.body) para obtener el valor de la propiedad temperament y lo asigna a la variable temperament.
  try {
    //Inicia un bloque try, donde se coloca el código que podría generar una excepción.
    const response = await getAllTemperaments(temperament);
    //Llama a la función getAllTemperaments con el valor de temperament. Utiliza await para esperar a que la promesa devuelta por getAllTemperaments se resuelva antes de continuar.
    res.status(200).json(response);
    //Si la llamada a getAllTemperaments es exitosa, responde con un código de estado 200 (OK) y envía el resultado de la función como JSON en la respuesta.
  } catch (error) {
    //Inicia un bloque catch, que manejará cualquier excepción que ocurra en el bloque try.
    res.status(400).json({ error: error.message });
    //Si se produce una excepción, responde con un código de estado 400 (Bad Request) y envía un mensaje de error en formato JSON que contiene el mensaje de la excepción.
  }
};//Cierra la función saveTemperamentsHandler.


module.exports = {
  saveTemperamentsHandler,
};

// const {createTemperamentDb, getAllTemperaments, postAllTemperaments}= require('../controllers/temperamentsController')
// //const {Temperaments} = require('../db')

// const postTemperamentsHandler = async (req,res) =>{
//     const {name} = req.body;
//     try {
//         const newTemperament = await createTemperamentDb(name);
//         res.status(200).json(newTemperament);
//     } catch (error) {
//         res.status(400).json({error:error.menssage});

//     }
// };

// const getTemperamentsHandler = async (req,res)=>{
//     try{
//         const response = await getAllTemperaments();
//         await Promise.all(
//             response.map(async (temperament) => {
//                 await createTemperamentDb(temperament); // Guardar cada temperamento en la base de datos
//             })
//         );
//         res.status(200).json(response);
//     }catch (error){
//         res.status(400).json({error:error.menssage});
//     }
// };

// module.exports = {
//     getTemperamentsHandler
// }