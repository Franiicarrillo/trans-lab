// let direccionEmail=document.getElementById('mail').value
// console.log (direccionEmail)
// cuadradoEmail.value=direccionEmail

let arrayTarjetas=[];
btnAgregarTarjeta.addEventListener('click',agregarArray);

function agregarArray(){
    let  elementoArray=numeroTarjeta.value
    arrayTarjetas.unshift(elementoArray);
    console.log(arrayTarjetas)
    numeroTarjeta.value='';
//........................creamos inputs donde mostrar las trajetas ingresadas
    let tarjetaAlmacenada = document.createElement("INPUT");
    tarjetaAlmacenada.setAttribute("type", "tel");
    tarjetaAlmacenada.setAttribute("id", "tarjetasGuardadas");
    tarjetaAlmacenada.setAttribute("value", arrayTarjetas[0]);
    document.body.appendChild(tarjetaAlmacenada);
//..............................creando el Select de las tarjetas guardadas
    let tarjetaGuardadaEnSelect = '';
    tarjetaGuardadaEnSelect += `<select id='selectTarjetas'><option disabled selected > Selecciona tarjeta </option>`
    for(i=0;i<arrayTarjetas.length;i++){
        tarjetaGuardadaEnSelect += `<option >${arrayTarjetas[i]}</option>`
    }
    tarjetaGuardadaEnSelect += `</select>`
    document.getElementById('tarjetas').innerHTML = tarjetaGuardadaEnSelect;
}