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
/* 
const objeto = {
    propiedad1 : "valor1",
    propiedad2 : "valor2",
    propiedad3 : "valor3"
};


const obtenerInformacion = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=> {resolve(objeto)},3000);
    })
    
    
}
*/
//obtenerInformacion().then(resultado => console.log(resultado));
/*
const mostrarResultado = async()=>{
    resultado = await obtenerInformacion();
    console.log(resultado);
}

mostrarResultado();
*/ 

//Cofla

const materiasHTML = document.querySelector(".materias");
const materias = [
    {
        nombre: "Fisica 2",
        nota: 4
    },
    {
        nombre: "Ingenieria Web 2",
        nota: 8
    } ,
    {
        nombre: "Bases de Datos 2",
        nota: 6
    },
    {
        nombre: "Programación Funcional",
        nota: 5
    }
]


const obtenerMateria = (id)=>{
    return new Promise((resolve,reject)=>{
        materia = materias[id];
        if(materia == undefined){
            reject("No existe la materia");
        }else{
            setTimeout(()=>{resolve(materia)},Math.random()*500);
        }
    })
}

//obtenerMateria(0).then(res=>console.log(res));

const devolverMaterias = async()=>{
    let materia =[];

    for (var i = 0; i < materias.length; i++) {
        materia[i] = await obtenerMateria(i);
        console.log(materia[i]);
        let newHTMLCode=`
        <div class="materia">
            <div class="nombre">${materia[i].nombre}</div>
            <div class="nota">${materia[i].nota}</div>
        </div>
        `;
        materiasHTML.innerHTML += newHTMLCode;

    }
}

devolverMaterias();