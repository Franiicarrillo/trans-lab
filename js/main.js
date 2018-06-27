/* Holiii acá va tu código también */
var form  = document.getElementsByTagName('form')[0];
var email = document.getElementById('mail');
var error = document.querySelector('.error');

email.addEventListener("keyup", function (event) {
  // Cada vez que el usuario escriba algo, revisaremos si
  // el campo de email es válido.
  if (email.validity.valid) {
    // En caso que haya un mensaje de error visible, si el campo
    // es válido, removemos el mensaje de error.
    error.innerHTML = ""; // Limpia el contenido del mensaje
    error.className = "error"; // Restablece el estado visual del mensaje
  }
}, false);
form.addEventListener("submit", function (event) {
  // Cada vez que el usuario intenta enviar los datos, verificamos
  // si el campo de correo es válido.
  if (!email.validity.valid) {

    // Si el campo no es válido, mostramos un mensaje de error.
    error.innerHTML = "La direccion de correo electronico es obligatoria";
    error.className = "error active";
    // Y prevenimos que el formulario sea enviado, cancelando el evento
    event.preventDefault();
  }
}, false);
