// metodos avanzados
// de array


// var array = [1, 2, 3, 4]

// var nuevoArray = array.forEach(function(param){
// return param 
// }); 

// console.log(array)
// console.log(nuevoArray())







// sintaxis

// nombre del array 
// punto
// nombre del metodo
// parentesis
// funcion (parametros)
// parametros de la funcion














// ForEach
// recorrer un array 
// acepta una función como parámetro
// La función que pasamos a este método 
// recibe como parámetro 
// cada uno de los elementos del array

// var alumnos = ['nico', 'pedro', 'marta', 'belen', 'emilia'];

// alumnos.forEach(function(alumno) {
//   console.log(alumno);
// });







// sintaxis





// var alumnos = ['nico', 'pedro', 'marta', 'belen', 'emilia'];

// alumnos.forEach(function (alumno) {
//   var iniciales = (alumno.charAt(0)).toUpperCase();
//   var nombres = alumno.slice(1, alumno.length);
//   console.log(iniciales + nombres);
// });



// forEach(function(valorDelElemento, index, arr)	{
// valorDelElemento	obligatorio
// index	opcional
// arr	opcional
// }
// )

// var alumnos = ['nico', 'pedro', 'marta', 'belen', 'emilia'];
// alumnos.forEach(function(a, b, c) {
//   console.log(a)
//   console.log(b)
//   console.log(c)
// })


// var numeros = ['1', '2', '3', '4', '5', '6'];
// numeros.forEach(function(numero, i) {
//   if (i%2 !== 0) {
//     console.log(numero)
//   }
// })


// var array = ["Malena", "Maria", "Jimena"]
// array.forEach(function(elemento, i, array) {
//   return document.write("<br>"+a)
// })







// var mascotas = ['Amelia', 'Ciro', 'Ulises', 'Carlos'];
// var mascotasMayuscula = mascotas.map(function(mascota) {
//   return mascota.toUpperCase()
// });

// // El array original queda intacto
// console.log(mascotasMayuscula) // [ 'AMELIA', 'CIRO', 'ULISES', 'CARLOS' ] Todos en mayúscula
// console.log(mascotas) // ['Amelia', 'Ciro', 'Ulises', 'Carlos'] Este array quedó igual que antes

// OJO!!
// Si la funcion no retorna nada
// El array nuevo quedara vacio!!



// var mascotas = ['Amelia', 'Ciro', 'Ulises', 'Carlos'];
// var mascotasMayuscula = mascotas.map(function(mascota) {
//   return mascota.toUpperCase()
// });

// console.log(mascotasMayuscula)




// // El array original queda intacto
// console.log(mascotasMayuscula) // undefined
// console.log(mascotas) // ['Amelia', 'Ciro', 'Ulises', 'Carlos'] Este array quedó igual que antes

// Recibe los mismos parametros que forEach

// map(function(valorDelElemento, index, arr)	{
// valorDelElemento	obligatorio
// index	opcional
// arr	opcional
// }
// )

// var alumnos = ['nico', 'pedro', 'marta', 'belen', 'emilia'];
// var nuevoArray = alumnos.map(function(a, b, c) {
//   return a + b + c
// })

// console.log(nuevoArray)







// filter() 
// crea un array
// a partir de una funcion
// que se pasa como "test"
// a cada uno de los elementos
// del array original

// var edades = [10, 12, 88, 32, 55, 67, 92, 20]

// var mayoresDeEdad = edades.filter(function(edad) {
//   if (edad >= 18) {
//     return edad
//   }
  
// })

// console.log(mayoresDeEdad)




// Reduce
// recorrer un array y obtener 
// un sólo dato como resultado final
// Acepta una función con dos parámetros
// Primer parámetro es el total
// (el valor acumulado en cada vuelta)
// El segundo valor es cada item en el array
// solo sirve para numeros


var notas = [1, 2, 3, 4, 10, 5];
var sumaDeNotas = notas.reduce(function(total, nota) {
  return total + nota;
});

console.log(sumaDeNotas); // 25 resultado final de sumar todas las notas






// var notas = [1, 10, 20];
// var sumaDeNotas = notas.reduce(function(total, nota) {
//   return total * nota;
// });

// console.log(sumaDeNotas); //200

//puede recibir dos parametros mas
// el indice, y el array


// reemplaza este codigo
// let calorias = [800, 200, 100, 300, 700];
// let total = 0;
// for (let i = 0; i< calorias.length; i++){
//   total = total + calorias[i] 
// }
// console.log(total)

// let calorias = [800, 200, 100, 300, 700];
// let sumaDeTodo = calorias.reduce(function(total, item){
//   return total + item;
// });
// console.log(sumaDeTodo)