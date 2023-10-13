const infoCleaner = (dogs) => {
    if (Array.isArray(dogs)) {
        return dogs.map(dog => {
            return {
                id: dog.id,
                image: `https://cdn2.thedogapi.com/images/${dog?.reference_image_id}.jpg`,
                name: dog.name,
                height: dog.height,
                weight: dog.weight,
                life_span: dog.life_span,
                temperament: dog.temperament,
                
            }
        });
    
    }
}
module.exports = {
    infoCleaner
};