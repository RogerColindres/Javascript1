//Prototipos de objetos
//otra forma de crear objetos 
//como crear un objeto a partir de otro

const libroprototipo = {
    getTesumen: function() {
        return `${this.titulo} fue escrito por ${this.autor} en el año ${this.año}`
    },
    getAños: function() {
        const años = new Date().getFullYear() - this.año;
        return `${this.titulo} tiene ${años} años`;
    }

}

/* const libro1 = Object.create(libroprototipo)
libro1.titulo = 'libro uno'
libro1.autor = 'Roger Colindres'
libro1.año = '2010' */
const libro1 = Object.create(libroprototipo, {
    titulo: { value: 'libro unao' },
    autor: { value: 'Roger Colindres' },
    año: { value: '2012' }

})
console.log(libro1)
console.log(libro1.getAños())

//creacion de objetos usando el prototipo antes definido