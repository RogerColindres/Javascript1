/*if-else*/

let edad = 29
if (edad >= 18) {
    console.log("Eres mayor de edad")
} else {
    console.log("Eres menor de edad")
}

/*operador ternario (condicion) ? verdadero :falsa*/
console.log("operador Ternario")
let eresMayor = (edad >= 12) ? "Eres mayor de edad" : "Eres menor de edad";
console.log(eresMayor);

/*switcg - case*/

/*segun JS domingo - 0 y sabado -6 posicion del dia de la semana */
let dia = 2;
switch (dia) {
    case 0:
        console.log("Domingo")
        break;
    case 1:
        console.log("Lunes")
        break;
    case 2:
        console.log("Martes")
        break;
    case 3:
        console.log("Miércoles")
        break;
    case 4:
        console.log("Jueves")
        break;
    case 5:
        console.log("Viernes")
        break;
    case 6:
        console.log("Sábado")
        break;

    default:
        console.log("El dia no exixte")
        break;
}

/*break y continue*/
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let i = 0; i < numeros.length; i++) {
    if (i === 5) {
        break;
    }
    console.log(numeros[i])
}

for (let i = 0; i < numeros.length; i++) {
    if (i === 5) {
        continue;
    }
    console.log(numeros[i])
}

/*destructuracion*/
let numeros2 = [1, 2, 3]
const [uno, dos, tres] = numeros2;
console.log(uno, dos, tres);

/*objetos literales*/
/*nueva forma de escribit atrbutos y metodos*/
let nombre = "Flin",
    años = 2;

const gato = {
    nombre: nombre,
    edad: años,
    mauyar: function() {
        console.log("miauuuu");
    }
}

const cat = {
    nombre,
    años
};

console.log(cat);