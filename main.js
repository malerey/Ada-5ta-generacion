// // Objetos

// {} // objeto literal
// var miObjeto = {}; // objeto asignado a una variable


// // Propiedades
// // Un objeto puede tener propiedades
// // se definen como si fueran variables
// // se les asigna valor con dos puntos
// // se separan con comas
// // Ejemplo:

// var persona = {
//   nombre: 'Ada',
//   edad: 27
// };

// console.log(persona);


// // acceder a la propiedad de un objeto

// var persona = {
//   nombre: 'Ada',
//   edad: 27
// };
// console.log(persona.nombre);
// console.log(persona.edad);

// // propiedad que no existe == undefined

// console.log(persona.dni);

// // asignar un valor a una propiedad 

// var persona = {
//   nombre: 'Ada',
//   edad: 27
// };
// persona.nombre = 'Grace';
// persona.edad = 30;

// console.log(persona);

// // los objetos son dinámicos
// // crear propiedades que no fueron definidas 

// var persona = {
//   nombre: 'Ada',
//   edad: 27
// };
// persona.dni = 90909090;
// console.log(persona);

// persona.DNI = 90909090

// console.log(persona)


// // Métodos
// // propiedad que tiene una función

// var persona = {
//   nombre: 'Ada',
//   saludar: function() {
//     console.log('¡Hola!');
//   }
// }

// persona.saludar(); // ¡Hola!

// // Un método puede aceptar parámetros:

// var persona = {
//   nombre: 'Ada',
//   saludar: function(personaASaludar) {
//     console.log('¡Hola, ' + personaASaludar + '!');
//   }
// }

// persona.saludar('Grace');

// // podemos acceder a las propiedades del objeto
// // por medio de la palabra reservada this

// var persona = {
//   nombre: 'Ada',
//   saludar: function() {
//     console.log('¡Hola! Mi nombre es ' + this.nombre);
//   }
// }

// persona.saludar(); // ¡Hola! Mi nombre es Ada

// // dentro de un método 
// // podemos modificar una propiedad de un objeto

// var persona = {
//   nombre: 'Ada',
//   edad: 27,
//   saludar: function() {
//     console.log('¡Hola! Mi nombre es ' + this.nombre);
//   },
//   cumpleanios: function() {
//     this.edad++;
//   }
// }

// console.log(persona.edad) // 27
// persona.cumpleanios();
// console.log(persona.edad) // 28


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
//   cumpleanios: function() {
//     this.edad++;
//   }
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
//   cumpleanios: function() {
//     this.edad++;
//   }
// }

// console.log(persona[propNombre]);  
// console.log(persona[propEdad]); 



// // Object.keys
// // retorna todas las propiedades de un objeto
// // El método keys acepta un objeto como parámetro

// var persona = {
//   nombre: 'Ada',
//   edad: 27
// }

// console.log(Object.keys(persona));

// var propiedades = Object.keys(persona)

// for (var i = 0; i < propiedades.length; i++) {
//   var propiedad = propiedades[i];
//   console.log('La propiedad ' + propiedad + ' tiene el valor ' + persona[propiedad]);
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
//   var propiedad = propiedades[i];
//   console.log('La propiedad ' + propiedad + ' tiene el valor ' + persona[propiedad]);
// }








// var biblioteca = [ 
//     {
//         titulo: 'Cumbres Borrascosas',
//         autor: 'Emily Brontë',
//         leido: true
//     },
//     {
//         titulo: 'Orlando',
//         autor: 'Virginia Woolf',
//         leido: false
//     },

//     {
//         titulo: 'Arbol de Diana',
//         autor: 'Alejandra Pizarnik',
//         leido: false
//     }
//   ];

// Hacer un programa que nos muestre 
// los siguientes mensajes en consola

// "El libro Cumbres Borrascosas de Emily Brontë ya fue leido"
// "El libro Orlando de Virgnia Woolf aún no fue leido"
// "El libro Arbol de Diana de Alejandra Pizarnik aún no fue leido"



//pista: con for o con map
//con map tienen extra puntaje



