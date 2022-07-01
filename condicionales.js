/* // EJEMPLO 1
alert('Ejemplo 1: Calculadora');
const operacion = prompt('¿Qué operación desea realizar? (Ingrese el número de la opción)\n1 - Suma\n2 - Resta\n3 - Multiplicación\n4 - División');
const num1 = parseFloat(prompt('Ingrese el primer número'));
const num2 = parseFloat(prompt('Ingrese el segundo número'));

if (operacion === '1') {
    alert(num1 + ' + ' + num2 + ' = ' + (num1 + num2)); // En este caso son necesarios los paréntesis para que no concatene y realice la suma.
} else if (operacion === '2') {
    alert(num1 + ' - ' + num2 + ' = ' + num1 - num2);
} else if (operacion === '3') {
    alert(num1 + ' * ' + num2 + ' = ' + num1 * num2);
} else if (operacion === '4') {
    alert(num1 + ' / ' + num2 + ' = ' + num1 / num2);
} else {
    alert('Opción incorrecta');
}


// EJEMPLO 2 CON IF ANIDADO
alert('Ejemplo 2: Verificador de licencia de conducir');
const edad = parseInt(prompt('Ingrese su edad'));

if (edad >= 18) {
    alert('Felicitaciones, puede conducir');
} else if (edad >= 16) {
    const emancipado = prompt('¿Usted está emancipado? (Ingrese si/no)'); // Sólo se pregunta si está emancipado si es menor a 18 pero mayor o igual a 16
    if (emancipado === 'si') {
        alert('Puede conducir ya que está emancipado');
    } else {
        alert('No puede conducir');
    }
} else {
    alert('No puede conducir');
}

// EJEMPLO 3 CON OPERADORES
alert('Ejemplo 3: Login');
const usuario = prompt('Ingrese su usuario (psst: admin)');
const contrasenia = prompt('Ingrese contraseña (psst: 1234)');

if (usuario === 'admin' && contrasenia === '1234') { // Este if sólo se ejecuta si AMBAS condiciones se cumplen.
    alert('Bienvenido a COMPUMUNDOHIPERMEGARED');
} else {
    alert('El usuario o la contraseña son incorrectas');
} */