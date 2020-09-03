//expresiones reguares, trabajado en RegExr
/* Coincidencias Basicas
.       - Cualquier Caracter, excepto nueva linea
\d      - Cualquier Digitos (0-9)
\D      - No es un Digito (0-9)
\w      - Caracter de Palabra (a-z, A-Z, 0-9, _)
\W      - No es un Caracter de Palabra.
\s      - Espacios de cualquier tipo. (espacio, tab, nueva linea)
\S      - No es un Espacio, Tab o nueva linea.

Limites
\b      - Limite de Palabra
\B      - No es un Limite de Palabra
^       - Inicio de una cadena de texto
$       - Final de una cadena de texto

Cuantificadores:
*       - 0 o Más
+       - 1 o Más
?       - 0 o Uno
{3}     - Numero Exacto
{3,4}   - Rango de Numeros (Minimo, Maximo)

Conjuntos de Caracteres
[]      - Caracteres dentro de los brackets
[^ ]    - Caracteres que NO ESTAN dentro de los brackets

Grupos
( )     - Grupo
|       - Uno u otro */

//ejemplo 

let cadena = "colindresrivera91@gmail.com";
/* let expReg1 = new RegExp("hola", "gim"); */
let expReg2 = /^[a-zA-Z0-9.-_]+\@[a-zA-Z]+\.[a-z]+$/gim;

/* console.log(expReg1.test(cadena));
console.log(expReg1.exec(cadena)); */
console.log(expReg2.test(cadena));
/* console.log(expReg2.exec(cadena)); */

let cadena2 = "holaxyz123"

let ExpreR = /xyz/gim

console.log(ExpreR.test(cadena2))