//JS lenguaje multiparadigma(funcional, poo)
/*POO, (Clases: Modelo a seguir, 
    Objetos(Atributos, Metodos): es una instacia de una clase)
    atributos: caracteristica o propiedad del objeto
    Metodos: acciones que un objeto puede realiar
    (funciones dentro de un objeto)*/

/* const animal = {
    nombre: "Snopy",
    sonar() {
        console.log("Hago sonidos porque estoy vivo")
    }
}


console.log(animal); */

/*funcion constructora*/

function Animal(nombre, genero) { //Esto es una funcion constructor PADRE
    //atributos
    this.nombre = nombre;
    this.genero = genero;
    //metodos
    /* this.sonar = function() {
        console.log("Hago sonidos porque estoy vivo")
    }

    this.saludar = function() {
        console.log(`Hola me llamo ${$this.nombre}`)
    } */
}
//metodos de funcion constructora animal, metodos asignados al prototipo
//no a la funcion como tal
Animal.prototype.sonar = function() {
    console.log("Hago sonidos porque estoy vivo")
}

Animal.prototype.saludar = function() {
    console.log(`Hola me llamo ${this.nombre}`)
}

function Perro(nombre, genero, tamaño) { //Esto es una funcion constructor HIJO
    this.super = Animal;
    this.super(nombre, genero);
    this.tamaño = tamaño;
}

//herencia con prototipos 

//perro esta heredando de animal
Perro.prototype = new Animal();

//Con esto jala todas las caracteristicas de su padre,creando su propio constructor 
Perro.prototype.constructor = Perro;

//sobrescritura de metodos del prototipoo de padre en el hijo
Perro.prototype.sonar = function() {
    console.log("Soy perro y mi sonido es un ladrido")
}

Perro.prototype.ladrar = function() {
    console.log("Gua Gua!!!!")
}


const snoopy = new Perro("Snoopy", "Masculino", "Mediano"),
    lola = new Animal("Lola", "Femenino");

console.log(snoopy);
console.log(lola);

snoopy.sonar();
snoopy.saludar();
lola.sonar();