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
/*detro de un objeto a las variables se les van a llamar 
atributos/propiedades y a las funciones se les llama metodos*/
const roger = {
    nombre: "Roger",
    apellido: "Colindres",
    edad: "29",
    pasatiempos: ["Estudiar, Deporte, Dar clases"],
    estadocivil: "soltero",
    contacto: {
        email: "jeovannyr10@gmail.com",
        telefono: "+50495642673"
    },
    saludar: function() {
        console.log("Hola :)")
    },
    decirMiNombre: function() {
        console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
    }
}

console.log(roger);
console.log(roger.nombre);
console.log(roger.apellido);
roger.saludar();
roger.decirMiNombre();

console.log(Object.keys(roger))

/*importante:
cuando usamos == estamos comparando los valores 
mientras que === compara tipo de dato y valor de dato*/
// el uso de === es la practica correcta para na compracion de igualdad estricta

let i = 2
console.log(i++)