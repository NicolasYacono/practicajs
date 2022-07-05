/* /* //OBJETOS
/* const persona2 = {
  nombre: "Coyo",
  domicilio: "Alte BROWN",
  edad: {
    noche: 29,
    dia:30,
  }
}

console.log(persona2.edad.noche);
const nuevaEdad = prompt("Ingrese su edad");
persona2.edad.noche = nuevaEdad;
//UTILIZAMOS UN PROMPT PARA REDEFINIR LA VARIABLE POR EL USUARIO */

/* const persona = {nombre: "Homero", edad: 30, piernas: 4}; */
/* console.log(persona.nombre + o , persona.piernas); */ //Llamamos puntualmente a la propiedad del metodo con el punto (.)
// sin el punto (.) se llama toda la funcion se agregan con + o ,

//CONSTRUCTORAS */

/* function Persona (nombre, edad, piernas){
    this.nombre = nombre;
    this.edad = edad;
    this.piernas = piernas;
} */
// el new es para crear un nuevo objeto a partir de otro o de esta función / metodo constructora

/* const persona = new Persona("Homero", 39, 4);

console.log(persona);

persona.nombre = "Cacho"; */ //cambio el nombre de la propiedad

//THIS hace referencia a este (esta persona) llama al metodo.

//js normal vs objetos (se llaman de otra forma es lo mismo)
// variable == propiedad
//funcion == metodo

//DOS FORMAS DE DECLARARLO

/* function Persona(nombre, edad) {
    //constructor
    this.nombre = nombre;
    this.edad = edad;
    this.piernas = 4;
  
    //funciones
    this.hablar = function () {
      console.log('hola yo soy ' + (this.nombre || 'amigo') + ' tengo ' + this.piernas + ' piernas!');
    };
    this.resetear = function () {
      this.nombre = '';
      this.edad = 0;
      this.piernas = 0;
    };
  }
  
  class Persona {
    //constructor
    constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
      this.piernas = 4;
    }
    //funciones
    hablar() {
      console.log('hola yo soy ' + (this.nombre || 'amigo') + ' tengo ' + this.piernas + ' piernas!');
    }
    resetear() {
      this.nombre = '';
      this.edad = 0;
      this.piernas = 0;
    }
  }
  
  const persona1 = new Persona('Homero', 39);
  persona1.resetear();
  persona1.hablar(); */
  
/* 2
 */

class Armario {
  constructor(tipoCamisas, cantidad, tela) {
    this.tipoCamisas = tipoCamisas;
    this.cantidad = Number(cantidad);
    this.tela = tela;
   }

   nuevasCamisas (){
    this.cantidad = this.cantidad + 4;
    console.log(`Ahora tengo ${this.cantidad} camisas`)
   }
  }

const armarioPieza = new Armario ("Manga larga", "4", "Algodon");
/* console.log(`El armario tiene ${armarioPieza.cantidad}, camisas ${armarioPieza.tipoCamisas} de ${armarioPieza.tela}`); */
armarioPieza.nuevasCamisas();

