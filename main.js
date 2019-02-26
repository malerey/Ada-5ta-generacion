

// // Propiedades dinámicas
// // Podemos acceder a las propiedades 
// // utilizando los corchetes 
// // y el nombre de la propiedad


// var persona = {
//   nombre: 'Ada',
//   edad: 27,
//   saludar: function() {
//     console.log('¡Hola! Mi nombre es ' + this.nombre);
//   },
// }

// console.log(persona['nombre']);  // Ada
// console.log(persona['edad']);  // 27







// // De esta manera podemos
// // asignar una variable al valor que buscamos

// var propNombre = 'nombre';
// var propEdad = 'edad';

// var persona = {
//   nombre: 'Ada',
//   edad: 27,
//   saludar: function() {
//     console.log('¡Hola! Mi nombre es ' + this.nombre);
//   },
// }

// console.log(persona[propNombre]);  
// console.log(persona[propEdad]); 

// // *** persona.propEdad no funciona! ***








// // Object.keys
// retorna un array con las propiedades 
// acepta un objeto como parámetro

// var persona = {
//   nombre: 'Ada',
//   edad: 27
// }

// console.log(Object.keys(persona));









// var propiedades = Object.keys(persona)

// for (var i = 0; i < propiedades.length; i++) {
//   console.log('La propiedad ' + propiedades[i] + ' tiene el valor ' + persona[propiedades[i]]);
// }







// // Si agregamos más propiedades 
// // el código sigue pudiendo acceder


// var persona = {
//   nombre: 'Ada',
//   edad: 27
// }

// persona.dni = 90909090;

// var propiedades = Object.keys(persona);

// for (var i = 0; i < propiedades.length; i++) {
//   console.log('La propiedad ' + propiedades[i] + ' tiene el valor ' + persona[propiedades[i]]);
// }



// analizar si un objeto
// tiene un valor 

// var persona = {
//   nombre: 'Ada',
//   edad: 27
// }


// var propiedades = Object.keys(persona);

// for (var i = 0; i < propiedades.length; i++) {
//   if (persona[propiedades[i]] === 'Ada') {
//   	console.log("Uno de los valores del objeto es Ada")
//   }
//   else { 
//   	console.log('No existe el valor Ada en el objeto')
//   }
// }







// ejercicio 22

// Verificar si tiene la propiedad email
// Si no la tiene, mostrar en pantalla: 'El usuario no tiene la propiedad email'
// Si la tiene, mostrar en pantalla: 'El usuario tiene la propiedad email'

// var user = {
//   username: 'ada_lovelace',
//   password: '1234567890!',
//   // email: 'hola@gmail.com'
// };






//solucion 


// var propiedades = Object.keys(user)
// var mensaje = 'El usuario no tiene la propiedad email'

// for (var i = 0; i < propiedades.length; i++) {
// 	if (propiedades[i] === 'email') {
// 	 mensaje = 'El usuario tiene la propiedad email'
// 	}
// }

// console.log(mensaje)






// Objetos 023
// Completa el código dentro de la función hasProperty
// Si el objeto de la variable object tiene la propiedad
 // que recibe en la variable property, retorna true
// Sino retorna false


//solucion 



// function hasProperty(object, property) {
  
//   var properties = Object.keys(object)
//   var boolean = false 

//   for (var i = 0; i < properties.length; i++) {
//   	if (properties[i] == property) {
//   		boolean = true
//   	}
//   }

//   return boolean
// }









//pokemones




// var pikachu = {
//   nombre: "Pikachu", 
//   vida: 100,
//   ataque: 20,
//   atacar: function (atacado) {
//     atacado.vida = atacado.vida - this.ataque 
//   }
// }

// var charmander = {
//   nombre: "Charmander",
//   vida: 100,
//   ataque: 10,
//   atacar: function (atacado) {
//     atacado.vida = atacado.vida - this.ataque 
//   }
// }

// while (charmander.vida > 0 && pikachu.vida > 0) {
//   charmander.atacar(pikachu)
//   console.log("pikachu ahora tiene " + pikachu.vida + " puntos de vida")
//   pikachu.atacar(charmander)
//   console.log("charmander ahora tiene " + charmander.vida + " puntos de vida")
//   if (pikachu.vida <= 0) {
//     console.log("Pikachu fue derrotado")
//     break;

//   }
//   else if (charmander.vida <= 0) {
//       console.log("Charmander fue derrotado")
//       break;
//     }

// }


// Hagamos el juego mas dinamico
// Que los jugadores puedan elegir un pokemon 
// con un prompt

// var jugadorUno = prompt("Elegí un pokemon: Pikachu o Charmander", "")
// var jugadorDos = prompt("Elegí un pokemon: Pikachu o Charmander", "")

// tenemos que pensar una manera en que 
// le asignamos el valor del jugador
// al objeto correspondiente 





// un for ? 





// empecemos por hacer un array de pokemones 

// var pokemones = [
//   pikachu = {
//   nombre: "Pikachu", 
//   vida: 100,
//   ataque: 20,
//   atacar: function (atacado) {
//     atacado.vida = atacado.vida - this.ataque
//     console.log(atacado.nombre + " ahora tiene " + atacado.vida + " puntos de vida")
//   }
// },
// charmander = {
//   nombre: "Charmander",
//   vida: 100,
//   ataque: 10,
//   atacar: function (atacado) {
//     atacado.vida = atacado.vida - this.ataque
//     console.log(atacado.nombre + " ahora tiene " + atacado.vida + " puntos de vida")
//   }
// }
// ]





// // y los prompt 

// var jugadorUno = prompt("Elegí un pokemon: Pikachu o Charmander", "")
// var jugadorDos = prompt("Elegí un pokemon: Pikachu o Charmander", "")





// // como asignariamos valores con un for?

// // recorremos el array de pokemones



// // si encontramos un pokemon 
// // que tenga el mismo nombre
// // que eligio uno de nuestros jugadores
// // se lo asignamos a ese jugador 


// for (var i = 0; i < pokemones.length; i++) {
//   console.log(pokemones[i])
//   if (jugadorUno === pokemones[i].nombre) {
//     console.log("jugadorUno tiene asignado un pokemon")
//     jugadorUno = pokemones[i]
//   } 
//   if (jugadorDos === pokemones[i].nombre) {
//         console.log("jugadorDos tiene asignado un pokemon")
//     jugadorDos = pokemones[i]
//   } 
// }




// // ahora hacemos el juego cambiando
// // el while de antes 




// while (jugadorUno.vida > 0 && jugadorDos.vida > 0) {
//   jugadorUno.atacar(jugadorDos)
//   jugadorDos.atacar(jugadorUno)
//   if (jugadorDos.vida <= 0) {
//     console.log(jugadorDos.nombre + " fue derrotado")
//   }
//   else if (jugadorUno.vida <= 0) {
//       console.log(jugadorUno.nombre + " fue derrotado")
//     }
// }