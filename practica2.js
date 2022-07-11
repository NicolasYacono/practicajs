//PRACTICA

class Membresia {
    constructor(tipo, cursos, gramos, contenido, asesoramiento){
        this.tipo = tipo;
        this.cursos = cursos;
        this.gramos = gramos;
        this.contenido = contenido;
        this.asesoramiento = asesoramiento;
    }
   
}

const membresias = [
    new Membresia ('Gratuita', 'No incluye cursos', 'No incluye gramos mensuales', 'Contenido de la web', 'No incluye asesoramiento'),
    new Membresia ('Clasica', 'Cursos principiante', '3, 9 o 15 gramos mensuales', 'Contenido de la web', 'Primer asesoramiento gratis'),
    new Membresia ('Premium', 'Todos los cursos online', '10, 20 o 30 gramos mensuales', 'Contenido de la web', 'Asesoramiento mensual')
]

class Gramos {
    constructor(cantidad, precio){
        this.cantidad = cantidad;
        this.precio = precio;
    }
    membresiaMensual (){
        this.cantidad * this.precio;
    }
}

const gramosMensuales = [
    new Gramos (3, 1100),
    new Gramos (9, 1050),
    new Gramos (15, 950),
    new Gramos (10, 1100),
    new Gramos (20, 1000 ),
    new Gramos (30, 950)
]


const abonoMensual = (gramos, precio) => gramos * precio;

let dni = prompt("Ingrese su DNI (sin puntos)");
while(dni.length >= 7){
    if(dni >= 45000000){
        console.log("Lo sentimos es menor de edad")
    } else {
        let nombre = prompt("Ingrese su nombre");
        console.log(`Hola ${nombre} le informamos a continuacion nuestras membresias:`);
        for (const objeto of membresias){
            console.log(`${objeto.tipo}: \n ${objeto.cursos} \n ${objeto.gramos} \n ${objeto.contenido} \n ${objeto.asesoramiento}`)
        };
        let membresiaElegida = Number(prompt("Ingrese el numero del tipo de membresia que desea \n1 - Premium \n2 - Clasica\n3 - Gratuita"));
            if(membresiaElegida === 3 ){
              console.log('Usted ha seleccionado membresia Gratuita');
             dni=3; 
            } else if (membresiaElegida === 2){
                console.log('Usted ha seleccionado membresia Clasica')
                const gramos1 = Number(prompt("Ingrese la cantidad de gramos que desea 5,10 o 15"));
                if(gramos1 === 5){
                    console.log(`Abono mensual por 5gr $${abonoMensual (gramos1, 900)}`)
                } else if (gramos1 === 10) {
                    console.log(`Abono mensual por 10gr $${abonoMensual (gramos1, 850)}` )
                } else {
                    console.log(`Abono mensual por 15gr $${abonoMensual (gramos1, 800)}`)
                }
                dni=3; 
            } else if (membresiaElegida === 1){
                console.log("Asesoramiento y cursos gratiutos, hasta 30gr mensuales, beneficios premium, contenido de la web")
                const gramos1 = Number(prompt("Ingrese la cantidad de gramos que desea 10,20 o 30"));
                if(gramos1 === 10){
                    console.log(`Abono mensual por 10gr $${abonoMensual (gramos1, 850)}`)
                } else if (gramos1 === 20) {
                    console.log(`Abono mensual por 20gr $${abonoMensual (gramos1, 750)}`)
                } else {
                    console.log(`Abono mensual por 30gr $${abonoMensual (gramos1, 650)}`)
                }
                dni=3; 
            }else{
                console.log("Lo sentimos el numero ingresado es incorrecto")
                console.log("Gracias por su visita!")
                dni=3; 
            } 
    } 
    
}; 


