let contador = 0;

/* while (contador < 10) {
    console.log(contador);
    contador++;
} */

/* do {
    console.log(contador);
    contador++;
} while (contador < 10); */
/* 
for (let i = 0; i < 10; i++) {
    console.log(i);
} */

let numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90];

for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}

const roger = {
    nombre: "roger",
    apellido: "Colindres",
    edad: 29
}

for (const propiedad in roger) {
    console.log(`key: ${propiedad}, value:${roger[propiedad]}`);
}

for (const elemento of numeros) {
    console.log(elemento);
}

let cadena = "hola mundo"

for (const caracter of cadena) {
    console.log(cadena)
}