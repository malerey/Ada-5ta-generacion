// ONLOAD 

  function saludar () {
  console.log('hola mundo!');
}




//SELECTORES

// Para poder interactuar con los elementos del DOM debemos seleccionarlos. 


// getElementById: acepta un string con el valor del ID como parámetro y retorna un elemento. 
// Retorna null en caso de no encontrar el elemento buscado.

// getElementsByTagName: acepta un string con el valor del nombre del TAG como parámetro
// retorna una lista/array de elementos. Retorna una lista/array vacía en caso de no encontrar elementos del TAG buscado.

// getElementsByClassName: acepta un string con el valor del atributo CLASS como parámetro 
//y retorna una lista/array de elementos. Retorna una lista/array vacía en caso de no encontrar elementos con la class buscada.

// querySelector: acepta un string con un selector de css como parámetro y retorna un elemento 
// Retorna null en caso de no encontrar elemento en dicho contexto

// querySelectorAll: acepta un string con un valor de selector de css como parámetro y retorna un array con todos los elementos 
// Retorna una array vacío en caso de no encontrar elementos en dicho contexto.




// var principal = document.getElementById("principal")
// var elementosTag = document.getElementsByTagName("p") 
// var elementosClase = document.getElementsByClassName("rojo")
// var elementosQuery = document.querySelector("p.rojo") 
// var todosElementosQuery = document.querySelectorAll("p.rojo")

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

// Al seleccionar un elemento podemos acceder a sus atributos utilizando la propiedad attributes
// retorna un mapa que tiene valores key/value con los nombres y valores de los atributos de ese elemento

// var elemento = document.querySelector('div')
// console.log(elemento.attributes); 



// Podemos acceder de forma indiviudal a los atributos de un elemento utilizando el método getAttribute

// var elemento = document.querySelector('p#principal')
// console.log("atributo id: ", elemento.getAttribute('id')); // retorna principal);
// console.log("atributo clase: ", elemento.getAttribute('class')); // retorna rojo)




// Otra forma de acceder a las propiedades es utilizar los atributos de HTML como propiedades de objeto


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


// nos permite obtener una colección de las clases que tienen un elemento

// var elemento = document.querySelector('p');

// // agregamos la clase ocultar
// elemento.classList.add('verde');

// // como tenía la clase ocultar con toggle lo sacamos
// elemento.classList.toggle('rojo');

// // sacamos la clase negrita
// elemento.classList.remove('negrita');


// ejercicio 4

// Podemos saber si un elemento tiene o no un atributo en particular utilizando el método hasAttribute
// Acepta un string como parámetro con el nombre del atributo que quiero saber si existe en ese elemento
// Retorna un  booleano



// var elemento = document.querySelector('p');
// console.log(elemento.hasAttribute('class')); // true


//También existe el método hasAttributes que nos permite saber si un elemento tiene o no atributos





//ejercicio 5

// Para establecer atributos utilizamos el método setAttribute
// Este método acepta como primer parámetro un string con el nombre del atributo que queremos agregar
// Como segundo parámetro acepta un string con el valor que queremos para el atributo

// agreguemos esto al html <h2>Elemento sin atributos</h2>
// var titulo = document.querySelector('h2');
// console.log(titulo.hasAttributes():); // false

// titulo.setAttribute('id', 'principal');


//En caso de querer quitar un atributo lo podemos hacer utilizando el método removeAttribute
// Este método acepta un string como parámetro con el nombre del atributo que queremos remover

