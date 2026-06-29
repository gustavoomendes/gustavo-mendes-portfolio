// Alterna entre o tema claro e escuro

const btnTema = document.getElementById("btnTema");

btnTema.addEventListener("click", function () {
    document.body.classList.toggle("dark");
});


// Formulário de contato

const formContato = document.getElementById("formContato");

formContato.addEventListener("submit", function (event) {

    // Impede o envio padrão do formulário
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    // Verifica se todos os campos foram preenchidos
    if (nome === "" || email === "" || mensagem === "") {
        alert("Preencha todos os campos.");
        return;
    }

    // Expressão regular para validar e-mail
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailValido.test(email)) {
        alert("Informe um e-mail válido.");
        return;
    }

    // Simulação do envio
    alert("Mensagem enviada com sucesso!");

    // Limpa o formulário
    formContato.reset();

});