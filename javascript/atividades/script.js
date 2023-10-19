document.addEventListener('DOMContentLoaded', function () {

    //adEventListener é um termo usado na programação para descrever uma ação que permite que um elemento da página da web (como um botão, uma imagem ou qualquer outra coisa que você possa interagir) "ouça" ou "esteja ciente" de eventos, como um clique do mouse, uma tecla pressionada ou uma mudança na página.

    //O evento "DOMContentLoaded" é acionado quando a página é totalmente carregada no navegador.

    const form = document.getElementById('form');

    //Aqui estaos obtendo o elemento HTML com o id "form" e armazenando-o na variável chamada "form"

    const nomeUsuarioInput = document.getElementById('nomeusuario');
    const nomeEmailInput = document.getElementById('nomeEmail');
    const erronomeElement = document.getElementById('erroNome');
    const erroEmailElement = document.getElementById('erroEmail');

    //Estamos obtendo o elemento de entrada (input) HTML com o id "nomeusuario" e armazenando-o na variável "nomeUsuarioInput". Isso se refere ao campo onde o usuário insere seu nome.

    const erroElement = document.getElementById('erro');

    //Estamos obtendo o elemento HTML com o ID "erro" e armazenando-o na variável "ErroElement". Isso se refere á <div> que usaremos para exibir mensagens de erro.

    form.addEventListener('submit', function (event) {


    });
    //Estamos adicionando um ouvinte de evento ao formulário. Esse ouvinte será acionado quando o usuário tentar enviar o formulário.

    if (nomeUsuarioInput.value.trim() === '') {
        event.preventDefault(); //Impede o envio do formulário

        //exibe a mensagem de erro
        erroElement.style.display = 'block';
    } else {
        //Se o campo não estiver vazio, oculta a mensagem de erro
        erroElement.style.display = 'none';
    }

    if (nomeEmailInput.value.trim() === '') {
        event.preventDefault();
        erroEmailElement.style.display = 'block';
    } else {
        erroEmailElement.style.display = 'none;'
    }
//Validar o campo de e-mail com uma expressão regular ou seja um e-mail válido.

const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z] {2,4}$/; 
if (!emailRegex.test(nomeEmailInput.value.trim())){
    event.preventDefault();
    erroEmailElement.style.display='block';
} else {
    erroEmailElement.style.display='none';

}


    //Aqui, estamos verificando se o campo de nome de usuário está vazio, se estiver vazio:
    //event.preventDefault(); Isso impede o envio do formulário, ou seja, evita que os dados do formulário sejam enviados ao servidor se houver um erro.

    //else { Se o campo de nome de usuário não estiver vazio: erroElement.style.display = 'none'; Isso faz com que a <div> de erro seja ocultada na página, definindo o estilo de exibição. Ou seja, oculta a mensagem de erro quando o campo está preenchido corretamente


});