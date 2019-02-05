
// Ejercicio 69
// Crear un documento con el nombre ej69.js
// Mostrar en consola la suma parcial de todos los números que van desde 0 hasta 1000 utilizando la estructura while.





// (0) + 1 = 1
// (0 + 1) + 2 = 3
// (0 + 1 + 2) + 3 = 6
// (0 + 1 + 2 + 3) + 4 = 10
// (0 + 1 + 2 + 3 + 4) + 5 = 15



// 0 + 1 = 1
// 1 + 2 = 3
// 3 + 3 = 6
// 6 + 4 = 10
// 10 + 5 = 15






// inicio de la serie + incremento de 1 = total














// var total = 0
// var incremento = 1

// while (incremento < 10) {
//   console.log(total, incremento, total + incremento)
//   total = total + incremento
//   incremento++
// }












// Ejercicio 70
// Mostrar en consola la suma parcial de 
// todos los números impares que van desde 
// 0 hasta 1000 utilizando la estructura while.

// var total = 0
// var incremento = 1

// while (incremento < 100) {
//   console.log(total, incremento, total + incremento)
//   total = total + incremento
//   incremento = incremento + 2
// }









// Ejercicio 71
// Mostrar en consola la tabla de multiplicar del 9 


// var numero = 1
// var incremento = 9

// while (numero <= 10) {
//   console.log(numero*incremento)
//   numero++
// }












// Ejercicio 72
// Crear un documento con el nombre ej72.js
// Mostrar en consola el siguiente
// dibujo utilizando la estructura while
// *
// **
// ***
// ****
// *****
// ******
// *******
// ********
// *********
// **********
// ***********
// ************
// *************



// ---> primera intuicion:
// var f = "*"
// while ( f.length < 15) {
//  f = f+f
// }
// ------- > 
// *
// **
// ****
// ********
// ****************




// var f = "*";
// var f2 = "*";
// while (f.length < 15) {
//   console.log(f)
//   f = f + f2
// }





// var f = "*";
// var f2 = "*";
// while (f.length < 15) {
//   console.log(f)
//  f = f.concat(f2)
// }



// var numero = 1;
// var f = "*";
// while (numero <= 13) {
  //  console.log(f);
//  f += "*";
// //  // // // f = f + "*"
//     numero++;
// }














// Ejercicio 73
// Crear un documento con el nombre ej73.js
// Mostrar en consola el siguiente dibujo utilizando la estructura while
// *************
// ************
// ***********
// **********
// *********
// ********
// *******
// ******
// *****
// ****
// ***
// **
// *


// var contador = 5;
// var acumulado = "";
// var estrellita = "******";

// while (contador>0) {
//    acumulado = estrellita.slice(0,contador);
//    console.log(acumulado);
//    contador--;
// }

// var numero = 0;
// var linea = "*************";

// while (numero < linea.length) {
//   var substring = linea.substring(numero);
//   console.log(substring, substring.length)
//   numero++;
// } 











// var a = "";
// var base = 5;
// var resta = 5;

// while (base > 0) {
//   while (resta > 0) {
//     a = a + "*"
//     resta--
//   }
//   console.log(a)
//   resta = base - 1
//   a = ""
//   base--
// }








// Ejercicio 74
// *
// ***
// *****
// *******
// *********
// ***********
// *************

// var numero = 1;
// var items = "**";
// var linea = "*";

// while (numero < 7) {
//   console.log(linea);
//     linea += item;
//     numero++;
// }






// Ejercicio 75
// Fibonacci





// 0 1 1 2 3 5 8 13 







// var a = 0
// var b = 1
// var c = 1


// while (a<100) {
//   console.log(a)
//   a = b
//   b = c
//   c = a+b
// }














// do/while
// siempre se ejecuta al menos una vez y luego pregunta por la condición
// Ejemplo:

// do {
//   // esto se ejecuta al menos una vez
// } while (condicion)


// var numero = 1000;

// do {
//   console.log('número: ', numero);
//   numero++;
// } while (numero < 10)




// ejercicio 67
// Mostrar en consola los números del 
// 100 al 0 utilizando la estructura do/while






// for
// Consiste en 3 partes delimitadas por un ;
// Ejemplo:

// for (iniciarVariable; condicion; alteración) {
//   // se ejecuta siempre y cuando se cumpla la condición
// }

// Primero: declaramos la variable numero y le asignamos el valor 0
// Segundo: escribimos la condición que queremos validar
// Terceo: incrementamos el valor de la variable numero en 1


// for (var numero = 0; numero <= 10; numero++) {
//   console.log(numero);
// }



//ejercicio 96
// Mostrar en consola los números 
// de 10 en 10 desde el 0 hasta el 10000



//break en estricturas de repeticion
// for (var i = 0; i < 1000; i++){
//   if (i < 10) {
//     console.log(i);
//   } else {
//     break;
//   }
// }