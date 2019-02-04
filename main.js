

//propiedades y metodos de strings 


// propiedad LENGTH
//saber cuántos caracteres 
// tiene un string.
// Devuelve un NUMERO 
//con la cantidad de caracteres 

// var lalala = "Hola";
// var cantidadDeCaracteres = lalala.length;
// console.log(cantidadDeCaracteres);










// tambien puede utilizarse sin declarar 
// // una nueva variable
// var otroTexto = 'Aditasss!';
// console.log(otroTexto.length);











// var textoConEspacios = 
// "    var numero = 2    !        &       )"



// console.log(textoConEspacios.length);









// Mostrar en consola el siguiente mensaje:
// Mi nombre es *nombre* y tiene 
// *cantidad de caracteres* letras


// Ejemplo: mi nombre es Malena 
// y tiene 6 letras 











// var nombre = "Malena"
// console.log("Mi nombre es ", 
// nombre, " y tiene ", nombre.length, " letras")






// metodos

// los metodos reciben algo y 
//devuelven otra cosa
// ponemos entre parentesis lo 
//que queremos 
//que el metodo reciba

// a eso lo llamamos "parametros"

// sintaxis:
// nombreDeLaVariable.metodo(parametros)

// a veces no es necesario el nombre de la variable
// a veces el metodo no recibe parametros







// // // Concat
// var saludo = 'Hola ';
// var nombre = 'Ada';

// // Concatenamos los strings 
// // usando el método concat

// console.log(saludo.concat(nombre));












//Tambien se pueden encadenar
// varios strings, 
// // separandolos con coma
// Ejercicio: lograr que la consola diga 
// "Hola Marina, Sofia y Luciana"











// var saludo = "Hola ";
// var nombre = "Marina, ";
// var otroNombre = "Sofia ";
// var otroNombreMas = "y Luciana";
// console.log(saludo.concat(nombre, otroNombre, otroNombreMas))



// var saludo = "Hola";
// var nombre = "Marina";
// var otroNombre = "Sofia";
// var otroNombreMas = "Luciana";
// var espacio = " "
// var coma = ","
// var y = " y "
// console.log(saludo.concat(espacio, nombre, coma, espacio, otroNombre, espacio, y, espacio, otroNombreMas))


// console.log(saludo.concat(", ", nombre))










// Mayúsculas y minúsculas
// var saludo = 'HOLA';
// var aditas = 'aditas';
// var messenger = "hOlA aDiTaS"

// var textoEnMinusculas = saludo.toLowerCase();
// var textoEnMayusculas = aditas.toUpperCase();
// var escribimosNormal = messenger.toLowerCase();

// console.log("texto en minusculas", textoEnMinusculas)
// console.log("texto en mayusculas", textoEnMayusculas)
// console.log("texto en minusculas", escribimosNormal)





//Tambien podemos hacerlo 
// sin declarar la variable
// console.log("HOLA ADITAS".toLowerCase())








// Métodos de Number




// parseInt
// convierte un string a 
// un numero ENTERO
// devuelve un numero

// var numero = "3"
// console.log(parseInt(numero))

// var numeroPi = "3.14"
// console.log(parseInt(numeroPi))







// si el string no es convertible 
//a numero??

// var otroNumero = "hola"
// console.log(parseInt(otroNumero))












//  parseFloat
// Toma como parametro un string 
// y devuelve un número decimal
// el numero se escribe a la manera inglesa 
// (punto en lugar de coma)

// var piEnTexto = '3.14';
// var pi = parseFloat(piEnTexto);
// console.log(pi);





// toString
// Recibe un numero, retorna un string 
// con el valor del número

// var numero = 4;
// var numeroEnString = numero.toString();
// console.log(numeroEnString)









// atencion! 
// recordemos que el signo + 
// significa cosas distintas
// si estamos lidiando con numeros 
// o con strings

// si se trata de numeros, SUMA
// si se trata de strings, CONCATENA

// si se trata de ambos
// CONVIERTE A STRING EL NUMERO
//  Y CONCATENA 








//ejercicio
//dadas las siguientes variables

// var nueve = 9;
// var nueveEnTexto = "9";
// var dos = 2;
// var dosEnTexto = "2";

// Imprimir en consola:
// 11
// 92
// 911










// IF

// var contrasena = "123"
// var nombreUsuario = "lala"

// if (contrasena.length >= 10 && contrasena.length <= 40) {
//   console.log("tu password es correcto")
// }
// else if (contrasena.length > 40) {
//   console.log("tu password es muy largo")
// } 
// else {
//   console.log("tu password no es valido")
// }



















// if

// if (condition) {

// }

// en la condicion debe ir un BOOLEANO
// -- caso contrario javascript fuerza 
// la interpretacion (valores truthy y falsy que veremos despues)









//operador ternario 
// var numero = 10;

// numero == 10 
// ? console.log("es diez") 
// : console.log("no es diez");

//es exactamente igual a : 

// if (numero == 10) {
//   console.log("es diez") 
// } else {
//   console.log("no es diez")
// };










//switch

// var nombre = 'Marta';
// var mensaje = null

// switch (nombre) {
//   case 'Marta':
//     mensaje = 'es Marta';
//     break;
//   case 'Felipa':
//     mensaje = 'es Felipa';
//     break;
//   case 'Xime':
//     mensaje = 'es Xime';
//     break;
//   case 'Belu':
//     mensaje = 'es Belu';
//     break;
//   default:
//      mensaje = 'El nombre de la usuaria no es Marta, Felipa, Xime o Belu';
// }
// console.log(mensaje)



















