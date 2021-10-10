

let youtubeURL = "http://youtube.com";

//let ventana = window.open(youtubeURL);

//ventana.close();

//ventana.closed ---> Te dice si la ventana esta abierta o no (true or false)

//ventana.stop() ----> Detiene la ventana que está cargando

//print(); ----> Abris la configuracion para imprimir

//confirm("estas seguro de salir de mi pagina?");

//----------------------------------------------------------------

//const ventana = window.screen;

//console.log(ventana);
//document.write(ventana.availHeight);  -----> Te muestra el alto en pixeles de la ventana, dependiendo de
//                                             la posicion de la ventana en la que estes

//const screenLeft = window.screenLeft; -----> Te muestra el alto en pixeles de la ventana, dependiendo de
//                                             la posicion de la ventana en la que estes

//const screenTop = window.screenTop;   -----> Te muestra el alto en pixeles de la ventana, dependiendo de
//                                             la posicion de la ventana en la que estes

//document.write(screenLeft);
//document.write("</br></br>");
//document.write(screenTop);

//scrollX ----> Te dice cuanto scrolleaste en el eje X
//scrollY ----> Te dice cuanto scrolleaste en el eje Y

//window.scroll("ValorX","ValorY") -----> Te lleva a la posicion que vos le pusiste en los valores

//let ventana = window.open(youtubeURL);

//ventana.resizeBy(200,150); ---> Cambias el tamaño de la ventana

//----------------------------------------------------------------

//44) Location

//const href = window.location.href; // Te devuelve la URL de la pagina
//document.write(href);

//document.write("<br>");

//const href1 = window.location.host; // Te devuelve el nombre del dominio
//document.write(href1);

//const href1 = window.location.pathname; // Te devuelve en donde estamos "/ruta", todo despues del dominio
//document.write(href1);

//const href1 = window.location.protocol; // Te devuelve que tipo de protocolo es "HTTP" o "HTTPS" , etc.
//document.write(href1);

//const href1 = window.location.assign("https://youtube.com"); // Carga una nueva pagina
//document.write(href1);

//----------------------------------------------------------------

//Historia de cofla cap 7 - Ejercicio 1

//let alto = window.screen.availHeight;
//let ancho = window.screen.availWidth;

//comprar = confirm(`El alto es de ${alto}` + ` y el ancho es de ${ancho}` + ` la compras ?`);

//if(comprar){
//    alert("compra realizada exitosamente");
//}else{
//    alert("compra cancelada");
//}

//Historia de cofla cap 7 - Ejercicio 2

/*let Href = window.location.href;
let pathName = window.location.pathname;
let Protocol = window.location.protocol;
let Hostname = window.location.hostname;

document.write(`El href es ${Href}`);
document.write("<br>");
document.write(`El href es ${Hostname}`); 
document.write("<br>");
document.write(`El href es ${pathName}`); 
document.write("<br>");
document.write(`El href es ${Protocol}`); 
*/