/* const cursosYActividades = [
    {curso:"Curso de Autocultivo I", precio: 6000, membresia: "Premium", profesor: "Franco Solazzi"},
    {curso:"Curso de Autocultivo II", precio: 6000, membresia: "Premium", profesor: "Franco Solazzi"},
    {curso:"Curso de Cannabis Medicinal", precio: 10000, membresia: "Premium", profesor: "Mariano D`Alto"},
    {curso:"Curso de Cañamo y sus deribados", precio: 9000, membresia: "Premium", profesor: "Mariano D`Alto"}];
const contenido = ["Documental 'Nuestra Lucha: El Cannabis'", "Primeros pasos para plantar", "Cannabis y sus beneficios"];
const asesoramiento = [
    {tipo:"Por consulta", precio:2000},
    {tipo:"Mensual", precio:10000, membresia: "Premium"},
    {tipo:"Primer asesoramiento gratis", precio: 0, membresia:"Gratuita"}];
const productos = [
    {producto:"Compost Natural LS", presentacion: "10lt", precio: 500},
    {producto:"Tierra organica LS", presentacion: "5kg", precio: 2000},
    {producto:"Indoors LS", presentacion: "100cm de alto, 50cm de ancho y 50cm de profundidad", precio: 30000},
    {producto:"Aceite de Cannabis", presentacion: "10ml (20% CBD / 7% THC)", precio: 2500}];
const gramosMensuales = [
    {cantidad:5, precio:900, membresia:"Clasica"},
    {cantidad:10, precio:850, membresia:"Clasica"},
    {cantidad:10, precio:880, membresia:"Premium"},
    {cantidad:15,precio:800, membresia:"Clasica"},
    {cantidad:20,precio:750, membresia:"Premium"},
    {cantidad:30,precio:650, membresia:"Premium"}];
const tratamientos = [
    {tratamiento:"Terapia con Aceite de Cannabis", precio:10000}, 
    {tratamiento:"El Cannabis recreacional", precio: 5000}]; */


/* alert("Bienvenida/o! Le informamos que necesita ser mayor de edad y poseer reprocann para poder inscribirse");
alert("Ambos seran corroborados con el numero de DNI"); */




//cursos.find((item) => item.nombre === 'backend');
/*
alert("Bienvenida/o! Le informamos que necesita ser mayor de edad y poseer reprocann para poder inscribirse")
alert("Ambos seran corroborados con el numero de DNI")
let dni = Number(prompt("Ingrese su DNI (sin puntos)"))
while(dni === "."){
    console.log("Ingrese su DNI (sin puntos)")
};
if(dni >= 45000000){
    console.log("Lo sentimos es menor de edad")
} else {
    let nombre = prompt("Ingrese su nombre");
    console.log("Hola "+nombre+" podra acceder a:");
    const abonoMensual = (gramos) => gramos;
    let membresia = Number(prompt("Ingrese el numero del tipo de membresia que desea \n1 - Premium \n2 - Clasica\n3 - Gratuita"));
        if(membresia === 3 ){
            console.log("Contenido de la web y primer asesoramiento gratis")
        } else if (membresia === 2){
            console.log("Beneficios exclusivos, hasta 15gr mensuales, asesoramiento gratis por un mes y contenido de la web")
            const gramos1 = Number(prompt("Ingrese la cantidad de gramos que desea 5,10 o 15"));
            let precio1;
            const abonoMensualGramos = abonoMensual (gramos1);
            if(gramos1 === 5){
                precio1 = abonoMensualGramos * 900;
                console.log("Abono mensual por 5gr $"+precio1+"")
            } else if (gramos1 === 10) {
                precio1 = 850;
                console.log("Abono mensual por 10gr $"+abonoMensualGramos+"")
            } else {
                precio1 = 800;
                console.log("Abono mensual por 15gr $"+abonoMensualGramos+"")
            }
        } else if (membresia === 1){
            console.log("Asesoramiento y cursos gratiutos, hasta 30gr mensuales, beneficios premium, contenido de la web")
            const gramos1 = Number(prompt("Ingrese la cantidad de gramos que desea 10,20 o 30"));
            precio1 = 900;
            const abonoMensualGramos = abonoMensual (gramos1);
            if(gramos1 === 10){
                precio1 = 850;
                console.log("Abono mensual por 10gr $"+abonoMensualGramos+"")
            } else if (gramos1 === 20) {
                precio1 = 800;
                console.log("Abono mensual por 20gr $"+abonoMensualGramos+"")
            } else {
                precio1 = 750;
                console.log("Abono mensual por 30gr $"+abonoMensualGramos+"")
            }
        }else{
            console.log("Lo sentimos el numero ingresado es incorrecto")
            console.log("Gracias por su visita!")
        } 
} */