// for (var i = 0; i < biblioteca.length; i++) 
//    {
//     var libro = "El libro " + biblioteca[i].titulo + ' de ' + biblioteca[i].autor
//     if (biblioteca[i].leido === true) {
//       console.log(libro + " ya fue leido");
//     } else {
//      console.log(libro + " aun no fue leido");
//     }
//    }

// var resultado = biblioteca.map(function (item) {
//   var libro = "El libro " + item.titulo + ' de ' + item.autor
//   if (item.leido === true) {
//       console.log(libro + " ya fue leido");
//     } else {
//      console.log(libro + " aun no fue leido");
//     }
// })





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
//     pikachu.atacar(charmander)
//   console.log("charmander ahora tiene " + charmander.vida + " puntos de vida")
//   if (pikachu.vida <= 0) {
//     console.log("Pikachu fue derrotado")
//         break;
//   }
//   else if (charmander.vida <= 0) {
//       console.log("Charmander fue derrotado")
//           break;
//     }

// }


// Hagamos el juego mas dinamico
// Que los jugadores puedan elegir un pokemon 
// con un prompt

// tenemos que pensar una manera en que 
// le asignamos el valor del jugador
// al objeto correspondiente 





// un for ? 





// empecemos por hacer un array de pokemones 

var pokemones = [
  pikachu = {
  nombre: "Pikachu", 
  vida: 100,
  ataque: 20,
  atacar: function (atacado) {
    atacado.vida = atacado.vida - this.ataque
    console.log(atacado.nombre + " ahora tiene " + atacado.vida + " puntos de vida")
  }
},
charmander = {
  nombre: "Charmander",
  vida: 100,
  ataque: 10,
  atacar: function (atacado) {
    atacado.vida = atacado.vida - this.ataque
    console.log(atacado.nombre + " ahora tiene " + atacado.vida + " puntos de vida")
  }
}
]





// y los prompt 

var jugadorUno = prompt("Elegí un pokemon: Pikachu o Charmander", "")
var jugadorDos = prompt("Elegí un pokemon: Pikachu o Charmander", "")





// como asignariamos valores con un for?

// recorremos el array de pokemones



// si encontramos un pokemon 
// que tenga el mismo nombre
// que eligio uno de nuestros jugadores
// se lo asignamos a ese jugador 

// for (var i = 0; i <= pokemones.length; i++) {
//   /////////////////////
// } 

// al final de este for
// si hacemos console.log
// de jugadorUno y jugadorDos
// deberiamos ver a pikachu o charmander 





for (var i = 0; i < pokemones.length; i++) {
  console.log(pokemones[i])
  if (jugadorUno === pokemones[i].nombre) {
    console.log("jugadorUno tiene asignado un pokemon")
    jugadorUno = pokemones[i]
  } 
  if (jugadorDos === pokemones[i].nombre) {
        console.log("jugadorDos tiene asignado un pokemon")
    jugadorDos = pokemones[i]
  } 
}




// ahora hacemos el juego cambiando
// el while de antes 



// // while (charmander.vida > 0 && pikachu.vida > 0) {
// //  charmander.atacar(pikachu)
// //  console.log("pikachu ahora tiene " + pikachu.vida + " puntos de vida")
// //   pikachu.atacar(charmander)
// // console.log("charmander ahora tiene " + charmander.vida + " puntos de vida")
// //  if (pikachu.vida <= 0) {
// //    console.log("Pikachu fue derrotado")
// //       break;
// // }
// // else if (charmander.vida <= 0) {
// //    console.log("Charmander fue derrotado")
// //        break;
// //  }
// // }




while (jugadorUno.vida > 0 && jugadorDos.vida > 0) {
  jugadorUno.atacar(jugadorDos)
    jugadorDos.atacar(jugadorUno)
  if (jugadorDos.vida <= 0) {
    console.log(jugadorDos.nombre + " fue derrotado")
        break;
  }
  else if (jugadorUno.vida <= 0) {
      console.log(jugadorUno.nombre + " fue derrotado")
          break;
    }
}