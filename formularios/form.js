// // Formularios
// // Para poder interactuar con un formulario hay que seleccionarlo
// // Ejemplo:

// var form = document.querySelector('form');

// // Otra forma es por medio del objeto document y la propiedad forms
// // retorna una colección de todos los formularios que tiene el documento
// // Ejemplo:

//   var formulario = document.forms[0];
//   var formularios = document.forms;

// // tienen un atributo llamado elements 
// // con la colección de elementos del formulario seleccionado
// // Ejemplo:

// var form = document.querySelector('form');
// var elementos = form.elements;
// // retorna el elemento del formulario que está en el índice indicado
// var elemento = form.elements[indice];


// El objeto formulario tiene atributos como action, target, encoding y method
// Al ser un objeto de Javascript podemos acceder a todos ellos de la misma forma que lo hacemos con cualquier otro objeto
// action: Establece la URL del documento que va a procesar la información enviada por el formulario
// encoding: Establece el tipo con el que se va a encriptar los datos, solo en metodo POST
// method: Establece cual es el método de HTTP que se va a utilizar para enviar los datos. Puede ser get o post
// name: Establece el nombre del formulario
// Ejemplo:

// <form action="guardar_usuario.html" method="get" enctype="application/x-www-form-urlencoded" name="login"></form>



// Los elementos del formulario tienen un atributo llamado value
//  nos permite establecer u obtener el valor de un elemento
// inputs de texto, password, hidden
// checkbox
// radio
// textarea
// Ejemplo:

// <form action="guardar_usuario.html" method="get" enctype="application/x-www-form-urlencoded" name="login">
//   <input type="text" id="username" name="username" />
//   <input type="password" id="pass" name="pass" />
//   <input type="submit" name="submit" value="Enviar" />
// </form>


// var form = document.querySelector('form');
// var username = form.elements[0].value;

// console.log(username); // Obtenemos un string vacío
// username = 'pepe'; // Establecemos el valor del input username en pepe
// console.log(username)





// Por medio del evento submit del formulario podemos mandar los datos a otro documento
// Podemos cortar la ejecución del submit de un formulario retornando un valor false
// Ejemplo:

// <form action="guardar_usuario.html" method="get" enctype="application/x-www-form-urlencoded" name="login">
//   <input type="text" id="username" name="username" />
//   <input type="password" id="pass" name="pass" />
//   <input type="submit" name="submit" value="Enviar" />
// </form>
// var form = document.querySelector('form');

// form.onsubmit = function() {
// 	// Este evento maneja la forma en que se va a submitear el formulario
//   // Retornamos false para evitar que se ejecute el evento submit del formulario
//   return false;
// }



// form.onsubmit = function(evento) {
//   evento.preventDefault();
 
// 	for (var i = 0; i < form.elements.length; i++) {
// 	console.log(form.elements[i].value)
// 	}
// }



// //select

// // podemos utilizar la propiedad selectedIndex
// // retorna el índice numérico de la opción seleccionada
// // options retorna la colección de elementos options
// // entre ambos, y con value, podemos obtener
// // la opcion seleccionada 
// // Ejemplo:

// // <form action="guardar_usuario.html" method="get" enctype="application/x-www-form-urlencoded" name="login">
// //   <select name="paises" id="paises">
// //     <option value="ar">Argentina</option>
// //     <option value="br">Brasil</option>
// //     <option value="cl">Chile</option>
// //   </select>
// // </form>
// var select = document.querySelector('select');


// form.onsubmit = function(evento) {
//   evento.preventDefault();
 
// console.log(select.options);  // retorna la colección de elementos options
// console.log(select.selectedIndex);  // retorna el índice del valor seleccionado

// var indice = select.selectedIndex
// select.options[indice]; // retorna el option seleccionado
// console.log(select.options[indice]); // retorna el elemento seleccionado.
// console.log(select.options[indice].value); // retorna el valor del elemento seleccionado.

// }