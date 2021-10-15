const sendButton = document.getElementById("boton-envio");

sendButton.addEventListener("click",()=>{
    let resultado;
    let mensaje;

    try{
         prevRes = parseInt(document.getElementById("nota").value);
         if(isNaN(prevRes)){
             throw e;
         }

         mensaje = validarMensaje(prevRes);
         resultado = verificarAprobacion(8,5,prevRes);
    }catch(e){
        resultado = "Necesito un numero, NO TEXTO";
        mensaje = "te lo deniego porque sos malo"; 
    }

     abrirModal(resultado,mensaje);
    
})

const validarMensaje = (pr)=>{
    let resultado;

    switch(pr){

        case 1:
            resultado = "Te caes a pedazos, REPROBADO";
            break;
        case 2:
            resultado = "caes a pedazos, REPROBADO";
            break;
        case 3:
            resultado = "a pedazos , REPROBADO";
            break;
        case 4:
            resultado = "pedazos, REPROBADO";
            break;
        case 5:
            resultado = "Te seguis cayendo a pedazos pero no tanto, REPROBADO";
            break;
        case 6:
            resultado = "Estuviste cerca, reprobado";
            break;
        case 7:
            resultado = "De pedo, aprobaste";
            break;
        case 8:
            resultado = "Bien loco, Aprobaste"
            break;
        case 9:
            resultado = "Tremendo man, APROBASTE";
            break;
        case 10:
            resultado = "No podes hacerlo mejor, APROBASTE!!";
            break;
        default:
            resultado = "Ni se que me quisiste mandar";
            break;
    }

    return resultado;

}

const verificarAprobacion = (nota1,nota2,prevRes)=>{
    
    
    promedio = (nota1 + nota2 + prevRes) / 3;
    if(promedio >= 7){
        return "<span class='verde'>APROBADO</span>";
    }
    return "<span class='rojo'>DESAPROBADO</span>";
}

const abrirModal = (res,msg)=>{
    console.log(res);
    console.log(msg);
}

