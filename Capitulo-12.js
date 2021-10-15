//Callbacks - Promesas - Await & Async

//Callback: En resumen es una funcion que le pasamos como parametro otra funcion

//1era Forma
function prueba(callback){ //aca tenemos la funcion dentro de la funcion
    callback("kevin"); //aca ejecutamos esa funcion "callback"
}

function decirNombre(nombre){
    console.log(nombre);
}

prueba(decirNombre);

//2da forma

prueba(function decirN(nom){
    console.log(nom);
})

