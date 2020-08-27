/*son estructuras de datos que representan las propiedades, valores y acciones que puede realizar el objeto
/*Todo los objetos tienen propiedades o atributos y comportamientos o acciones representados por pares
clave (key): valor (value)*/
/*Para acceder a las propiedades y acciones del objeto se utiliza la nomeclatura del punto*/

/*nombreObjeto.propiedadeObjeto*/

const persona = {
    nombre: 'juan',
    edad: 26,
    hijos: ['Laura', 'Diego', 'Pepe', 'Rosa', 'Tomas']
}

/* console.log(persona)
console.log(persona)

for (let llave in persona) {     recorremos el objeto, un for of toma el objeto como no iterable             
    console.log(persona[llave]) imprime los valores de las claves o llaves               
} */

/* for (let hijo of persona.hijos) {
    console.log(hijo)
} */

console.log(`Hola ${persona.nombre}. tienes ${persona.edad} años y tus hijos se llaman ${persona.hijos.join(', ')}`)