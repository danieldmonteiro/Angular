let menu = document.getElementById("menu");
        function mostrarMenu(){
            if(menu.style.display != "flex"){
                menu.style.display = "flex"
            }else{
                menu.style.display = "none"
            }
        }

let email = document.getElementById("campo-email");

function enviarEmail(){
    let emailDigitado = email.value;
    console.log(emailDigitado)
}

 let email = document.getElementById("campo-email-login");
 let password = document.getElementById("campo-senha");

 function enviarEmailSenha(){
    let emailDigitato = email.value;
    let passwordDigitado = password.value;
    console.log(emailDigitado + passwordDigitado)
}