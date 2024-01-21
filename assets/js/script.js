function showFrame(frameId) {
    document.querySelectorAll('.frame-content').forEach(div => {
        div.style.display = 'none';
    });
    document.getElementById(frameId).style.display = 'block';
}
function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "assets/img/menu_white.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "assets/img/close_white.svg";
    }
}
function clearAll () {
    document.querySelector('#nome').value = "";
    document.querySelector('#email').value = "";
    document.querySelector('#assunto').value = "";

}
document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();
    
    const nome = document.querySelector('#nome').value;
    const email = document.querySelector('#email').value;
    const assunto = document.querySelector('#assunto').value;
    
    // Pegar a data e hora exata
    const data = new Date();

    // Opções para formatar a data
    const opcoes = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
      timeZone: 'America/Sao_Paulo'
    };
    
    // Formatar a data para o fuso horário de São Paulo
    const dataFormatada = data.toLocaleString('pt-BR', opcoes);
    
    // Remover os segundos e o ano do início
    
    
    
    fetch('https://api.sheetmonkey.io/form/iCARUC3dcqk3fNPspFh7QD', {
            method: 'POST',
            headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                        'nome': nome,
                        'email': email,
                        'assunto': assunto,
                        'data': dataFormatada
                    },)
                
                })
                .then(response => {
                    if (!response.ok) {
                        // Se a resposta não for ok, lança um erro para ser capturado pelo .catch()
                        throw new Error(`HTTP error! status: ${response.status}`);
                    } else {
                        // Limpa os campos após a conclusão bem-sucedida da chamada da API
                        clearAll();
                        // Exibe o alerta após a limpeza dos campos
                        showAlert('success-alert');
                    }
                })
                .catch(error => {
                    // Trata erros que podem ocorrer durante a fetch ou na execução do .then()
                    console.error('Houve um problema com a operação fetch: ', error);
                });
                
            })
// Função para mostrar alerta
function showAlert(type) {
    document.getElementById(type).style.display = 'block';
}

// Função para fechar alerta
function closeAlert(type) {
    document.getElementById(type).style.display = 'none';
}

// Exemplo de uso:
// Para mostrar o alerta de sucesso: showAlert('success-alert');
// Para mostrar o alerta de erro: showAlert('error-alert');
