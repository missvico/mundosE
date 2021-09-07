let nombres= ["Gonzalo", "Agustin", "Lola", "Juana", "Maria"]

//***** FOR EACH *******/
nombres.forEach(nombre => {
    console.log("Hola " + nombre)
})

//***** FILTER *******/
let arregloFiltrado = nombres.filter(nombre => {
    return nombre.length === 7
})

//***** MAP *******/
let largosDeNombre = nombres.map(nombre => {
    return nombre.length
})

//El forEach no devuelve nada
console.log(nombres.forEach(nombre => {
    return nombre.length
}))

//El map devuelve un arreglo
console.log(nombres.map(nombre => {
    return nombre.length
}))

//*****REDUCE *******/
let sumaDeNombres = nombres.reduce((acumulador, nombre)=> {
    return acumulador + " " + nombre
}) 

//Ejemplo con numeros
let numbers = [1,4,6]

let suma = numbers.reduce((acc, number)=> {
    return acc + number
}) //devuelve la suma de todos los numeros del arreglo

//***** OTROS METODOS *******/
let nuevoArregloSliceado = nombres.slice(2,5) //devuelve un arreglo que va del tercer elemento al cuarto
let estaGonzalo = nombres.includes("Gonzalo") //devuelve true porque "Gonzalo" es igual a uno de los elementos del arreglo
let indiceDeGonzalo = nombres.indexOf("Gonzalo") //devuelve 0
let todosLosNombres = nombres.join(" - ") // devuelve "Gonzalo - Agustin - Lola - Juana - Maria" porque une todos los elementos con un guion


// Armar un script y declarar un arreglo con los nombres de 5 personas. Utilizando los array methods aprendidos hacer las siguientes acciones:
// ● Utilizando .forEach() loggear en la consola el nombre de las 5 personas.
// ● Utilizando .slice() guardar en una variable un nuevo arreglo que vaya desde la segunda hasta la cuarta persona. Loggear ese arreglo
// ● Utilizando .map() guardar en una variable un arreglo de números que indique la cantidad de letras que tiene cada nombre. Loggear ese arreglo.
// ● Utilizando .join() guardar en una variable un string que contenga a todos los nombres separados por un espacio. Loggear ese string.
// ● Utilizando .filter() guardar en una variable un arreglo de nombres que solo contenga a los nombres que terminan con la letra “a”.

let names = ["Hernan", "Juana", "Franco", "Francisca", "Diego"]

names.forEach(name => {
    console.log(name)
})

let slicedNames = names.slice(1,4)
console.log(slicedNames)

let nameLengths = names.map(name => {
    return name.length
})
console.log(nameLengths)

let allTheNames = names.join(" ")
console.log(allTheNames)

let namesEndWithA = names.filter(name => {
    return name[name.length-1] === "a"
})
console.log(namesEndWithA)

