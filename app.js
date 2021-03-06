//CALLBACKS

// console.log(calculadora(2,4,restar));

// setTimeout(function(){
//     console.log("Hola mundo");
// }, 2000);

//playGround pasar un callback

const doble = (num) => num * 2;
const triple = (num) => num * 3;
const aplicarCallback = (num, operador) => operador(num);

console.log(aplicarCallback(2, triple));

//playGround Hagamos una calculadora
const suma = (num1, num2) =>num1 + num2;
const resta = (num1, num2) =>num1 - num2;
const multiplicacion = (num1, num2) =>num1 * num2;
const division = (num1, num2) =>num1 / num2;

const calculadora = (num1, num2, operacion) => operacion(num1, num2);

//playGround Pasar un callback reloaded
function agregarHttp(url){
    return 'http://' + url;
}

function largoString(cadena){
    return cadena.length;
}
function procesar(lista, callback) {
    const listAux = [];
    for (let index = 0; index < lista.length; index++) {
        listAux.push(callback(lista[index]));  
    }
    return listAux;
}

console.log(procesar(["www.google.com","www.yahoo.com"],agregarHttp))
console.log(procesar(["www.google.com","www.yahoo.com"],largoString))

//METODOS DE ARRAYS II

//map
let notas = [10, 4, 5, 2, 8, 7];

const notasEscala100 = listaNotas => listaNotas.map( value => value * 10);

// console.log(notasEscala100(notas));

const aprobadosNotas = listaNotas => listaNotas.filter( item => item >= 7);

// console.log(aprobadosNotas(notas));

const sumaNotas = listaNotas => listaNotas.reduce((estado, valor) => estado + valor );

console.log(sumaNotas(notas));

notas.forEach( (item, index) => {
    console.log('En la posicion ' + index + ' tengo el valor ' + item)
})

//playGround Filter con números
let estudiantes = [
    {nombre: 'John', promedio: 8.5, aprobado: true},
    {nombre: 'Jane', promedio: 7, aprobado: true},
    {nombre: 'June', promedio: 3, aprobado: false},
]

const aprobados = estudiantes.filter(el => el.aprobado === true)
const desaprobados = estudiantes.filter(el => el.aprobado === false)

console.log(aprobados);
console.log(desaprobados);

//playGround HorariosAtrasados map()

let horariosPartida = [12, 14, 18, 21];

let horariosAtrasados = horariosPartida.map(el => el - 1)

console.log(horariosAtrasados);

//playGround totalVuelltas reduce()
let vueltas = [5, 8, 12, 3, 22]

let totalVueltas = vueltas.reduce((estado, el)=> estado + el);

console.log(totalVueltas);

//playGround lista supermercado foreach()
let listaDeSuperMercado = [
    'Bife de chorizo', 
    'Coca Cola', 
    'Bananas', 
    'Lechuga', 
    'Chimichurri', 
    'Lata de tomates', 
    'Arvejas', 
    'Cereales', 
    'Pechuga de pollo', 
    'Leche'
];

listaDeSuperMercado.forEach(el => console.log(el));

//OBJETO DATE

let fechaActual = new Date(2020, 2, 14);

console.log(fechaActual);

console.log(fechaActual.getDay());
console.log(fechaActual.getDate());
console.log(fechaActual.getMonth());
console.log(fechaActual.getFullYear());

let miCumple = new Date(1991, 8, 11);

console.log(miCumple);
console.log(miCumple.toUTCString());

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre'];

console.log(fechaActual.getFullYear(),  meses[fechaActual.getMonth()], fechaActual.getDate())

//playGround Date un tiempo.
let fecha = new Date();
console.log("Día: "+fecha.getDate())
console.log('Hoy es el día '+ fecha.getDate() +' del mes '+ fecha.getMonth() +' del año '+ fecha.getFullYear(),)

//DESTRUCTURING

let cursos = ['Programacion', 'mkt', 'ux'];

let [programacion, , ux] = cursos;

console.log(cursos);
console.log(programacion);
console.log(ux);

let persona = {
    nombre : 'Daniel',
    edad : '30',
    direccion: 'Mi casa'
};

let {nombre, direccion} = persona;

console.log(persona);
console.log(nombre);
console.log(direccion);

//playGround Destructuring Desestructuremos
let destinosDelMundo = ['Marruecos', 'Bariloche', 'Barcelona', 'China', 'Grecia'];

let [,bariloche, ,china] = destinosDelMundo;

console.log(bariloche, china);

//playGround Desestructuremos la Ferrari
let auto  = {marca: 'Ferrari', kilometros: 31, color: "Rojo"};
let { marca,  color} = auto;

console.log(marca, color);