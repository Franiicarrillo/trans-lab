

//.................................................pagina para consultar saldo y dar el valor del pasaje
let tarifaSelec;
let seleccionado = document.getElementById('selectHorarios');
    seleccionado.addEventListener('change',function (){
    tarifaSelec = seleccionado.options[seleccionado.selectedIndex].value;
    document.getElementById('costoPasaje').innerHTML=`$${tarifaSelec*1000}`
    console.log(tarifaSelec);
    });

document.getElementById('btnEnviarConsulta').addEventListener('click',cargarJson);

function cargarJson(){
const numeroTarjetaBip=document.getElementById('numeroTarjeta').value
console.log(numeroTarjetaBip)
let url='';
 url +='http://www.psep.cl/api/Bip.php?&'
 url+=`numberBip=${numeroTarjetaBip}`
fetch(url)
.then(resp =>resp.json())
.then(data => {calcularTarifa(data)
    obtenerSaldo(data)})
.catch(e => console.log(e))
}



let saldoTarjeta1;
function calcularTarifa(data){
    let saldoTarjeta= data["Saldo  tarjeta"] 
    saldoTarjeta1= saldoTarjeta.replace("$",'')
    console.log(saldoTarjeta1)
    let saldoRestante= (saldoTarjeta1-tarifaSelec).toFixed(3);
    console.log(saldoRestante)
    let respuesta;
    if (saldoRestante>=0){
         respuesta=saldoRestante
    }else{
         respuesta='Saldo Insuficiente'
    }
    document.getElementById('saldoFinal').innerHTML=`$${respuesta}`;
}

function obtenerSaldo(data){
    let saldo= data["Saldo  tarjeta"] 
    
    console.log(saldo)
}


