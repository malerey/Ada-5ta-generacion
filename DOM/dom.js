

// function staircase (n) {
  
//   for (var i = 1; i <= n; i++) {
//     var row = '';
    
//     for (var j = 1; j <= (n - i); j++) {
//       row += ' ';
//     }
    
//     for (var k = 1; k <= i; k++) {
//       row += '#';
//     }
    
//     console.log(row);
//   }
// }

// staircase(5);
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

// // Padres / Hijos 

// // Un elemento que contiene otros elementos 
// se considera como un elemento padre de los 
// elementos que contiene
// // Un elemento que esta dentro de otro elemento 
// se considera hijo del elemento que lo contiene
// // Por medio de el atributo parentElement podemos
//  acceder al elemento padre del elemento seleccionado
// // Con el atributo children podemos acceder a la 
// colección de elementos hijos de un elemento
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
// // Podemos acceder al elemento 
// que está antes que el elemento seleccionado 
// utilizando la propiedad previousElementSibling
// // // También podemos acceder al elemento
//  que sigue gracias a la propiedad nextElementSibling

// Ejemplo:

// var parrafos = document.querySelectorAll('p');
// parrafos[1].previousElementSibling; // De esta forma accedemos al primer párrafo parrafos[0]
// parrafos[1].nextElementSibling; // De esta forma accedemos al elemento que sigue parrafos[2]


// console.log(parrafos[1])
// console.log(parrafos[1].previousElementSibling)
// console.log(parrafos[1].nextElementSibling)






// Modificar el contenido de un elemento

// Los elementos tienen un atributo llamado 
// innerText que nos permite leer o escribir 
// contenido en modo de texto
// var parrafo = document.querySelector('p');
// parrafo.innerText; // Elemento hijo 1 
// console.log(parrafo.innerText)
// parrafo.innerText = 'Asi cambiamos el valor del texto un elemento';

// // Funciones similares son textContent y innerHTML

// parrafo.textContent = 'Cambio valor con textContent';
// parrafo.innerHTML = 'Cambio valor con innerHTML';



// // InnerHTML tambien nos permite agregar etiquetas de HTML 
// parrafo.innerHTML = '<ul><li>Lo convierto en lista</li></ul>';



// var parrafos = document.querySelectorAll("p")
// parrafos[0].innerHTML = "soy la mas capa de javascript"


// for (var i = 0; i < parrafos.length; i++) {
// 	parrafos[i].innerHTML = "ahora si soy la mas capa"
// }










// // Manejo de propiedades de CSS
// // Los elementos HTML tienen una propiedad 
// llamada style que retorna un objeto literal
//  que representa los estilos que tiene un objeto
// // Los nombres de las propiedades de CSS en 
// ECMAScript se escriben con el siguiente formato: 
// nombreDePropiedadDeCss
// // Por ejemplo la propiedad de CSS background-color
//  se escribe como backgroundColor
// // Ejemplo:


// var elemento = document.querySelector('p');
// elemento.style; // {}
// elemento.style.color = 'red'; // seteo el color a rojo
// elemento.style.fontWeight = 'bold'; //seteo el weight a bold
// elemento.style.fontSize = '60px'
// elemento.style.border = "3px solid green"

// // // Ejercicio 11 
// // // https://github.com/Ada-IT/bootcamp-frontend/blob/master/javascript/dom/ejercicios/011.md







// // CRUD :
// // Create
// // Read
// // Update
// // Delete
// // Esto significa que podemos crear, 
// actualizar y borrar un elemento








// Crear un elemento
// El objeto document tienen un método 
//llamado createElement que nos permite crear 
//nuevos nodos elementos HTML
// createElement acepta como parámetro un string 
//con el nombre de una etiqueta de HTML 
//(a, div, span, li, ul, etc)
// Ejemplo:

// var nuevoElemento = document.createElement('p');




// Insertar un elemento
// Los objetos tienen un método 
//llamado appendChild que nos permite insertar 
//un nodo dentro del otro
// Este método inserta el nuevo nodo como último 
//nodo hijo del nodo contenedor
// Ejemplo:

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


// Lista de eventos que se pueden utilizar:
// Existen muchos eventos que podemos utilizar para crear UI interactivas:
// onchange
// onclick / ondblclick / onmousedown / onmousedown
// onmouseover / onmouseout
// onkeydown / onkeypress / onkeyup
// onload
// onresize
// onscroll
// oninput
// onfocus / onblur


// // Existen 2 formas básicas de registrar un manejador de eventos

// // Establecer una propiedad en el objeto 

// var button = document.querySelector('button');
// button.onclick = function() {
//   // código para manejar que se hace al hacer click en el botón
// }


// // La otra opción es registrar un evento con addEventListener
// // Este método soporta 2 parámetros:
// // Tipo de evento: es un string con el nombre del tipo de evento
// // Manejador de evento: es una función que se invoca cuando suceda evento
// Ejemplo:
// var button = document.querySelector('button');
// button.addEventListener('click', function() {
//   // código que maneja el click del botón
// });


// // Dentro de la función que maneja el evento podemos utilizar la palabra reservada this 
// que en ese contexto hace referencia al objeto que ejecutó el evento 
//Ejemplo:
// function clickHandler() {
// 	console.log(this)		// this apunta al elemento que ejecutó el evento
// }

// var button = document.querySelector('button');
// button.addEventListener('click', clickHandler);

// // Para quitar un listener podemos utilizar removeEventListener

// // function clickHandler() {
// // 	console.log(this)		// this apunta al elemento que ejecutó el evento
// // }

// // var button = document.querySelector('button');
// // button.addEventListener('click', clickHandler);
// // button.removeEventListener('click', clickHandler); 


// Por medio del objeto event podemos conocer 
// más datos sobre el evento o prevenir que se ejecute 
// el comportamiento por defecto de ejecución
// Para prevenir la ejecución de un evento por defecto 
// utilizamos el método preventDefault
// Ejemplo:

// var hipervinculo = document.querySelector('a');
// hipervinculo.addEventListener('click', function(evento) {
//   evento.preventDefault();  // de esta forma prevenimos que el hipervinculo ejecute su función por defecto
// });


// Podemos capturar algunos eventos del mouse,
//  entre los más conocidos se encuentran: 
//  click, dblclick, mouseover, mouseout y mousemove
// El objeto evento asociado al mouse tiene 
// atributos que nos permite saber la posición 
// donde se encuentra con clientX y clientY
// Ejemplo:

// var body = document.querySelector('body');
// body.addEventListener('click', function(evento) {
//   evento.clientX;
//   evento.clientY;
// });

// También podemos controlar los eventos
//  que se disparan cuando se presionan las 
//  teclas por medio de los eventos keypress, keydown y keyup
// El objeto del evento tiene propiedades como 
// charCode que nos retorna el número de tecla que fué presionado
// Con el método String.fromCharCode podemos saber que letra es
// Ejemplo:

// var body = document.querySelector('body');
// body.addEventListener('keypress', function(evento) {
//   evento.charCode;
//   String.fromCharCode(evento.charCode);
// });

