var boton = document.getElementById("botonModal")
var botonDeCierre = document.getElementById("botonCerrarModal")
var agarrarModal = document.getElementById("modalWrapper")

boton.onclick = function() {
  agarrarModal.classList.remove("displayNone")
  // boton.classList.add("displayNone")
}

botonDeCierre.onclick = function() {
  agarrarModal.classList.add("displayNone")
  boton.classList.remove("displayNone")
}