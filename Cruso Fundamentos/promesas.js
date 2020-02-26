const API_URL = "https://swapi.co/api/"
const PEOPLE_URL = "people/:id"
const opts =  { crossDomain: true }

//-----------------------------------------------PROMESA--------------------------------------------------------------
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
    .then(function(personaje){
        console.log(`Mi nombre es ${personaje.name}`)
    })
    .catch(function(id){
        console.log(`ERROR`)
    })