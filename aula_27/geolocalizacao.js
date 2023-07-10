/*
para trabalhar com geologalização precisamos utilizar o seguinte metodo. 

navigator.geolocation.getCurrentPosition()

porém, ele necessita de uma função de call back, na qual ele vai retornar algo caso ele não consiga retornar o valor. 

ele retornar um conjunto de info chamado coords e um timestamp atual.

coords possui as seguintes infos:
    accuracy 
    altitude
    altitudeAccuracy
    heading
    latitude
    longitude
    speed
*/

const long = document.querySelector("#long")
const lati = document.querySelector("#lati")


if(navigator.geolocation) {
    //se for verdadeiro, ele irá realizar a função passada dentro do getCurrentPosition(nomeFunçãoSemParenteses)
    //a segunda função passada é o que acontece caso ele não consiga achar a localização. 
    navigator.geolocation.getCurrentPosition(mostrarLocalização, erroDeLocalização)

} else {
    //caso ele não permita reastrear a localização
    alert("Por favor, permita o acesso a geolocalização.")
}

function mostrarLocalização(pos) {
    long.innerHTML = `longitude: ${pos.coords.longitude}` 
    lati.innerHTML = `latitude: ${pos.coords.latitude}` 
}

function erroDeLocalização() {
    console.log("Erro ao obter a localização")
}
