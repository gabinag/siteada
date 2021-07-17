const nome = document.getElementById("nome").value;
const email = document.getElementById("email").value;

if( nome != "" &&  email != ""){
    alert("Prontinho! Você receberá as novidades por email.");
}else{
    alert("Por favor, preencha os campos nome e email!");
 }