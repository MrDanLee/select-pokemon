// Obtener información general
// Obtener un pokemon 
// Obtener info de ese pokemon
// Iterar en una funcion
// Insertar en DOM

console.log('funciona')

fetch("https://pokeapi.co/api/v2/pokemon/ditto")
.then((response) => {
  if (!response.ok) {
    throw new Error(response.status)
  }
  return response.json()
})
.then((data) => console.log(data))
.catch((error) => console.log(error))


