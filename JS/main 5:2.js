
// Ejercicio 69
// Mostrar en consola la suma
// parcial de todos los números que van 
//desde 0 hasta 1000 utilizando la estructura 
//while.


// 0 + 1 = 1
// 0 + 1 + 3 = 4
// 0 + 1 + 3 + 5 = 9
// 4 + 5 = 9



// 9 + 7 = 16


// var a = 1 
// var b = 3
// while ( b <= 1000 ) {
// console.log("a", a, "b", b, "resultado", a + b) 
// a = a + b
//   b +=  2
// }









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


// 1 + 1
// 1 + 3
// 1+ 3 + 5
// 1 + 3 + 5 + 7




// var total = 0
// var incremento = 1

// while (incremento < 100) {
//   console.log(total, incremento, total + incremento)
//   total = total + incremento
//   incremento = incremento + 2
// }



// while () {
//   if (n%2 !== 0) {
//   console.log(a+b)
//     a = a+b
//   }
//   a++
// }








// Ejercicio 71
// Mostrar en consola la tabla de multiplicar del 9 


// var multiplicador = 1 
// while (multiplicador <= 10) {
//   console.log(9*multiplicador)
//   multiplicador++
// }








// var numero = 1
// var incremento = 9

// while (numero <= 10) {
//   console.log(numero*incremento)
//   numero++
// }












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



// var numero = 5;
// var numerodos = 5
// numerotres
// var f = "*";

// while ( numerodos >= 0   ) {

// while (numero >= 0) {
//     f = f + "*";
//     numero = numero - 1;
// }
// numero = numerodos
// numero--
//  }












// Ejercicio 73
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


// var a = "*************"

// while (a.length >= 0) {
//   console.log(a.slice(0))

// }









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


// var a = ""













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


// var a = 0
// var b = 1
// var c = 1;
// var contador = 1
// while (contador <= 100) {
//   console.log(a)
// a = b
// b = c
// c = a + b
// contador++
// }

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

// var numero = 1000

// // break en estructuras de repeticion
// for (var i = 0; i < 1000; i++){
//   if (i < 6) {
//     console.log(i);
//   }
//    else {
//     break;
//   }
// }



// var nombre= "Malena"

// var array = ["A", 1, true, nombre]
// console.log(array[2])

// // console.log(array[0])
// // console.log(array[1])

// for (var index = 0; index < array.length; index++) {



//  }





// }



// var numero = 1
// var nombre = "Malena"

// var arrayDeNombres = ["Malena", "Vicki", "Luciana", "Pini"]

// console.log(arrayDeNombres.length - 1)

// // console.log("posicion 1 del array", arrayDeNombres[1])

// // console.log("longitud del array ", arrayDeNombres.length)

// // console.log(arrayDeNombres[arrayDeNombres.length - 1])

// console.log(arrayDeNombres.pop())

// console.log(arrayDeNombres)




// for (let i = 10; i < 0; i--) {
// console.log(i)

// }




// var alumnas = [
//   "Maria", 
//   "esther", 
//   "consuelo", 
//   "Barbara", 
//   "Luisana", 
//   "pancracia", 
//   "luzbelita", 
//   "Jimena"
//]


// let suma = 0
// for (var i = 0; i <=1000;i+=2) {

//   if (i == 2 * 10) {
//     break
//   }
//  else { suma += i}
//  console.log(i, suma);

// }

// for(var i=0; i<=1000;i++){
//   var suma=i+1
//   if(i+suma<=100){
//       console.log("Primer nro: ",i, "Segundo nro: ", suma, "la suma es: ",  i+suma )
//   }
// }


// for(var i=0;i<=10000;i++){
//     if(i%2==0 && i<20){
//         console.log("el primer numero par es:  ", i, 
//         "El segundo numero par es: ", i+2,
//         " La suma entre los dos es: ",  i+(i+2))
//     }
// }




// var a = '';
// var base = 15;
// var resta = 15;

// while (base > 0){

//    while (resta > 0){
//        a = a + '*';
//        resta--
//    }
//    console.log(a);
//    resta = base - 1
//    a = ''
//    base--
// }

// var i, j;
// var a = "*"

// for (i = 15; i >= 0; i--) {
 
//   for (j = i; j >= 0; j--) {
//     a = a + "*"
//   }
//   console.log(a)
//   a = "*"
// }


// var a = '';

// for(var base=15;base>0; base--){

//    for(var resta=15;resta>0;resta--){
//        a=a+'*';
//    }
//    console.log(a);
//    a = '';
// }


