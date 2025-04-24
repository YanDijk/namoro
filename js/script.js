// Função quando o botão "Sim" for clicado
function clicarSim() {
    window.location.href='jogo.html'
}

// Função quando o botão "Não" for clicado
function clicarNao() {
    // Desabilita o botão "Não"
    const naoButton = document.getElementById('naoButton');
    naoButton.disabled = true;

    // Muda o botão "Não" de lugar
    const container = document.querySelector('.butoes');
    const randomPosition = Math.random();

    if (randomPosition > 0.5) {
        container.appendChild(naoButton); // Coloca o "Não" no final
    } else {
        container.prepend(naoButton); // Coloca o "Não" no início
    }

    // Exibe a tela de mensagem de permissão
    const mensagem = document.getElementById('mensagemPermissao');
    mensagem.style.display = 'flex'; // Agora a mensagem só aparece quando o botão "Não" for clicado
}

// Função para fechar a mensagem de permissão
function fecharMensagem() {
    const mensagem = document.getElementById('mensagemPermissao');
    mensagem.style.display = 'none'; // Oculta a mensagem novamente
}
