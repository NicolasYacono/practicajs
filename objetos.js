/* /* //OBJETOS
//variables del tema casa
let puertasCasa = 2;
let ventanasCasa = 6;
let direccionCasa = "9 de Julio 44";


function hablar(quien, donde) {
    console.log("Mi nombre es" + quien + "y vivo en" + donde);
}

hablar ("Juana", "9 de Julio");

//variables de la persona
/* let nombrePersona = "Cacho";
let edadPersona = 20;
let piernas = 2; */

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
  
