// ONLOAD 

//   function saludar () {
//   console.log('hola mundo!');
// }










// SELECTORES

// Para poder interactuar con los elementos del DOM
//  debemos seleccionarlos. 


// getElementById: acepta un string con el valor del ID como
//  parámetro y retorna un elemento. 
// Retorna null en caso de no encontrar el elemento buscado.

// getElementsByTagName: acepta un string con el valor del 
// nombre del TAG como parámetro
// retorna una lista/array de elementos. 
// Retorna una lista/array vacía en caso de no encontrar 
// // elementos del TAG buscado.

// getElementsByClassName: acepta un string con el 
// valor del atributo CLASS como parámetro 
// y retorna una lista/array de elementos. 
// Retorna una lista/array vacía en caso de no 
// encontrar elementos con la class buscada.

// querySelector: acepta un string con un selector 
// de css como parámetro y retorna un elemento 
// Retorna null en caso de no encontrar elemento en dicho contexto

// querySelectorAll: acepta un string con un valor 
// de selector de css como parámetro y retorna un array con todos los elementos 
// Retorna una array vacío en caso de no encontrar elementos en dicho contexto.




// var principal = document.getElementById("principal")

// console.log(principal)

// var etiquetas = document.getElementsByTagName("p")

// console.log(etiquetas)

// console.log(etiquetas[0])

// var clases = document.getElementsByClassName("rojo")
// console.log(clases)



// var elementosTag = document.getElementsByTagName("p") 
// var elementosClase = document.getElementsByClassName("rojo")
// var elementosQuery = document.querySelector("p.rojo") 
// var todosElementosQuery = document.querySelectorAll("a")

// console.log("getElementById", principal)
// console.log("getElementsByTagName", elementosTag)
// console.log("getElementsByClassName", elementosClase)
// console.log("querySelector", elementosQuery)
// console.log("querySelectorAll", todosElementosQuery)



// querySelectorAll, getElementsByTagName y getElementsByClassName 
// retornan una colección de elemento, es decir que podemos acceder 
// a cada uno de los elementos de la misma forma que lo hacemos 
// con un array. El primer elemento está en el índice 0




// Ejercicio 2







// ATRIBUTOS

// Al seleccionar un elemento
//  podemos acceder a sus atributos utilizando la propiedad attributes
// retorna un mapa que tiene valores key/value con
//  los nombres y valores de los atributos de ese elemento

// var elemento = document.querySelector('div')
// console.log(elemento.attributes); 



// Podemos acceder de forma indiviudal 
// a los atributos de un elemento utilizando el método getAttribute

// var elemento = document.querySelector('p#principal')
// console.log(elemento.getAttribute('id')); // retorna principal);
// console.log( elemento.getAttribute('class')); // retorna rojo)




// Otra forma de acceder a las propiedades es 
//utilizar los atributos de HTML como propiedades de objeto


// var elemento = document.querySelector('p#principal')
// var id = elemento.id;
// console.log(id);

// EXCEPCION: CLASE
// var elemento = document.querySelector('p#principal')

// var clase = elemento.className;
// // var clase = elemento.class // esto es undefined
// console.log(clase); // rojo
// clase = elemento.getAttribute('class');
// // clase = elemento.getAttribute('className'); // esto es null
// console.log(clase); // rojo









// propiedad classList


// nos permite obtener una colección de las clases
//  que tienen un elemento

// var elemento = document.querySelector('p');

// // // agregamos la clase ocultar
// // elemento.classList.add('verde');

// // // // como tenía la clase ocultar con toggle lo sacamos
// // elemento.classList.toggle('rojo');

// // // sacamos la clase negrita
// elemento.classList.remove('negrita');





// ----


// Empecemos por hacer un HTML linkeado a un archivo JS vacio. 
// El body de nuestro HTML sera un div con tres elementos <p>

// <div>
//   <p>Elemento hijo 1</p>
//   <p>Elemento hijo 2</p>
//   <p>Elemento hijo 3</p>
// </div>




// Vamos a seguir viendo maneras de seleccionar elementos


// Relación entre elementos

// Padres / Hijos 

// Un elemento que contiene otros elementos se considera como un elemento padre de los elementos que contiene
// Un elemento que esta dentro de otro elemento se considera hijo del elemento que lo contiene
// Por medio de el atributo parentElement podemos acceder al elemento padre del elemento seleccionado
// Con el atributo children podemos acceder a la colección de elementos hijos de un elemento
// Ejemplo:

// <div>
//   <p>Elemento hijo</p>
//   <p>Elemento hijo</p>
//   <p>Elemento hijo</p>
// </div>
// var div = document.querySelector('div');
// var parrafos = div.children; // obtengo la colección de elementos hijo

// console.log(parrafos) // accedemos a los hijos
// console.log(parrafos[0]) // accedemos al primer elemento hijo 
// console.log(parrafos[0].parentElement) // accedemos al padre (el div)



// // Hermanos 
// // Podemos acceder al elemento que está antes que el elemento seleccionado utilizando la propiedad previousElementSibling
// // También podemos acceder al elemento que sigue gracias a la propiedad nextElementSibling

// // Ejemplo:

