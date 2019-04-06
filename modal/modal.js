
var boton = document.getElementById('boton');
var botonCerrar = document.getElementById('botonCerrar');
var modal = document.querySelector('.modal');
var modalContainer = document.getElementById('modal_container')

boton.addEventListener('click', function() {
  boton.classList.add("display_none")
  modalContainer.classList.add("display")
})
botonCerrar.addEventListener('click', function() {
  modalContainer.classList.add("display_none")
  modalContainer.classList.remove("display")
  boton.classList.remove("display_none")
})


