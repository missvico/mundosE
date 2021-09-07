let pedido = fetch("https://jsonplaceholder.typicode.com/")
console.log(pedido)

let otraVar
let miVariable 

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => otraVar = response.json())
  .then(json => console.log(json))
  .catch(error => console.log(error))

const miFuncionAsync = async () => {
    try{
        let response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        let json = await response.json()
        console.log(json)
    }catch(error){
        console.log(error)
    }
}

const starWars = async (id) => {
    try{
        let characterResponse = await fetch(`https://swapi.dev/api/people/${id}`)
        let character = await characterResponse.json()
        let name = character.name
        let homeResponse = await fetch(character.homeworld)
        let home = await homeResponse.json()

        console.log(`${name} es de ${home.name}`)
    }catch(error){
        console.log(error)
    }
}
