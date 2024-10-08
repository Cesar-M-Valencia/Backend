//llamada de la bd 

const getAllContacts = async(req, res) => {
    try {
      res.status(200).send({
        status: "ok",
        message: "Obtenido correctamente",
        data : [
          {"nombre": "José", "numero": 9989444},
          {"nombre": "Juan", "numero": 5552594},
          {"nombre": "nini", "numero": 4494665}
        ]
      });
    } catch (error) {
      console.log(error)
      res.status(400).sed({
        status: "No se ontuvo contactos",
        message: "Hubo error al obtener los contactos",
        error: error
      })
    }
}

const createcontact = async(req, res) => {
    try {
      console.log(req.body);
      //Destructurarion
      const{nombre, numero}= req.body
      console.log(nombre, numero);

      res.status(201).send({
        status: "Se creo correctamente",
        message : "Contacto creado correctamente"
      });
    } catch (error) {
      console.log(error)
      res.status(400).sed({
        status: "No se creo el contacto",
        message: "Contacto no creado",
        error: error
      })
    }
}


const getContact =async(req, res) =>{
    try {
        //ejecuta alguna funcion
        console.log(req.params)
        //Destructuracion
        const{id} = req.params
        console.log.apply(id)

        res.status(200).send({
          status: "Obtenido correctamente",
          message: "Contacto recibido",
          data:{"nombre": "José", "numero": 9989444}
        })
    } catch(error){
        console.log(error)

        res.status(400).sed({
          status: "No existe el contacto",
          message: "Contanto inexistente",
          error: error
        })
    }
}

const findContact = async(req, res) => {
    try {
      console.log(req.query);

      res.status(200).send({
        status: "Contactos encontrados",
        message : "Todos los contatos encontrados con esos queris",
        data:[
          { "nombre":"Andres", "Numero": 99816165},
          { "nombre":"Andy", "Numero":   89184532},
          { "nombre":"Antonio", "Numero": 29982166}
        ]
      });
    } catch (error) {
      console.log(error)

      res.status(400).sed({
        status: "Contactos no encontrados",
        message: "No se encontraron contactos",
        error: error
      })
    }
  }

module.exports = {
    getAllContacts,
    getContact,
    createcontact,
    findContact
}