const API_URL = "https://swapi.co/api/"
const PEOPLE_URL = "people/:id"
const opts =  { crossDomain: true }

function obtenerPersonajes(id) {
    return new Promise ((resolve , reject)=>{
        const URL =`${API_URL}${PEOPLE_URL.replace(':id', id)}`
        $.get( URL , opts , function(data){
            resolve(data)
        })
        .fail(()=> reject(id))
    })
}

function onError(id) {
    console.log("Error")
}

//-----------------------------------------------PROMESAS EN PARALELO---------------------------------------------------------

var ids = [1 , 2, 3 , 4 , 5 , 6 , 7]
var promesas = ids.map(id => obtenerPersonajes(id))

//LLammamos a un metodo que tiene la clase Promise, .all, y a este metodo le tenemos que pasar un array de promesas
Promise.all(promesas)
    .then(personajes => console.log(personajes))
    .catch(onError)

    