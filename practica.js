//PRACTICA
alert("Bienvenida/o! Le informamos que necesita ser mayor de edad y poseer reprocann para poder inscribirse")
alert("Ambos seran corroborados con el numero de DNI")
let dni = Number(prompt("Ingrese su DNI (sin puntos)"))
while(dni == "."){
    console.log("Ingrese su DNI (sin puntos)")
};
if(dni >= 45000000){
    console.log("Lo sentimos es menor de edad")
} else {
    let nombre = prompt("Ingrese su nombre");
    console.log("Hola "+nombre+" podra acceder a:");
    const abonoMensual = (gramos, precio) => gramos * precio;
    let membresia = Number(prompt("Ingrese el numero del tipo de membresia que desea \n1 - Premium \n2 - Clasica\n3 - Gratuita"));
        if(membresia === 3 ){
            console.log("Contenido de la web y primer asesoramiento gratis")
        } else if (membresia === 2){
            console.log("Beneficios exclusivos, hasta 15gr mensuales, asesoramiento gratis por un mes y contenido de la web")
            const gramos1 = Number(prompt("Ingrese la cantidad de gramos que desea 5,10 o 15"));
            if(gramos1 === 5){
                console.log("Abono mensual por 5gr $"+abonoMensual (gramos1, 900)+"")
            } else if (gramos1 === 10) {
                let abonoMensualGramos = abonoMensual (gramos1, 850);
                console.log("Abono mensual por 10gr $"+abonoMensualGramos+"")
            } else {
                console.log("Abono mensual por 15gr ${abonoMensual (15, 800)}")
            }
        } else if (membresia === 1){
            console.log("Asesoramiento y cursos gratiutos, hasta 30gr mensuales, beneficios premium, contenido de la web")
            const gramos1 = Number(prompt("Ingrese la cantidad de gramos que desea 10,20 o 30"));
            precio1 = 900;
            const abonoMensualGramos = abonoMensual (gramos1, precio1);
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
}