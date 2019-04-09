// // Formularios
// // Para poder interactuar con un formulario hay que seleccionarlo
// // Ejemplo:

// var formQuePuseYo = document.querySelector('form');


// // Otra forma es por medio del objeto document 
//y la propiedad forms
// // retorna una colección de todos los formularios
// que tiene el documento
// // Ejemplo:

  // var formularios = document.forms;
  // console.log(document.forms)

  // var formulario = document.forms[0];
  // console.log(formulario)

// // tienen un atributo llamado elements 
// // con la colección de elementos del formulario seleccionado
// // Ejemplo:

// var form = document.querySelector('form');
// var elementos = form.elements;
// console.log(elementos)
// // retorna el elemento del formulario que está en el índice indicado
// var elemento = form.elements[0];
// console.log(elemento)


// // El objeto formulario tiene atributos 
// como action, target, encoding y method
// // Al ser un objeto de Javascript 
// podemos acceder a todos ellos de la misma forma que 
// lo hacemos con cualquier otro objeto

// // action: Establece la URL del documento que 
// va a procesar la información enviada por el formulario

// // encoding: Establece el tipo con el que 
// se va a encriptar los datos, solo en metodo POST


// // method: Establece cual es el método de HTTP 
// que se va a utilizar para enviar los datos.
//  Puede ser get o post


// // name: Establece el nombre del formulario
// // Ejemplo:

// <form action="guardar_usuario.html" method="get" 
// enctype="application/x-www-form-urlencoded" name="login"></form>



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
// // username = 'pepe'; // Establecemos el valor del input username en pepe
// // console.log(username)





// Por medio del evento submit del formulario podemos mandar los datos a otro documento
// Podemos cortar la ejecución del submit de un formulario retornando un valor false
// Ejemplo:

// <form action="guardar_usuario.html" method="get" enctype="application/x-www-form-urlencoded" name="login">
//   <input type="text" id="username" name="username" />
//   <input type="password" id="pass" name="pass" />
//   <input type="submit" name="submit" value="Enviar" />
// </form>
// var form = document.querySelector('form');

// form.onsubmit = function(evento) {
// 	// evento.preventDefault()
// 	// Este evento maneja la forma en que se va a submitear el formulario
//   // Retornamos false para evitar que se ejecute el evento submit del formulario
//   return false;
// }

// var form = document.querySelector("form")
// var passwordCorrecto = "gatitos12"

// form.onsubmit = function(evento) {
//   evento.preventDefault();
// 	var password = document.getElementById("pass")
// 	if (password.value === passwordCorrecto) {
// 		// acciones
// 	}
// 	else {
// 		password.classList.add("error")
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

// var form = document.querySelector("form");
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



// checkbox 

// Los elementos checkbox tienen la propiedad value
// ademas podemos ver si un checkbox está seleccionado: propiedad checked
// retorna un valor boolean

/* <form action="guardar_usuario.html" method="get" enctype="application/x-www-form-urlencoded" name="login">
  <input type="checkbox" name="pet" value="f" checked> Gato
  <input type="checkbox" name="pet" value="m"> Perro
</form> */


// var checkboxes = document.querySelector('checkbox');
// var gato = checkboxes[0];
// var perro = checkboxes[1];

// console.log(gato.checked);  // retorna el valor true
// gato.checked = false; // establece un nuevo valor al elemento.
// console.log(gato.value); // f

// perro.checked;  // retorna el valor false
// perro.checked = true; // establece un nuevo valor al elemento.
// console.log(perro.value); // m


// Podemos utilizar el selector de css :checked 
// para obtener el checkbox seleccionado de la siguiente forma:
// Ejemplo:

/* <form action="guardar_usuario.html" method="get" enctype="application/x-www-form-urlencoded" name="login">
  <input type="checkbox" name="pet" value="f" checked> Gato
  <input type="checkbox" name="pet" value="m"> Perro
</form> */

// var gato = document.querySelector('input:checked');

// console.log(gato.checked);  // retorna el valor true
// gato.checked = false; // establece un nuevo valor al elemento.
// console.log(gato.value); // f




// Eventos en un formulario

// Los elementos del formulario pueden manejar eventos 
// por medio de los métodos: onfocus, onblur, onchange, oninput
// También se pueden escribir utilizando el método addEventListener(callback)
// focus: se dispara al establecer el foco en un elemento
// blur: se dispara al remover el foco sobre un elemento
// change: se dispara cuando cambia el valor de un elementos
// input: se dispara al ingresar datos a un elemento


// Ejemplo:

{/* <form action="guardar_usuario.html" method="get" enctype="application/x-www-form-urlencoded" name="login">
  <input type="text" id="username" name="username" />
  <input type="password" id="pass" name="pass" />
  <input type="submit" name="submit" value="Enviar" />
</form> */}
// var form = document.querySelector('form');
// var username = form.elements[0];

// username.onfocus = function() {
//   // código que maneja el focus del elemento
//   console.log('Hicieron foco en el campo username');
// }

// username.onblur = function() {
//   // código que maneja el blur del elemento
//   console.log('Se perdió el foco del campo username');
// }

// username.oninput = function(e) {
//   // código que maneja el ingreso de datos a un elemento
//   console.log('Están cambiaron el valor del campo username');
// }




// // Podemos ver el valor
// // usando el parametro evento
// // con onchange
// // o oninput
// // y 
// // e.target.value

// username.oninput = function(e) {
//   console.log(e.target.value)
// }

// username.onchange = function(e) {
//   console.log(e.target.value)
// }


// Por medio del evento change podemos manejar el cambio de selección de un elemento select
// De la manera queya vimos: select.selectedIndex
// y pasando ese indice a select.options 

// Ejemplo:

{/* <form action="guardar_usuario.html" method="get" enctype="application/x-www-form-urlencoded" name="login">
  <select name="paises" id="paises">
    <option value="ar">Argentina</option>
    <option value="br">Brasil</option>
    <option value="cl">Chile</option>
  </select>
</form> */}
// var select = document.querySelector('select');

// select.onchange = function() {
//   var index = select.selectedIndex;
//   var valor = select.options[index].value;
//   console.log(index);
//   console.log(valor);
// }


// Para validar si un campo de texto está vacio podemos combinar la propiedad value y la propiedad length de los strings
// Ejemplo:

{/* <form action="guardar_usuario.html" method="get" enctype="application/x-www-form-urlencoded" name="login">
  <input type="text" id="username" name="username" />
  <input type="password" id="pass" name="pass" />
  <input type="submit" name="submit" value="Enviar" />
</form> */}
// var form = document.querySelector('form');


// form.onsubmit = function(evento) {
//   evento.preventDefault();
//   var username = form.elements[0];

//   if (username.value.length === 0) {
//     console.log('Username vacio');
//     return false;
//   }
// evento.target.submit()
// }




// Ejercicios
// Ejercicio 31

// Hacer un formulario de invitación a un evento. 

// Validarlo en el submit 

// Nombre —> no puede estar vacío
// Edad ——> debe ser entre 18 y 120 
// Seleccionar estado civil —> no puede estar vacío 
// Seleccionar nacionalidad (select, desplegado de opciones) —> no puede estar vacío 


// Una vez enviados los datos, en lugar de enviarse a otra web
// Se imprimen abajo, como una lista de confirmación de asistencia


// Invitado {indice} 
// Nombre: {nombre}
// Edad: {edad}
// Estado civil {estado civil}
// Nacionalidad {nacionalidad}
// Boton “Eliminar invitado” (Si le hacemos clic, se borra todo)