
//Objeto tipo JSON (Deserializado)
// const objeto = {

//     "variable1":"Kevin",
//     "variable2":"Yanes"

// };

// console.log(objeto);

//Se necesita serializar para enviar los datos en la red
//Cuando lo enviamos, debemos mandarlo serializado...De la misma forma , lo recibimos serializado
//cuando lo pedimos.

// const objeto1 = {"variable3":"Ladri","variable4":"Disandro"};

// console.log(typeof objeto1);

//------------------------------------------------------------------

//De esta forma se serializa

// var objeto = {

//     "variable1":"Kevin",
//     "variable2":"Yanes"

// };
// console.log(typeof objeto);
// objeto = JSON.stringify(objeto);
// console.log(typeof objeto);

//------------------------------------------------------------------

//Deserializar un objeto serializado

// var objeto = '{"variable1":"Kevin","variable2":"Yanes"}';
// console.log(typeof objeto);
// objeto = JSON.parse(objeto);
// console.log(typeof objeto);

//------------------------------------------------------------------
//Verificacion en el caso que el usuario use internet explorer
// let peticion;

// if(window.XMLHttpRequest){
//          peticion = new XMLHttpRequest();
// }else{
//          peticion = new new ActiveXObject("Microsoft.XMLHTTP");
// }



// peticion.addEventListener("load",()=>{
//         let respuesta;
       
//         if(peticion.status == 200){
//                 respuesta = peticion.response;
//         }else{
//                 respuesta = "No se encontro respuesta";
//         }

//         respuesta = JSON.parse(respuesta);

//         console.log(respuesta);
    
// })

// peticion.open("GET","informacion.txt");
// peticion.send();
//------------------------------------------------------------------

// let peticion;

// peticion = fetch("https://reqres.in/api/users?page=2"); //Si no le definis que accion realiza por defecto esto va a ser un GET

// peticion.then(res=>res.text()).then((res)=>console.log(res));

// //De esta forma se hacen los posts
// fetch("https://reqres.in/api/users",{
//         method: "POST",
//         body: JSON.stringify({
//                 "nombre" : "kevin",
//                 "apellido" : "yanes"
//         }),
//         headers : {"Content-type" : "application/json"}
// }).then((res)=>res.json())
// .then((res)=>console.log(res));

//------------------------------------------------------------------

//const axios = require('axios').default;

axios("/public/info.txt")
        .then(res=>console.log(res.data));

axios.post("https://reqres.in/api/users", {
        "nombre": "angelo",
        "apellido": "manfredi"
})
        .then(res=>console.log(res.data));
//------------------------------------------------------------------

const getName = async()=>{
        let peticion = await fetch("/public/info.txt");
        let resultado = await peticion.json();

        console.log(resultado);
}

getName();