// var jugadorUno;
// var jugadosDos;

// var ganadorUno = 0;
// var ganadorDos = 0;

//     while(ganadorUno < 2 && ganadorDos < 2){

//         jugadorUno = prompt('jugador Uno: piedra, papel o tijera');
//         jugadorDos = prompt('jugador Dos: Piedra, papel o tijera');

//         if ((jugadorUno ==='piedra' || jugadorUno ==='papel' || jugadorUno ==='tijera' )&& (jugadorDos ==='piedra' || jugadorDos ==='papel' || jugadorDos ==='tijera' )){

//             if(jugadorUno ==='piedra' && jugadorDos ==='piedra'){

//                 console.log ('Empate'); 

//             } else if(jugadorUno ==='papel' && jugadorDos ==='papel'){

//                 console.log ('Empate'); 

//             } else if(jugadorUno ==='tijera' && jugadorDos ==='tijera'){

//                 console.log ('Empate'); 

//             } else if(jugadorUno ==='piedra' && jugadorDos ==='tijera'){

//                 ganadorUno = ganadorUno + 1;

//                 console.log ('jugador Uno: '+ jugadorUno +' jugador Dos: '  + jugadorDos);
//                 console.log ('Ganador partida: jugador Uno');

//             } else if(jugadorUno ==='piedra' && jugadorDos ==='papel'){

//                 ganadorDos = ganadorDos + 1;

//                 console.log ('jugador Uno: '+ jugadorUno +' jugador Dos: '  + jugadorDos);
//                 console.log ('Ganador partida: jugador Dos');

//             } else if(jugadorUno ==='tijera' && jugadorDos ==='piedra'){

//                 ganadorDos = ganadorDos + 1;

//                 console.log ('jugador Uno: '+ jugadorUno +' jugador Dos: '  + jugadorDos);
//                 console.log ('Ganador partida: jugador Dos');

//             } else if(jugadorUno ==='tijera' && jugadorDos ==='papel'){

//                 ganadorUno = ganadorUno + 1;

//                 console.log ('jugador Uno: '+ jugadorUno +' jugador Dos: '  + jugadorDos);
//                 console.log ('Ganador partida: jugador Uno');

//             } else if(jugadorUno ==='papel' && jugadorDos ==='piedra'){

//                 ganadorDos = ganadorUno + 1;

//                 console.log ('jugador Uno: '+ jugadorUno +' jugador Dos: '  + jugadorDos);
//                 console.log ('Ganador partida: jugador Uno');

//             } else if(jugadorUno ==='papel' && jugadorDos ==='tijera'){

//                 ganadorDos = ganadorDos + 1;

//                 console.log ('jugador Uno: '+ jugadorUno +' jugador Dos: '  + jugadorDos);
//                 console.log ('Ganador partida: jugador Dos');
//             }


//         } else{
//             console.log('Haceme caso! Dale F5 y arrancá de nuevo.');

//             ganadorUno = 666;
//         }

//     }

//     if(ganadorUno == 2){

//         Console.log('Ganador jugador Uno');

//     } else if(ganadorDos == 2){

//         console.log('Ganador jugador Dos');

//     }




// var a = "*"
// var b = " "

// var n = 5
// var m = 5

// for (let i = 0; i < 5; i++) {

//   for (let j = 0; j < 5; j++) {
//   a = a + "*"
//   }
//   console.log(a)
//   a = "*"

// }




// var a = " "
// var b = "*"
// var c = ""
// for (let i = 0; i < 8; i++) {


//   if (i%2 == 0) {
// for (var j = 0; j < 8; j++) {
//    if (j%2 == 0) {
//        c = c + a 
//    } else {
//        c = c + b 
//    }
// }
//   }
//   else {
//     for (var z = 0; z < 8; z++) {
//       if (z%2 == 0) {
//           c = c + b 
//       } else {
//           c = c + a
//       }
//    }
//   }
// console.log(c)
// c = ""
// }

var alumnas = ['Maria', 'esther', 'consuelo', 'Barbara', 'Luisana', 'pancracia', 'luzbelita', 'Jimena'];
var iniciales = '';
var nombres = '';

for (var i = 0; i < alumnas.length; i++) {
   iniciales = alumnas[i].slice(0,1);
   iniciales = iniciales.toUpperCase();
   nombres = alumnas[i].slice(1);
   console.log(iniciales+nombres);
   iniciales++;
   console.log(iniciales)
}