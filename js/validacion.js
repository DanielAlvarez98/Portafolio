const usuario= document.getElementById("formcontato__text");
const correo= document.getElementById("formcontato__email");
const asunto= document.getElementById("formcontato__asunto");
const mensaje= document.getElementById("formcontato__mensaje");
const formulario= document.getElementById("formulario");
const validacion= document.getElementById("validar");
const enviado =document.getElementById("enviado");

formulario.addEventListener("submit", (e)=>{
    e.preventDefault();
    let alerta = ""
    let valido = false
    let nombre=/^[a-zA-Z0-9\_\-]{4,16}$/ // Letras, numeros, guion y guion_bajo
	let identificar=/^[a-zA-ZÀ-ÿ\s]{1,50}$/ // Letras y espacios, pueden llevar acentos.
	let email= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    validacion.innerHTML=""
    enviado.innerHTML=""
    if(!nombre.test(usuario.value)){
        alerta+="Digite su nombre <br>"
        valido=true
    }
    if(!email.test(correo.value)){
        alerta+="Digite correo válido <br>"
        valido=true
    }
    if(!identificar.test(asunto.value)){
        alerta+="Por favor escriba el asunto <br>"
        valido=true
    }
    if(!identificar.test(mensaje.value)){
        alerta+="Por favor escriba un mensaje <br>"
        valido=true
    }
    if(valido){
        validacion.innerHTML=alerta
        valido.reset()
    }else{
        enviado.innerHTML="Mensaje enviado"
    }
    formulario.reset();
});