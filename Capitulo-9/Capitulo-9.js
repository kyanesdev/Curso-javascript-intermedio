//Eventos: Te ejecutan una accion dependiendo lo que vos hagas, pero siempre aplicados a un elemento
//de esta manera va a tener sentido lo que vayas a hacer, ya que un evento nunca se hace solo.

const boton = document.querySelector(".boton");


//le pones la variable.addEventListener("como lo hace al evento, click por ejemplo", "la funcion o lo que hace");

/*function saludar(){
    alert("hola crack");
}
//-----------------------------------------------------------------------------------------
boton.addEventListener("click",saludar);
*/

//Aca trabajas con el objeto event, le podes ponert cualquier nombre, pero por convencion pones "e"
/*
boton.addEventListener("click",(e)=>{
    console.log(e.target);
});
*/
//-----------------------------------------------------------------------------------------

// Flujo de eventos o Event Flow
//Event bubbling (este viene por defecto) vs Event Capturing

//Event bubbling: Se ejecuta del mas específico (hijos) al menos específico (los contenedores o padres)
//Esto se puede cambiar asignando la propiedad "true" en el contenedor padre.

//Ejemplo:

/* contenedor1.addEventListener("click",(e)=>{
    alert("di click en el contenedor rojo");
}, true)
 */

//Para detener la propagacion de eventos se usa elemento.stopPropagation()

//Ejemplo:

/* boton.addEventListener("click",(e)=>{
    alert("di click en el boton");
    e.stopPropagation();
});
*/

//-----------------------------------------------------------------------------------------

//Eventos de Mouse

//IMPORTANTES
//click: un solo click.
//dbclick: 2 clicks en un tiempo de menos de 500ms (0,5seg).
//mouseover: pasas el mouse por encima del elemento o de sus hijos y se activa el evento.
//mouseout: tiene que ser por fuera del elemento o sus hijos y se activa el evento.

//OTROS
//contextmenu: das click derecho y se ejecuta el evento.
//mouseenter: se activa cuando el puntero esta (este evento es mas para internet explorer)
//mouseleave: es el opuesto al mouseenter (es como mouseout, la diferencia es que no para de ejecutarse)
//mousedown: se activa cuando soltas fuera del elemento. El click funciona dentro y si arrastras afuera, se desactiva. Este sigue funcionando.
//mouseup: apretas en el hijo y soltas dentro del contenedor, se activa.

//-----------------------------------------------------------------------------------------

//Eventos de Teclado

//keypress: ocurre cuando una tecla se presiona
//keydown: ocurre cuando una tecla se deja de presionar
//onekeyup: ocurre despues que los 2 eventos anterior terminen de ocurrir consecutivamente.

//-----------------------------------------------------------------------------------------

//Eventos de Interfaz

//error: ocurre cuando sucede un error durante la carga de un archivo multimedia.
//load: ocurre cuando un objeto se ha cargado.
//beforeunload: antes que el documento este a punto de descargarse.
//unload: ocurre una vez que se haya descargado el una pagina.
//resize: ocurre cuando se cambia el tamaño de vista del documento.
//scroll: ocurre cuando se desplaza la barra de desplazamiento de un elemento.
//select: ocurre despues que un usuario selecciona algun texto de <input> o <textarea>

//-----------------------------------------------------------------------------------------

//Timmers (temporizadores)

//setTimeout(): para ejecutarlo es setTimeout("le pasas la funcion","le pasas el tiempo antes de ejecutarse en milisegundos, 2seg son 2000")
//setInterval(): como el anterior pero lo hace repetida veces.
//clearTimeout(): eliminas el temporizador.
//clearInterval(): eliminas el intervalo.

//-----------------------------------------------------------------------------------------

// https://www.w3schools.com/jsref/dom_obj_event.asp

//-----------------------------------------------------------------------------------------

// Historia de Cofla Cap. 9

//Ejercicio A

const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const materia = document.getElementById("materia");
const botonsito = document.getElementById("boton-enviar");

const resultado = document.querySelector(".resultado");

botonsito.addEventListener("click",(e)=>{
    e.preventDefault(); //Evita que se envien los datos , esto está por defecto.
    let error = validarCampos();
    if(error[0]){ //Acá resulta que le pasas el dato de que si el error es true, se ejecuta el if
        resultado.innerHTML = error[1];
        resultado.classList.add("rojo");
    }else{
        resultado.innerHTML = "solicitud enviada correctamente";
        resultado.classList.add("verde");
    }
})

const validarCampos = ()=>{
    let error = [];
    if(nombre.value.length < 5){
        error[0] = true;
        error[1] = "El nombre no puede contener menos de 5 caracteres";
        return error;
    }else if(nombre.value.length > 40){
        error[0] = true;
        error[1] = "El nombre no puede contener mas de 40 caracteres";
        return error;
    }

    //aca harian falta las otras validaciones
    error[0] = false;
    return error;

}