/*clase, plantilla para crear objetos, n obejtos con la misma estructura*/

/* class Persona {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad

        this.datos = `me llamo ${nombre} ${apellido} y tengo ${edad} años`
    }

    saludar() {
        return `Hola, me llamo ${this.nombre} y tengo ${this.edad} años`
    }

}

const persona1 = new Persona('Roger', 'Colindres', 25)
const persona2 = new Persona('Julia', 'Rivera', 50)

console.log(persona1)
console.log(persona1.saludar()) */

/*continuacion de POO*/

/* const p = new String('hola')
console.log(typeof(p)) //tipo de dato de variable, objetos etc

console.log(window) */

/* const libro = {
    titulo: 'libro1',
    autor: 'Roger Colindres',
    año: '2013',
    getResumen: function() {
        return `${this.titulo} fue escrito por ${this.autor} en el año ${this.año}`
    }

}

const libro2 = {
    titulo: 'libro2',
    autor: 'Roger Colindres',
    año: '2015'
}

console.log(libro)
console.log(libro2)
console.log(Object.values(libro))
console.log(Object.keys(libro2))
console.log(libro.getResumen()) */

/*una clase solo puede tener un unico constructor, pero puede tener muchos (infinitos) metodos*/
/*Bluuweb ES6 clases y herencia*/

/* class Pelicula {
    constructor(nombre, id) {
        this.nombre = nombre;
        this.id = id;
    }

    reproducir() {
        return `Reproduciendo pelicula ${this.nombre}`
    }
}
//herencia ES6
class Serie extends Pelicula {

    constructor(nombre, id, cap) {
        super(nombre, id);
        this.cap = cap;
    }

    reproducirCapitulo() {
        return `Reproducionedo capitulo ${this.cap}...${this.nombre}`
    }

}


const pelicula1 = new Pelicula('Harry', 1)
const pelicula2 = new Pelicula('Araña', 2)
const serie1 = new Serie('Dexter', 3, 55)

console.log(pelicula1.reproducir())
console.log(pelicula2.reproducir())
console.log(serie1);
console.log(serie1.reproducirCapitulo());

console.log(Object.prototype) */

//https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/super
//tomar en cuenta typeScript para POO con javascrpt

/*poo con funciones constructor ES5 Mayor compativilidad con los navegadores*/
/*objetos literales*/

/* const libro1 = {
    titulo: 'libro1',
    autor: 'Roger Colindres',
    año: '2013',

    getResumen: function() {
        return `${this.titulo} fue escrito por ${this.autor} en el año ${this.año}`
    }

}

const libro2 = {
    titulo: 'libro2',
    autor: 'Roger Colindres',
    año: '2015'
}

console.log(Object.values(libro1))
console.log(Object.keys(libro2))
console.log(libro1.getResumen()); */

/*objetos con funcion constructor*/

function Libro(titulo, autor, año) {
    this.titulo = titulo;
    this.autor = autor;
    this.año = año;

}

Libro.prototype.getResumen = function() {
    return `${this.titulo} fue escrito por ${this.autor} en el año ${this.año}`
}

Libro.prototype.getAños = function() {
    const años = new Date().getFullYear() - this.año;
    return `${this.titulo} tiene ${años} años`;
}

Libro.prototype.revisado = function(nuevoAño) {
    this.año = nuevoAño;
    this.modificado = true;
}

/*creando instancias*/
/* const libro1 = new Libro('Libro1', 'Roger Colindres', '2015');
console.log(libro1);
console.log(libro1.getResumen());
const libro2 = new Libro('libro2', 'Roger Colindres', '2010');
console.log(libro2);
console.log(libro2.getResumen());

console.log(libro1.getAños());
libro1.revisado('2016')
console.log(libro1)
 */
/*herencia con funcion constructor*/
function Revista(titulo, autor, año, mes) {
    Libro.call(this, titulo, autor, año)
    this.mes = mes
}

Revista.prototype.revisado = function(nuevoAño) {
    this.año = nuevoAño
    this.modificado = true
}


//herencia del prototipo metodos 

Revista.prototype = Object.create(Libro.prototype)
Revista.prototype.constructo = Revista


const revista1 = new Revista('Revista uno', 'Maria Lopez', '2019', 'Enero')
    /* console.log(revista1)
    revista1.revisado('2018')
    console.log(revista1) */
    /* 
    console.log(revista1);
    revista1.nuevomes('Abril')
    console.log(revista1)
    revista1.revisado('2015')
    console.log(revista1) */