/* crear la variable puntos y nivel, si los puntos son menores a 1000 y el nivel es menor a 3, mostrar por consola, "es nuevo", si lo puntos son mayores a 1000 y el nivel es 4, mostrar por consola "es bueno jugando" y si los puntos son mayores a 1000 pero el nivel es mayor a 4, mostrar por consola "es muy bueno jugando" */


/* let puntos = 500
let nivel = 4

if(puntos < 1000 && nivel <= 3){
    console.log("es nuevo")
} 
if(puntos > 1000 && nivel == 4){
    console.log ("es bueno jugando")
}
if(puntos > 1000 && nivel > 4){
    console.log ("es MUY bueno jugando")
} */

/* var edad si la edad es menor a 18, va a mostrar por consola es menor de edad. Si el usuario tiene entre 18 y 21, va a mostrar es mayor de edad pero no puede conducir. Si el usuario es mauor o igual de 21, entonces va a decir es mayor de edad y puede conducir */ 
/*  let edad = 19

if(edad <18){
    console.log ("es menor de edad")
}
else if(edad >=18 && edad < 21){
    console.log ("es mayor de edad pero no puede conducir")
}  
else if(edad >= 21){
    console.log ("es mayor de edad y puede conducir")
} 
 */
/* Crear una variable llamada decision que contenga un numero del 1 al 4. Si el numero es 1 entonces mostrar por consola "maria", si el numero es 2 mostrar por consola "pedro", si el numero es 3 mostrar por consola "lucas", si el numero es 4 mostrar por consola "juan" */

/* let decision = prompt()


switch(decision){
    case "1":
        alert("maria")
        break
    case "2":
        alert("pedro")
        break
    case "3": 
        alert("lucas")
        break
    case "4": 
        alert("juan")
        break
    default :
    alert ("dato no valido")
} */
/* Solicitar al usuario una operacion, un numero y otro numero. Si el usuario eligio la operacion "+" mostrar por alerta la suma de los numeros. Si eligio "-" mostrar por alerta la resta de los numeros */

/* let operacion = prompt("elegi operacion + o - * o /")
if (operacion == "+" || operacion == "-" || operacion == "*" || operacion == "/"){
    let numero1 = prompt("elegi un numero")
let numero2 = prompt("elegi un numero")

if (operacion == "+"){
    alert (Number (numero1) + Number (numero2))
}
else if (operacion == "-"){
    alert (Number (numero1) - Number (numero2))
}
if (operacion == "*" || operacion == "x"){
    alert (Number (numero1) * Number (numero2))
}
if (operacion == "/"){
    alert (Number (numero1) / Number (numero2))
}
}

else{
    alert ("Ingresaste un dato no valido")
} */

/*Solicitar al usuario un (1) nombre.
Si el mismo es igual a otro nombre almacenado en una variable, realizar una salida por alerta con el mensaje “Fui yo”. 
Caso contrario, la salida será “Yo no fui”

Solicitar al usuario una (1) tecla.
Si se presiona “y” (minúscula), o “Y” (mayúscula), realizar una salida por alerta con el mensaje “Correcto”. Caso contrario, la salida será “Error”.   -> 

Solicitar al usuario cuatro (4) productos de almacén. Si todos los elementos fueron cargados, realizar una única salida compuesta por el listado de productos. Caso contrario, la salida será “Error: Es necesario cargar todos los productos”.   -> 
*/
/* 

let nombre = "flor"

if ( prompt("elegi tu nombre flor, maxi, nati y juan") == nombre ){
    alert("Fui yo")
}
else{
    alert("Yo no fui")
}
 */
/* let decision = prompt("ingrese 'y'")

if (decision == "y" || decision == "Y"){
    alert("Correcto")
}
else{
    alert("inorrecto")
}
 */
/* Dado una cadena de texto, imprimir "La cadena es mayor a 10 caracteres" si la longitud de la cadena es mayor a 10, de lo contrario imprimir "La cadena es menor o igual a 10 caracteres". */
/* var 
prompt( "ingresa una cadena de texto" )

if ( cadena count(>10) caracteres){
    alert("La cadena es mayor a 10 caracteres")
}
else{
    alert("La cadena es menor o igual a 10 caracteres")
}
 */



/* let texto = prompt()

if ( texto.length >10 ){
  alert("la cadena es mayor a 10 caracteres")
}
else if ( texto.length ===10 ){
    alert("la cadena es igual a 10 caracteres")
}
else {
    alert("La cadena es menor o igual a 10 caracteres")
} */







/*Dada una cadena de texto, imprimir "La cadena es una dirección de correo electrónico válida" si la cadena es una dirección de correo electrónico válida, de lo contrario imprimir "La cadena no es una dirección de correo electrónico válida". */

/* Dada una cadena de texto, imprimir "La cadena contiene la letra 'a'" si la cadena contiene la letra 'a', de lo contrario imprimir "La cadena no contiene la letra 'a'". */

/* let texto = prompt ()

if(texto.includes("a")){
    alert("La cadena contiene la letra 'a'")
}
else{
    alert("La cadena no contiene la letra 'a'")
}
 */

/* Dada una cadena de texto, reemplazar todas las apariciones de la letra 'a' con la letra 'x' y imprimir la nueva cadena.


/* let texto = prompt ()

    alert(texto.replaceAll("a", "x"))

 */

/*Dada una cadena de texto, imprimir "La cadena es un número" si la cadena es un número válido, de lo contrario imprimir "La cadena no es un número". */

