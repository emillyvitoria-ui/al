
const formulario = document.getElementById("formLogin");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;
    const mensagem = document.getElementById("mensagem");

    if (usuario === "admin" && senha === "1234") {
        mensagem.textContent = "Login realizado com sucesso!";
    } else {
        mensagem.textContent = "Usuário ou senha incorretos!";
    }

});
