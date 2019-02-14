


var numeros = [1, 2, 3, 4, 5];

var stringsYNumeros = ["uno", 1, "dos",
                            2, "tres", 3];













// //saber cual es el valor de una posicion



// var primerValor = strings[5]
// console.log(primerValor)





// no es necesario declararlo como variable 
// console.log(strings[0])







//cambiar el valor de un elemento dentro del array



// console.log(strings)





// // cuidado, debemos saber
// // cuantos elementos tiene nuestro array
// // o podemos hacer lio



// strings[10] = "string colgado"
// console.log(strings)







// hacer los ejercicios
//  2, 4,








// con la propiedad length sabemos
// cuantos elementos tiene un array

// console.log("length del array", strings.length)

// // no confundir con length de un string
// console.log("hola".length)









// // la posicion de un array empieza en 0
// // pero el length empieza en 1

// // numeros tiene 5 elementos
// console.log(numeros)



// // el length de numeros es 5 
// console.log(numeros.length)


// // pero la posicion del ultimo elemento
// // de numeros es numeros[4]
// console.log(numeros[4])


// // porque la posicion del primero
// // es numeros[0]
// console.log(numeros[0])






// para saber cual es el ultimo elemento 

// var numeros = [1, 2, 3]

// console.log(numeros[numeros.length - 1])




// hacer los ejercicios
// 8 y 10 












// //metodos de arrays


// metodo push
//agregar  elementos al final de un array


// console.log(strings)
// strings.push(["hola", "soy"])
// console.log(strings)




//Retorna la nueva longitud que tiene el array



//   console.log(strings)
// console.log(strings.push("chau"))
// console.log(strings)








// Unshift
// agrega elementos al inicio de un array



// console.log(strings)
// strings.unshift("primero")
// console.log(strings)

// // Retorna la nueva longitud que tiene el array

// console.log(strings.unshift("cero", 1, true))
// console.log(strings)




// Shift
// elimina el primer elemento de un array


// console.log(strings.length)
// strings.shift()
// console.log(strings.shift())
// console.log(strings.length)




// Retorna el elemento eliminado





//Pop
//elimina el último elemento de un array


// strings.pop()
// strings.pop()
// strings.pop()

// console.log(strings)








// Sort ordenar un array
// Retorna el array ordenado

// var stringsDesordenado = 
// ["zeta", "xilofon", "agua", "aaab"];

// console.log(stringsDesordenado)
// stringsDesordenado.sort()

// console.log(stringsDesordenado)






// //modifica el array
// console.log(stringsDesordenado)






// var numerosDesordenados = [4, 2, 3, 1]
// console.log(numerosDesordenados)
// console.log(numerosDesordenados[0])
// console.log(numerosDesordenados.sort())
// console.log(numerosDesordenados[0])







// Los elementos son ordenados
// convirtiéndolos a strings 
// y comparando la posición 
// del valor Unicode de dichos strings

// por eso a veces trae problemas







// var puntos = [1, 10, 2, 21]; 
// console.log(puntos.sort());






// var cosas = ['$', "'", "@"];
// console.log(cosas.sort()); 




//// hacer ejercicio 14




// //reverse 
// //revertir el orden que tiene un array
// //Retorna el array modificado

// console.log(numeros.reverse());











// // join
// // permite unir los valores de un array en un string


// var resultado = numeros.join();
// console.log(resultado);

// // la union por defecto es una coma sin espacio


// //acepta como parametro
// //un string para unir cada elemento
// var resultadoUno = numeros.join(', ');
// console.log(resultadoUno);


// var resultadoDos = numeros.join(' - ');
// console.log(resultadoDos);


// var resultadoTres = numeros.join('hola soy un string');
// console.log(resultadoTres)








// concat n
// unir 2 arrays y obtener un nuevo array
// parametros: el array que queremos agregar

// var pares = [0, 2, 4, 6, 8];
// var impares = [1, 3, 5, 7, 9];
// var todosLosNumeros = pares.concat(impares);

// console.log(todosLosNumeros);





//podemos hacerlo con varios arrays

// var letras = ["a", "b", "c"]
// var masLetras = ["d", "e", "f"]
// var aunMasLetras = ["g", "h", "i"]
// var inclusoMasLetras = ["j", "k", "l"]

// console.log(letras.concat(masLetras, aunMasLetras, inclusoMasLetras))





// indexOf
// retorna el primer índice donde se encuentra un elemento


// console.log(numeros.indexOf(5))



// // Si no encuentra el elemento buscado retorna -1

// console.log(numeros.indexOf(8))







// toString
// contenido de un array en string
// Es similar a join sin parametros
// no modifica array original

// console.log(strings)

// console.log(strings.toString())

// console.log(strings.join())

// console.log(strings)




// hacer ejercicios  18, 22