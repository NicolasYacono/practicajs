/* function porCadaUno(arr, funcion) {
    for (let i = 0; i < arr.lenght; i++){
        funcion(arr[i]);
    }
}
let myArray = [128, 528,7,7,128];
porCadaUno(myArray, console.log); */
//funcion : no se que hace y no tiene nada que ver. Es mas avanzado no hacer tanto lio con esto

//EN TODAS LAS SIGUIENTES FUNCIONES DE ALTO ORDEN LO QUE HACE ES RECORRER EL ARRAY
//forEach
/* const myArray = [1,2,3,4,5];

myArray.forEach((x) => {
    console.log(x);
}); */
//Le aplica la funcion a cada item del array


//Find, RECORRE EL ARRAY BUSCANDO ALGO EN PARTICULAR
/* const cursos = [
    { nombre: 'Javascript', precio: 15000 },
    { nombre: 'ReactJS', precio: 22000 },
    { nombre: 'backend', precio: 100 },
  ];
  
  const resultado = cursos.find((item) => item.nombre === 'backend');
  console.log(resultado); */

  //FILTER
 /*  const cursos = [
    { nombre: 'Javascript', precio: 15000 },
    { nombre: 'ReactJS', precio: 22000 },
    { nombre: 'backend', precio: 100 },
  ];
  
  const resultado = cursos.filter((item) => item.nombre.includes('JS')); // => item.precio > 15000)
console.log(resultado); */
//quedan solo los que incluyen JS en algun lugar del nombre // los items cuyo precio es mayor a 15000.
  
//SOME es igual pero te devuelve un valor booleano, true si esta false si no esta.

//MAP, se usa para formatear arrays y dejarlos mas cortos, deja solo lo que les solicitas.
/* const cursos = [
    {nombre: 'Javascript', precio: 15000},
    {nombre: 'ReactJS', precio: 22000},
    {nombre: 'AngularJS', precio: 22000},
    {nombre: 'Desarrollo Web', precio: 16000},
]

const nombres = cursos.map((item) => item.nombre)
console.log(nombres) */
// [ 'Javascript', 'ReactJS', 'AngularJS', 'Desarrollo Web' ]

//REDUCE
/* const miCompra = [
    {nombre: 'Javascript', precio: 15000},
    {nombre: 'ReactJS', precio: 22000},
    {nombre: 'AngularJS', precio: 22000},
    {nombre: 'Desarrollo Web', precio: 16000},
];
//internamente hace 
// cant = 0
//cant = cant (0) + 15000
//cant = 0 + 15000 + 22000
const total = miCompra.reduce((cant, item) => cant + item.precio, 0); //El 0 es desde donde arranca a acumular / sumar
console.log(total); */

//SORT, LO HACE SOBRE EL MISMO, orden por orden alfabetico los strings (mayor menor)
/* const items = [
    { name: 'Pikachu', price: 21 },
    { name: 'Charmander', price: 37 },
    { name: 'Pidgey', price: 45 },
    { name: 'Squirtle', price: 60 }
  ]
items.sort((a, b) => {      //A Y B SON ITEMS
    if (a.name > b.name) {
        return 1; // 1 seria derecha -1 izquierda, los pasa y va ordenando
    }
    if (a.name < b.name) {
        return -1;
    }
    // a es igual a b
    return 0;
}) */

//MATH /MIN & MAX
//MATH SQUARE ROOT, RAIZ CUADRADA
//RANDOM, TIRA NUMERO RANDOM, PRO EJ CREAR ALEATORIEDAD EN UN JUEGO, ES PSEUDORANDOM// math.random tira un numero entre 0 y 1
//DATE, crea una nueva fecha , si no se alcara nada da la fecha de hoy.

