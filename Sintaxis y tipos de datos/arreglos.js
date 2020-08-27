/*estructuras que permiten almacenar varios datos y agruparlos*/
/*se pueden llenar con cualquier tipo de dato valido en javascript, separados por comas*/
/*se pueden mescalr tipos de datos*/
/*se declaran con llaves o corchetes*/
/*los arreglos se comportan como listas*/
/* 
let numeros = [];

console.log(numeros);

numeros = [1, 2, 3, 4, 5];

console.log(numeros);
console.log(numeros[1]);

let palabras = ['hola', 'estamos', 'en', 'youtube'];

console.log(palabras[1].length);

console.log(`La palabra "${palabras[1]}" tienen ${palabras[1].length} letras`); */

/*propiedad para arreglos js*/

let numeros = [1, 2, 3, 4, 5];
let palabra = "hola";

/*.length - devuelve el numero de pocisiones que contiene el array*/

// console.log(numeros.length)

/*metodos para arreglos*/
/*Array.isArray() -devuelve true si la variable es un array.*/

// console.log(Array.isArray(numeros));
// console.log(Array.isArray(palabra));

/*elimienar elemetos de un arreglo*/
/*Eliminar un elemento*/
/*.shift() elimina el primer elemento de un arreglo
.pop() elimina el ultimo elemento de un arreglo*/

/* console.log(numeros.shift());
console.log(numeros.pop()); */

/*añadir elementos*/
/*.push(E1,E2, ..) añade uno o mas elementos al final del arreglo y devuelve la nueva longitud
unshift(E1,E2,..) añade uno o mas elementos al comienzo del arreglo y devuelve la nueva longitud*/


/* numeros.push("hola");
console.log(numeros);

numeros.unshift("Bienvenido");
console.log(numeros); */

/*indexOf devuelve el primer indice del elemento que coincida con el valor especificado, o -1
si ninguno es encontrado*/

// console.log(numeros.indexOf(2));

/*.lastIndexOf() devuelve el ultimo indice del elemento que coincida con el valor especificado, o -1 
si ninguno es encontrado*/

let numeros1 = [1, 2, 3, 2, 4, 5, 6, 2, 7];

// console.log(numeros1.lastIndexOf(2));

/*.reverse() invierte el orden de los elementos del arreglo*/

/* numeros.reverse();
console.log(numeros); */

/*.join(separdador) devuelve un string con el separador que indiqueos, por defecto son comas*/

let nombre = ['Roger', 'Colindres'];
let separador = nombre.join(' ');
// console.log(separador);

/*.splice(a,b,items) cambia el contenido de un arreglo eliminando elementos existentes y/o 
agregando nuevos elementos
a - indice de inicio
b- numero de elementos (opcional)
items - elemento a añadir en el caso de que se añadan (opcional)*/

//numeros.splice(2); elimina desde la posicion tres hasta el final
//numeros.splice(2, 2); elimina desde la posicion dos los valores que indiquemos
//numeros.splice(2, 2, 10, 20, 30); si B es distinto de cero elimina el numero de valores indicados y añade los valores de items
//console.log(numeros);
//para que no elimine y agregre elementos el valor de b es cero

/*.slice(a,b) extrae elementos de un arreglo desde el indice hasta el indice b. 
si no existe b lo hace hasta el final del arreglo, si o existe ni a ni b hace una copia del arreglo*/

let newNumbers = numeros.slice();
// console.log(numeros);
// console.log(newNumbers);
let newNumbers2 = numeros.slice(2, 3);
// console.log(newNumbers2);

//arreglos con mircha
let a = []
let b = [1, true, "hola", [1, 2, 3]]
console.log(a)
console.log(b)
console.log(b.length)
console.log(b[2])
console.log(b[3][2])

/*otra de forma de declarar un arreglo*/
let c = Array.of(1, 2, 3, 4, 5)
console.log(c)

let d = Array(100).fill(false);
console.log(d)

let colores = ["rojo", "verde", "azul"]
colores.forEach(function(el, index) {
    console.log(`<li id="${index}">${el}</li>`)
})