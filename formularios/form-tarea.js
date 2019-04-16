var formulario = document.querySelector("form")

formulario.onsubmit = function(e) {

  // evitamos que el form se mande 
  e.preventDefault();
  
  // selecciono los elementos del formulario 
  var nombre_form = formulario.elements[0]
  var edad_form = formulario.elements[1]
  var soltero_form = formulario.elements[2]
  var casado_form = formulario.elements[3]
  var nacionalidad_form = formulario.elements[4]

  // asigno el valor de nombre y edad a variables 
  var nombre = nombre_form.value
  var edad = edad_form.value


  // Creamos una variable "estado" y le asignamos el valor
  // del checkbox que este seleccionado. 
  // Ejemplo, si "soltero" esta seleccionado, "estado" va a ser "soltero"
  var estado = ''
  if (soltero_form.checked) {
    estado = soltero_form.value
  }
  else if (casado_form.checked) {
    estado = casado_form.value
  }
  else estado = 'vacio'


  // seleccionamos el select
  // Sacamos el indice de la opcion seleccionada
  // Usando ese indice, buscamos la opcion elegida
  // Asignamos la opcion elegida a la variable "nacionalidad"


  var i = nacionalidad_form.selectedIndex

  var nacionalidad = nacionalidad_form.options[i].value

  // console.log para chequear que nuestros datos esten bien 

  console.log(nombre, edad)
  console.log(estado)
  console.log(nacionalidad)


//Ahora validamos, marcando como error en el form: 

  // Nombre no tiene que estar vacio
  if (nombre.length === 0) {
    nombre_form.classList.add("error")
  }

// version alternativa (mas linda)
  // if (!nombre) {
  //   nombre_form.classList.add("error")
  // }


  // edad debe ser mayor a 18 y menor a 120
  if (edad < 18 || edad > 120) {
    edad_form.classList.add("error")
  }

  if (estado === 'vacio') {

    soltero_form.nextElementSibling.classList.add("error") 
    casado_form.nextElementSibling.classList.add("error") 
  }

// // nacionalidades se "autovalidan", 
// // porque ya sabemos que estan seleccionadas. 


if (nombre.length > 0 
  && (edad > 18 
    && edad < 120) 
  && estado !== 'vacio') {
  agregarInvitado(nombre, edad, estado, nacionalidad)
  }
}



function agregarInvitado(nombre, edad, estado, nacionalidad) {

  if (estado === "taken") {
    estado = "No disponible"
  }
  else if (estado === "single") {
    estado = "Disponible"
  }

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana"
  }




 document.querySelector("lista")

 var nuevoArray = [nombre, edad, nacionalidad, estado]

 for (var i = 0; i < nuevoArray.length; i++) {
   var span = document.createElement("span")
   span.textContent = nuevoArray[i]
   lista.appendChild("span")
 }









// var lista = document.getElementById("lista-de-invitados")

// var elementoLista = document.createElement("li")

// elementoLista.classList.add("elemento-lista")

// elementoLista.textContent = "Nombre: " + nombre + ". Edad: " + edad + ". Preferencia: " + estado + ". Nacionalidad: " + nacionalidad
// // elementoLista.innerHTML = "Nombre: " + nombre + ". Edad: " + edad + ". Preferencia: " + estado + ". Nacionalidad: " + nacionalidad

// lista.appendChild(elementoLista)



var botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
var corteLinea = document.createElement("br")
elementoLista.appendChild(corteLinea)
elementoLista.appendChild(botonBorrar);





 botonBorrar.onclick = function() {
// this.parentNode.style.display = 'none';
botonBorrar.parentNode.remove()
  }
}


// function agregarInvitado(nombre, edad, estado, nacionalidad) {

//   if (estado === "taken") {
//     estado = "No disponible"
//   }
//   else if (estado === "single") {
//     estado = "Disponible"
//   }

//   if (nacionalidad === "ar") {
//     nacionalidad = "Argentina"
//   }
//   else if (nacionalidad === "vnzl") {
//     nacionalidad = "Venezolana"
//   }
//   else if (nacionalidad === "per") {
//     nacionalidad = "Peruana"
//   }

// var lista = document.getElementById("lista-de-invitados")

// var elementoLista = document.createElement("div")
// elementoLista.classList.add("elemento-lista")
// lista.appendChild(elementoLista)

// var spanNombre = document.createElement("span")
// var inputNombre = document.createElement("input")
// var espacio = document.createElement("br")
// spanNombre.textContent = "Nombre: "
// inputNombre.value = nombre 
// elementoLista.appendChild(spanNombre)
// elementoLista.appendChild(inputNombre)
// elementoLista.appendChild(espacio)





// function crearElemento(descripcion, valor) {
// var spanNombre = document.createElement("span")
// var inputNombre = document.createElement("input")
// var espacio = document.createElement("br")
// spanNombre.textContent = descripcion + ": "
// inputNombre.value = valor 
// elementoLista.appendChild(spanNombre)
// elementoLista.appendChild(inputNombre)
// elementoLista.appendChild(espacio)
// }

// crearElemento("Nombre", nombre)
// crearElemento("Edad", edad)
// crearElemento("Nacionalidad", nacionalidad)
// crearElemento("Estado", estado)

// var botonBorrar = document.createElement("button")
// botonBorrar.textContent = "Eliminar invitado"
// botonBorrar.id = "boton-borrar"
// var corteLinea = document.createElement("br")
// elementoLista.appendChild(corteLinea)
// elementoLista.appendChild(botonBorrar);




//  botonBorrar.onclick = function() {
// // this.parentNode.style.display = 'none';
// botonBorrar.parentNode.remove()
//   }
// }



