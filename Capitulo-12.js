//Callbacks - Promesas - Await & Async

//Callback: En resumen es una funcion que le pasamos como parametro otra funcion

//1era Forma
/*function prueba(callback){ //aca tenemos la funcion dentro de la funcion
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

console.log("---------------------------------------------");
console.log("---------------------------------------------");

//Promesas
//Son un objeto con 2 callbacks "reset" "resolve" , que representan algo


//Los datos se encuentran encapsulados
*/

/*
let nombre = "pedro"; 

const promesa = new Promise((resolve,reject)=>{
    if(nombre != "pedro"){
        reject("lo siento, el nombre no es pedro");
    }else{
        resolve(nombre);
    }

});

console.log(promesa);

//Para acceder a los datos encapsulados:

//Esto solo se ejecuta en el resolve (porque no hubo ningun problema)
//Pero los errores los podes manejar con un catch
promesa.then((resultado)=>{
    console.log(resultado);
}).catch((e)=>{
    console.log(e);
})
*/

//Await & Async.