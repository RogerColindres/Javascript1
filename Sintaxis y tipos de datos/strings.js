/*strings*/

let cadena = "Hola mundo";

//Propiedades 
//propiedad length para devlver el tamaño de una cadena (string)
console.log(cadena.length);

//propiedad toUpperCase devuelve la cadena en mayusculas 

console.log(cadena.toUpperCase());

//propiedad toLowerCase() devuelve la cadena en minusculas

console.log(cadena.toLowerCase());

// indexOf(string) devuelve la posicion en la que se encuentra el string, si no lo encuentra devuelve -1
//solo devuelve la primera coincidencia encontrada y devuelve la posicion.

console.log(cadena.indexOf('m'));

//replace(valor a buscar, valor nuevo)  reemplaza el fragmento de cadena que le digamos y pone el valor nuevo

console.log(cadena.replace("mundo", "Curso de Javascript"));

//substring(inicio ,[fin]) extrae los caracteres desde el inicio hasta el final y el final o se incluye.
//el parametro fin es considerado como opcional 

console.log(cadena.substring(3, 7));

//slice(inicio, [fin]) igual que sbstring pero admite valores negativos, si ponemos valores negativos empezara desde atras

console.log(cadena.slice(-3));

console.log(cadena.slice(1, -6));

//trim() elimina los espacios al inicio y al final de una cadena

let cadena2 = " hola curso estamos trabajando con cadenas ";

console.log(cadena2);
console.log(cadena2.trim());


//ES6
//startsWith(valor [,inicial]) sirve para saber si la cadena empieza con ese valor. devuelve true o false
//empieza con
console.log(cadena.startsWith("H"));

console.log(cadena.startsWith("H", 0)); //si se busca por posicion no importa si es mayuscula o minuscula
console.log(cadena.startsWith("o", 1));

//endWith(valor, [longitud]) sirve para saber si la cadena termina con ese valor. devuelve true o false
//termina con 
console.log(cadena.endsWith("o"));
console.log(cadena.endsWith("o", 10));
console.log(cadena.endsWith("a", 4));
console.log(cadena.endsWith("n", 7));
console.log(cadena.endsWith("mundo"));

//includes(string, valor) igual que indexOff pero devuelve true o false

console.log(cadena.includes("n"));
console.log(cadena.includes("a", 5)); //el segundo parametro significa la posicion por la que debe comenzar a buscar
console.log(cadena.includes("a", 2));

//repeat(string, valor) repite el parametro string el numero de veces que le indiquemos
console.log(cadena.repeat(2));

/*Template Strings*/
let nombre = "Roger";
let apellido = "Colindres"
let edad = 20;

console.log(`Hola ${nombre} ${apellido} tienes ${edad} años.`);