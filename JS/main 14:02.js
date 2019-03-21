//funciones















// primero se DECLARAN
// con la palabra reservada
// "function"



// luego la llamamos 
// (EJECUTAMOS)
// con su nombre y parentesis


// saludar(); 
// saludar();
// saludar();
// saludar();
// saludar();








// las funciones son un 
// tipo de dato
// (como numeros, strings, booleanos)

// por eso las podemos asignar
// a una variable

// var saludar = function() {
//   console.log('hola');
// }

// llamamos a una funcion anonima
// con el nombre de la variable y los parentesis
// es decir: de la misma manera que si tuviera nombre

// saludar(); 




//retorno de valores




// function saludar() {
//   console.log('hola');
// }
//una funcion puede o no retornar un valor

// esta funcion no retorna un valor

// sumar()

// //llamamos la funcion
// // a ahora vale 3
// // pero nunca lo vimos en la consola

// Podemos hacer console.log
// de la funcion 
// pero no veremos el resultado de a
// la funcion se ejecutara nuevamente
// console.log(sumar())


// console.log(a)




// // para retornar un valor
// // debemos usar la palabra return

// var a = 1
// function sumarConReturn() {
//   return a = a + 2
// }

// // en cambio ahora
// // vemos el resultado de a 
// console.log(sumarConReturn())


// podemos guardar el resultado en 
// una variable!!
// solo si la funcion tiene return
// var resultado = sumarConReturn();
// console.log(resultado)

// si la funcion no tiene return
// y la guardamos en una variable
// veremos undefined
// var a = 1
// function sumar() {
//   a = a + 2
// }

// sumar()
// sumar()
// sumar()
// console.log(a)


// var resultado = sumar()
// console.log(resultado)
// console.log(a)




// cuando las funciones
// retornan un valor
// podemos usar esas funciones
// para darnos un valor que necesitemos



// function usuarioLoggeado() {
//   return false;
// } 
// if (usuarioLoggeado()) { 
//   //ATENCION A LOS PARENTESIS!
//   console.log('Bienvenido usuario a nuestro sitio');
// }


// hacer ejercicio 3 , 6, 8 




// PARAMETROS

//las funciones pueden recibir parametros
// se escriben entre los parentesis
// al declararla, decimos cuantos
// parametros podra recibir

// function mostrarEnConsola(lalal) {
//   console.log(lalal)
// }

// mostrarEnConsola("hola", "chau")

// los parametros funcionan como variables
// debemos decirles que significado tendran
// al momento de llamar a la funcion

// mostrarEnConsola() // esto da undefined tres veces

// mostrarEnConsola("hola", "como", "estas")

// mostrarEnConsola(1, 2, 3)

// mostrarEnConsola(true, false, true)

// mostrarEnConsola("string", 1, true)

// mostrarEnConsola(["array1", "array2", "array3"], "string", 1)



// la idea de los parametros
//es adaptar nuestro codigo
//a diferentes situaciones

//por ejemplo, no necesito saber
// el nombre de todos mis usuarios
// si uso parametros en la funcion saludar()

// var nombre = prompt("Cual es tu nombre", "")


// function saludar(nombreDelUsuario) {
//   console.log('¡Hola ' + nombreDelUsuario + '!');
// }

// saludar(nombre); // Muestra en consola: ¡Hola Ada!




//pero de esta manera 
//mi funcion solo sirve para console.log

// RETURN me hace la funcion
// aun mas flexible 

// var saludar = function(nombreDelUsuario) {
//   return '¡Hola ' + nombreDelUsuario + '!';
// }
// console.log(saludar("Ada"));
// alert(saludar("Grace"));
// document.write(saludar("Hedy"));
// var saludo = saludar("Pini")

// document.write(saludo)




// el orden de los parametros
// es muy importante

// var saludar = function(nombreDelUsuario, edad) {
//   console.log('¡La edad del usuario es ' + edad)
// }






// saludar('Ada', 27); 
// saludar(35, 'Grace');




// hacer ejercicio 10






// var nombre = prompt("Cual es tu nombre?", '')
// var edad = prompt("cual es tu edad?", '')


// function concatenar(caca, pis) {
//   return caca + pis
// }

// console.log(concatenar(nombre, edad))