/* let texto = "hola"

if(!isNaN(texto)){
    alert("La cadena es un número")
}
else{
    alert("La cadena no es un número")
} */

/*Dada una cadena de texto, imprimir "La cadena es una dirección de correo electrónico válida" si la cadena es una dirección de correo electrónico válida, de lo contrario imprimir "La cadena no es una dirección de correo electrónico válida". si tiene @ y .com es direccion de correo valida*/

/* let texto = "hola@holacom"

if (texto.includes("@") && texto.includes(".com")){
    alert("La cadena es una dirección de correo electrónico válida")
}
else{
    alert("La cadena no es una dirección de correo electrónico válida")
} */

/* for( let contador=50; contador <=100; contador = contador +1){
    console.log(contador)
}

hacer un decrementador de 10 a 0 */

/* for(let i=10; i>=0; i--){
    console.log(i)
} */

//hacer 10 mensajes por consola que me digan "hola mundo"

/* for(let i=0; i<10; i++){
    console.log("hola mundo")
}
 */


/*hacer 3 solicitudes de datos al usuario e ir guardando las respuestas en una variable que se llame resultado. Al finalizar el/ bucle debera mostrarse el resultado por consola*/
/* let resultado = ""


for(let i=0; i<3; i++){
 let solicitud = prompt()
 resultado = resultado + solicitud 
}
alert(resultado) */


/* Solicitar decision al u. si la decision es calculadora, ejectuar el algortimo de la calculadora. si no, finalizar el bucle 
let operacion = prompt("elegi operacion + o - * o /")
if (operacion == "+" || operacion == "-" || operacion == "*" || operacion == "/"){
    let numero1 = prompt("elegi un numero")
let numero2 = prompt("elegi un numero")

if (operacion == "+"){
    alert (Number (numero1) + Number (numero2))
}
else if (operacion == "-"){
    alert (Number (numero1) - Number (numero2))
}
if (operacion == "*" || operacion == "x"){
    alert (Number (numero1) * Number (numero2))
}
if (operacion == "/"){
    alert (Number (numero1) / Number (numero2))
}
}

else{
    alert ("Ingresaste un dato no valido")
}
 */

/* let decision = prompt ("escribi calculadora si deseas utilizarla")

while(decision == "calculadora" ){
    let operacion = prompt("elegi operacion + o - * o /")
    if (operacion == "+" || operacion == "-" || operacion == "*" || operacion == "/"){
        let numero1 = prompt("elegi un numero")
    let numero2 = prompt("elegi un numero")
    
    if (operacion == "+"){
        alert (Number (numero1) + Number (numero2))
    }
    else if (operacion == "-"){
        alert (Number (numero1) - Number (numero2))
    }
    if (operacion == "*" || operacion == "x"){
        alert (Number (numero1) * Number (numero2))
    }
    if (operacion == "/"){
        alert (Number (numero1) / Number (numero2))
    }
    }  
    decision = prompt ("escribi calculadora si deseas utilizarla")
} */

// Solicitar nombres y mostrarlos por alerta hasta que el usuario escriba pepe

/* let nombre = prompt ("Ingresa un nombre")

while (nombre !="pepe"){
    alert (nombre)
    nombre = prompt ("Ingresa un nombre")
} */

// concatenar cada nombre en un string que se llame nombres

/* let nombre = prompt ("Ingresa un nombre")
let nombres =""

while (nombre !="pepe"){
    nombres += nombre
    nombre = prompt ("Ingresa un nombre")
} */

//Crear un personaje que tenga un color de pelo, nombre, edad, dinero, estaVivo

/* const personaje ={
    colorDePelo : "./sarasa.png",
    nombre : "juan",
    edad: 10,
    dinero: 500,
    estaVivo: true
}

/crear un mensaje por consola que diga mi personaje se llama "nombre" tiene "edad" años y cuenta con $"dinero" */



const personaje ={
    colorDePelo : "./sarasa.png",
    nombre : "juan",
    edad: 10,
    dinero: 500,
    estaVivo: false
}
console.log( "Mi personaje se llama " + personaje.nombre + " tiene " + personaje.edad + " años y cuenta con $ " + personaje.dinero)


//si esta muerto me teien qeu mostrar que el personaje ha muerto

/*if(personaje.estaVivo){
    console.log( "Mi personaje se llama " + personaje.nombre + " tiene " + personaje.edad + " años y cuenta con $ " + personaje.dinero)

}
else{
console.log("el personaje ha muerto")
} */
//crear un segundo personaje con las mismas caracteristicas, y que este le de 100 pesos
/* 
const personaje2 ={
    colorDePelo : "./sarasa.png",
    nombre : "juan",
    edad: 10,
    dinero: 500,
    estaVivo: false
}
personaje2.dinero = personaje2.dinero - 100
personaje.dinero = personaje.dinero + 100 */

//el personaje 2 le trasnfiere 600 pesos al P1, pro el P2 no se va a quedar con un dinero en - y se le v a crear una nueva propiedad eu se va a llamar deuda, que va a tener un valor de 100. 

/* const personaje2 ={
    colorDePelo : "./sarasa.png",
    nombre : "juan",
    edad: 10,
    dinero: 600,
    estaVivo: false

}
personaje2.dinero = personaje2.dinero - 100
personaje.dinero = personaje.dinero + 100

personaje2.colorFavorito= "rojo"
personaje2.deuda =100
personaje2.dinero = 0
personaje.dinero = personaje.dinero + 600 */
