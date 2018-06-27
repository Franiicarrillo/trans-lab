let bring = {}
fetch("http://www.psep.cl/api/Bip.php?&numberBip=666")
.then(function(respuesta){
  console.log(respuesta)
  return respuesta.json();
})
.then(function(url){
  bring.url=url
  console.log(bring.url)
})
