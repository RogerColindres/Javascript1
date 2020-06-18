/*metodos*/

//math es un objeto estatico y esto sigifica que debemos usar si nombre para utilizarlo

//math.abs(x) devuelve el valor absoluto de x
//math.celi(x) devuelve el entero mas grande mayor o igual que un numero
//math.floor(x) devuelve el entero mas pequeño menor o igual que un numero
//math.pow(x,y) devuelve la ptencia de x elevado a y
//math.sqrt(x) devuelve la rais cuadrada de x
//math.random() genera un numero pseudoaleatoria entre 0 y 1
//math.round(x) devuelve el valor de un numero redondeado al entero mas cercano
//math.sign(x) devuelve el signo de la x, que indica si x es positivo o negativo

//constante de euler

console.log(Math.E);
console.log(Math.PI);

let num = 5.6;

//Math.abs

console.log(Math.abs(num));
console.log(Math.ceil(num));
console.log(Math.floor(num));
console.log(Math.pow(2, 3));
console.log(Math.sqrt(100));
console.log(Math.round(Math.random() * 100));

//console.log(Math.random() * (max - min) + min); valor aleatorio entre un rango dado 

console.log(Math.round(Math.random() * (10 - 5) + 5));

console.log(Math.sign(-5)); //puede devolver tres valores -1,0,1