// var parrafos = document.querySelectorAll('p');
// parrafos[1].previousElementSibling; // De esta forma accedemos al primer párrafo parrafos[0]
// parrafos[1].nextElementSibling; // De esta forma accedemos al elemento que sigue parrafos[2]


// console.log(parrafos[1])
// console.log(parrafos[1].previousElementSibling)
// console.log(parrafos[1].nextElementSibling)






// // Modificar el contenido de un elemento

// // Los elementos tienen un atributo llamado innerText que nos permite leer o escribir contenido en modo de texto
// var parrafo = document.querySelector('p');
// parrafo.innerText; // Elemento hijo 1 
// console.log(parrafo.innerText)
// // parrafo.innerText = 'Asi cambiamos el valor del texto un elemento';

// // Funciones similares son textContent y innerHTML

// parrafo.textContent = 'Cambio valor con textContent';
// parrafo.innerHTML = 'Cambio valor con innerHTML';



// InnerHTML tambien nos permite agregar etiquetas de HTML 
// parrafo.innerHTML = '<ul><li>Lo convierto en lista</li></ul>';










// // Manejo de propiedades de CSS
// // Los elementos HTML tienen una propiedad llamada style que retorna un objeto literal que representa los estilos que tiene un objeto
// // Los nombres de las propiedades de CSS en ECMAScript se escriben con el siguiente formato: nombreDePropiedadDeCss
// // Por ejemplo la propiedad de CSS background-color se escribe como backgroundColor
// // Ejemplo:


// var elemento = document.querySelector('p');
// elemento.style; // {}
// elemento.style.color = 'red'; // seteo el color a rojo
// elemento.style.fontWeight = 'bold'; //seteo el weight a bold


// // Ejercicio 11 
// // https://github.com/Ada-IT/bootcamp-frontend/blob/master/javascript/dom/ejercicios/011.md







// // CRUD :
// // Create
// // Read
// // Update
// // Delete
// // Esto significa que podemos crear, actualizar y borrar un elemento





// Crear un elemento
// El objeto document tienen un método llamado createElement que nos permite crear nuevos nodos elementos HTML
// createElement acepta como parámetro un string con el nombre de una etiqueta de HTML (a, div, span, li, ul, etc)
// Ejemplo:

// var nuevoElemento = document.createElement('p');



// // Insertar un elemento
// // Los objetos tienen un método llamado appendChild que nos permite insertar un nodo dentro del otro
// // Este método inserta el nuevo nodo como último nodo hijo del nodo contenedor
// // Ejemplo:

// var parrafo = document.createElement('p');
// parrafo.textContent = 'Hola soy un parrafo';
// var div = document.querySelector('div');
// div.appendChild(parrafo);




// var parrafo = document.createElement('p');
// var prompt = prompt("Deja tu comentario", "")
// parrafo.textContent = prompt
// var div = document.querySelector('div');
// div.appendChild(parrafo);



// // // Ejercicio 13
// // https://github.com/Ada-IT/bootcamp-frontend/blob/master/javascript/dom/ejercicios/013.md




// Remover un elemento
// Los elementos tienen un método llamado removeChild que nos permite remover nodos hijos
// Para poder remover un nodo tenemos que primero seleccionarlo


// var div = document.querySelector('div');
// var parrafo = div.children.item(0); // selecciono el párrafo
// div.removeChild(parrafo);





// // Eventos

// // Un evento consta de las siguientes partes:

// // Tipo de Evento: es el nombre del evento que ocurre
// // Target del evento: es el objeto al cual le ocurre el evento o que está asociado a dicho evento
// // Manejador de evento: es una función (callback) que maneja o responde a un evento (Se lo conoce también como listener)
// // Objeto del evento: es un objecto asociado con un evento en particular que contiene detalles sobre el evento. 
// // Este objeto es pasado como parámetro de la función que maneja el evento. 
// // Las propiedades de este objeto cambian según el tipo de evento que sea. 
// // Ejemplo: puedo saber que tecla se presiona o posición del mouse dependiendo del tipo de evento que maneje.




// // Existen 2 formas básicas de registrar un manejador de eventos

// // Establecer una propiedad en el objeto o document Ejemplo:

// var button = document.querySelector('button');
// button.onclick = function() {
//   // código para manejar que se hace al hacer click en el botón
// }


// // La otra opción es registr un evento con addEventListener
// // Este método soporta 2 parámetros:
// // Tipo de evento: es un string con el nombre del tipo de evento
// // Manejador de evento: es una función que se invoca cuando suceda evento Ejemplo:
// var button = document.querySelector('button');
// button.addEventListener('click', function() {
//   // código que maneja el click del botón
// });


// // Dentro de la función que maneja el evento podemos utilizar la palabra reservada this 
// que en ese contexto hace referencia al objeto que ejecutó el evento Ejemplo:
// function clickHandler() {
// 	console.log(this)		// this en este caso apunta al elemento que ejecutó el evento
// }

// var button = document.querySelector('button');
// button.addEventListener('click', clickHandler);

// // Para quitar un listener podemos utilizar removeEventListener

// // function clickHandler() {
// // 	console.log(this)		// this en este caso apunta al elemento que ejecutó el evento
// // }

// // var button = document.querySelector('button');
// // button.addEventListener('click', clickHandler);
// // button.removeEventListener('click', clickHandler); 
