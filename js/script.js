
document.getElementById("enviar").addEventListener("click", validaFormulario)

function validaFormulario() {
    
    let nome = document.getElementById("nome");
    let email = document.getElementById("email");

    if(nome.value != "" && email.value != ""){
    alert("Prontinho! Você receberá as novidades por email.");
    }else{
    alert("Por favor, preencha os campos nome e email!");
    }
}
