/* const numeros = [10, 20, 30, 40, 50];

console.log(numeros.lenght); */


//numeros.push(60); //agrego un elemento al final, console.log(numeros)// (6) [10, 20, 30, 40, 50, 60]
//numeros.unshift(0);//agrego un elemtno adelante,(7) [0, 10, 20, 30, 40, 50, 60]
//console.log(numeros)
//numeros.pop(); // saca uno de atras 
//numeros.shift()// saca uno de adelante

//numeros.join("-") lo transforma en string separados por lo que coloquemos entre comillas
/* const personasQueComentaron = [`Luis`, `Ana`, `Julia`];
console.log(`Quienes comentaron el post fueron:`);
let aux = personasQueComentaron.lenght + "," + personasQueComentaron.join(" - ");
console.log(aux); */

//CONCAT - "engancha' dos arrays
//Slice - Copia una parte de una array en otro
//indexOf 
/* let resultado = numeros.indexOf(20);
console.log(resultado); */// 1 - esta en la posicion 1
//INCLUDES, para saber si esta o no el valor en el array

//BOOKLET
//A
/* const equipo = [];
while (entrada != 'ESC'){
    equipo.push(entrada);
   let entrada = prompt('Ingresar jugador');
}
for (let index = 0; index < equipo.length; index++) {
    console.log(`Posicion ` + index + ` Jugador ` + equipo[index])
}
console.log(equipo.length); */

//B
/* class Jugador {
    constructor(nombre, camiseta, edad, lesion){
        this.nombre = nombre;
        this.camiseta = camiseta;
        this.edad = edad;
        this.lesion = lesion;
    }
}
const jugadores = [];
jugadores.push(new Jugador ('Nico', '30', 30, 'no' ));
jugadores.push(new Jugador ('Cacho', '76', 60, 'si'));
console.log(jugadores); */


/* const experiencias = [];
class Usuarios {
    constructor(nombre, edad, membresia, comentario){
        this.nombre = nombre;
        this.edad = edad;
        this.membresia = membresia;
        this.comentario = comentario;
    }
}
experiencias.push(new Usuarios ("Eli", "30", "Premium", "100% recomendada!!"));
experiencias.push(new Usuarios ("Carlos", "45", "Clasica", "La calidad es exelentes y el servicio tmb."));
experiencias.push(new Usuarios ("Juan", "24", "Gratuita", "La consulta gratuita fue muy buena, voy por una membresia!!"));

experiencias.join("/n");
console.log("Te dejamos algunas experiencias de nuestro/as socios/as:");
console.log(experiencias); */

//Te dejamos algunas experiencias de nuestro/as socios/as:[object Object],[object Object],[object Object]


