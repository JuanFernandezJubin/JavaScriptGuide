const API_URL = "https://swapi.co/api/"
const PEOPLE_URL = "people/:id"
const opts =  { crossDomain: true }


//-----------------------------------------------ENCADENAR PROMESAS-----------------------------------------------------------
//En esta ocación se retornara una promesa. En el constructor de una promesa tenemos que pasarle una funcion
function obtenerPersonajes(id) {
    return new Promise ((resolve , reject)=>{
        const URL =`${API_URL}${PEOPLE_URL.replace(':id', id)}`
        $.get( URL , opts , function(data){
            resolve(data)
        })
        .fail(()=> reject(id))
    })
}

obtenerPersonajes(1)
    .then( personaje => {
        console.log(`Mi nombre es ${personaje.name}`)
        return obtenerPersonajes(2)
    })

    .then( personaje => {
        console.log(`Mi nombre es ${personaje.name}`)
        return obtenerPersonajes(3)
    })

    .then( personaje => {
        console.log(`Mi nombre es ${personaje.name}`)
        return obtenerPersonajes(4)
    })

    .then( personaje => {
        console.log(`Mi nombre es ${personaje.name}`)
        return obtenerPersonajes(5)
    })

    .then( personaje => {
        console.log(`Mi nombre es ${personaje.name}`)
    })

    .catch(function(id){
        console.log(`ERROR`)
    }) 






