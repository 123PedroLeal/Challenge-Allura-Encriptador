const botonEncriptado = document.getElementById("boton-encriptado");
const botonCopiar = document.getElementById("boton-copiar");
const botonDesencriptar = document.getElementById("boton-desencriptado");

// Función para encriptar.
botonEncriptado.addEventListener("click",function encriptacion()
{
    const textoPorEncriptar = document.getElementById("textoportrabajar");
    const textoSinEncriptar = textoPorEncriptar.value;
    
    // Proceso para encriptar.
    const textoConEnter = textoSinEncriptar.replaceAll('e', 'enter');
    const textoConImes = textoConEnter.replaceAll('i', 'imes');
    const textoConAi = textoConImes.replaceAll('a', 'ai');
    const textoConOber = textoConAi.replaceAll('o', 'ober');
    const textoFinal = textoConOber.replaceAll('u', 'ufat');

    document.querySelector(".respuesta figure").remove();
    document.querySelector(".respuesta h3").remove();

    document.querySelector('.respuesta p').innerHTML = "";
    document.querySelector('.respuesta p').innerHTML = textoFinal;
    document.querySelector('.respuesta p').style.color = "#FFFFFF";
    document.querySelector('.respuesta p').style.fontWeight = "bold";
    document.querySelector('.copiar').style.display = "flex";
    document.querySelector('.bloque-respuesta').style.justifyContent = "space-between";
    document.querySelector('.bloque-respuesta p').style.margin = "4rem 3rem";
    document.querySelector('.bloque-respuesta .copiar').style.marginBottom = "2rem";
})

// Funcion para copiar.
botonCopiar.addEventListener("click",function copiar()
{
    const texto = document.querySelector('.respuesta p');
    // Crear un elemento temporal porque es necesario almacenar ese valor en la memoria (el usuario no lo ve).
    const textareaTemporal = document.createElement('textarea');

    // Luego establecer su valor al contenido del elemento seleccionado
    textareaTemporal.value = texto.textContent;

    // Agregar el elemento temporal al documento, es decir a la memoria del naveagdor (el usuario no lo ve).
    document.body.appendChild(textareaTemporal);

    // Seleccionar el elemento temporal
    textareaTemporal.select();

    // Luego copiar su contenido a la portapapeles
    document.execCommand('copy');

    // Eliminar el elemento temporal del documento y liberar el espacio de memoria utilizado en el navegador.
    document.body.removeChild(textareaTemporal);
})

botonDesencriptar.addEventListener("click",function desencriptar()
{
    const textoPorDesencriptar = document.getElementById("textoportrabajar");
    const textoSinDesencriptar = textoPorDesencriptar.value;

    // Proceso para encriptar.
    const textoSinEnter = textoSinDesencriptar.replaceAll('enter', 'e');
    const textoSinImes = textoSinEnter.replaceAll('imes', 'i');
    const textoSinAi = textoSinImes.replaceAll('ai', 'a');
    const textoSinOber = textoSinAi.replaceAll('ober', 'o');
    const textoFinal = textoSinOber.replaceAll('ufat', 'u');

    document.querySelector('.respuesta p').innerHTML = "";
    document.querySelector('.respuesta p').innerHTML = textoFinal;

})