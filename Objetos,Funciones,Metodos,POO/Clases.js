//ES6
//clases
class Animal {
    constructor(nombre, genero) {
        this.nombre = nombre;
        this.genero = genero;
    }

    sonar() {
        console.log("Hago sonidos porque estoy vivo")
    }
    saludar() {
        console.log(`Hola me llamo ${this.nombre}`)
    }

}



class Perro extends Animal {
    constructor(nombre, genero, tamaño) {
        //super es un metodo que manda a llamar al metodo constructor de la clase
        super(nombre, genero);
        this.tamaño = tamaño;
        this.raza = null;
    }

    sonar() {
            console.log("Soy un perro y mi sonido es un ladrido")
        }
        //Un metodo estatico en JS se puede ejecutar sin necesidad de que exista una instancia de la misma 

    static queEres() {
        console.log("Los mejores amigos del hombre")
    }

    /*metodos setters uy getters son metodos especiales 
    que nos permiten establecer y obtener los valores 
    de atributos de nuetra clase*/

    get getRaza() {
        return this.raza;
    }

    set setRaza(raza) {
        this.raza = raza;
    }

}

Perro.queEres();

const mimi = new Animal("mimi", "hembra");
const scooby = new Perro("scooby", "macho", "Grande");

console.log(mimi);
console.log(scooby);

mimi.saludar();
mimi.sonar();
scooby.sonar();
console.log(scooby.getRaza);
scooby.setRaza = "gran danez";
console.log(scooby.getRaza);