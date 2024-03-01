var listaDeAdjetivos = [" carpinchito bebé", ' pingüinito', ' besito de la Vale', ' besito tuyo',"pedacito del cielo","pollito amarillo", "pan con miel", "algodón dulce con forma de carpinchito", "mensaje tuyo", "videito de los que me mandas siempre", "Oh no!", "bichito","manso pa las balas", '"Mi amor" que me djiste sin querer'];
var divAdjetivos = document.getElementById("div_adjetivo");
var mensaje = document.getElementById("adjetivo");
function randomAd(listaDeAdjetivos) {
    return Math.floor(Math.random() * listaDeAdjetivos.length);
}

function mostrarAdjetivoAleatorio() {
    var indiceAleatorio = randomAd(listaDeAdjetivos);
    var adjetivoAleatorio = listaDeAdjetivos[indiceAleatorio];
    mensaje.textContent = String.fromCharCode(160)+adjetivoAleatorio;
    
}

// Llamar a la función para mostrar un adjetivo aleatorio al cargar la página
mostrarAdjetivoAleatorio();

// Adjuntar evento de clic al documento
document.addEventListener("click", function() {
    mostrarAdjetivoAleatorio();
});
