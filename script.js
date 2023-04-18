const botonEncriptado = document.getElementById("boton-encriptado");
const botonCopiar = document.getElementById("boton-copiar");
const botonDesencriptar = document.getElementById("boton-desencriptado");
const textoDeEntrada = document.getElementById("textoportrabajar");

// Función para encriptar.
botonEncriptado.addEventListener("click",function encriptacion()
{
    // constante que recibe el texto sin encriptar ingresado por el usuario.
    const textoSinEncriptar = textoDeEntrada.value;
    
    // Proceso para encriptar.
    const textoConEnter = textoSinEncriptar.replaceAll('e', 'enter');
    const textoConImes = textoConEnter.replaceAll('i', 'imes');
    const textoConAi = textoConImes.replaceAll('a', 'ai');
    const textoConOber = textoConAi.replaceAll('o', 'ober');
    const textoFinal = textoConOber.replaceAll('u', 'ufat');

    colocarTexto(textoFinal);
})

// Función para desencriptar.
botonDesencriptar.addEventListener("click",function desencriptar()
{
    // constante que recibe el texto encriptado ingresado por el usuario.
    const textoSinDesencriptar = textoDeEntrada.value;

    // Proceso para desencriptar.
    const textoSinEnter = textoSinDesencriptar.replaceAll('enter', 'e');
    const textoSinImes = textoSinEnter.replaceAll('imes', 'i');
    const textoSinAi = textoSinImes.replaceAll('ai', 'a');
    const textoSinOber = textoSinAi.replaceAll('ober', 'o');
    const textoFinal = textoSinOber.replaceAll('ufat', 'u');

    colocarTexto(textoFinal);
})

// funcion para colocar el texto
function colocarTexto (texto)
{
    if(document.querySelector(".respuesta figure") !== null && document.querySelector(".respuesta h3") !== null)
    {
        document.querySelector(".respuesta figure").remove();
        document.querySelector(".respuesta h3").remove();
        
        document.querySelector('.respuesta p').innerHTML = "";
        document.querySelector('.respuesta p').innerHTML = texto;
        document.querySelector('.respuesta p').style.color = "#FFFFFF";
        document.querySelector('.respuesta p').style.fontWeight = "bold";
        document.querySelector('.copiar').style.display = "flex";
        document.querySelector('.bloque-respuesta').style.justifyContent = "space-between";
        document.querySelector('.bloque-respuesta p').style.margin = "4rem 3rem";
        document.querySelector('.bloque-respuesta .copiar').style.marginBottom = "2rem";
    }
    else
    {
        document.querySelector('.respuesta p').innerHTML = "";
        document.querySelector('.respuesta p').innerHTML = texto;
        document.querySelector('.respuesta p').style.color = "#FFFFFF";
        document.querySelector('.respuesta p').style.fontWeight = "bold";
        document.querySelector('.copiar').style.display = "flex";
        document.querySelector('.bloque-respuesta').style.justifyContent = "space-between";
        document.querySelector('.bloque-respuesta p').style.margin = "4rem 3rem";
        document.querySelector('.bloque-respuesta .copiar').style.marginBottom = "2rem";
    }
}

// Restriccion para las mayusculas, caracteres especiales o números.
textoDeEntrada.addEventListener("keydown",function(evento)
{
    const char = evento.key;
    // Verifica si se ingresó una letra mayúscula, que no incluya la tecla ctrl,el keycode 8 para que el usuario 
    // pueda borrar lo que escribio, las feclas para poder cambiar el caracter y la tecla enter.
    if (/[A-Z]/.test(char) && !evento.ctrlKey && evento.keyCode !== 8 && evento.key !== 'ArrowUp' && evento.key !== 'ArrowDown' 
        && evento.key !== 'ArrowLeft' && evento.key !== 'ArrowRight' && evento.key !== 'Enter') 
    { 
        // Detiene la acción predeterminada de la tecla presionada
        evento.preventDefault(); 
        // Genera una alerta para que el usuario no ingrese las mayusculas.
        alert("No se permiten letras mayúsculas en este campo.");
    }
    // Restriccion de caracteres especiales
    else if(/^[0-9{}ñ´+.,:;?!¡¡\-'[\]=/]+$/.test(char))
    {
        // Detiene la acción predeterminada de la tecla presionada
        evento.preventDefault(); 
        // Genera una alerta para que el usuario no ingrese caracteres especiales o números.
        alert("No se permiten caracteres especiales o números en este campo.");
    }
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

