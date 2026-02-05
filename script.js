// DADOS DOS SEUS PROJETOS
const projetos = {
    1: {
        titulo: "Planejador de Metas com IA",
        icon: '<i class="ri-brain-line"></i>',
        subtitulo: "Projeto Integrador | Produtividade & Gamificação",
        desafio: "O objetivo era criar uma aplicação que não apenas listasse tarefas, mas que ajudasse o usuário a manter o foco através de gamificação, adaptando as metas automaticamente baseadas no desempenho.",
        solucao: [
            "Frontend Dinâmico: Interface interativa construída com React e JavaScript para gerenciar o estado das metas em tempo real.",
            "Estrutura e Estilo: Layout semântico e responsivo desenvolvido com HTML e CSS, focado em usabilidade.",
            "Backend Robusto: Lógica de servidor implementada em PHP para processar as regras de gamificação e validação de dados.",
            "Banco de Dados: Persistência segura de dados utilizando SQL para armazenar usuários, tarefas e pontuações."
        ]
    },
    2: {
        titulo: "Sistema de Biblioteca",
        icon: '<i class="ri-book-open-line"></i>',
        subtitulo: "Automação de Gestão | Python & SQL",
        desafio: "Substituir planilhas manuais propensas a erro por um sistema robusto que controlasse milhares de registros de empréstimos, devoluções e cálculo automático de multas.",
        solucao: [
            "Banco de dados SQL estruturado para garantir integridade dos dados.",
            "Lógica de validação em Python para impedir empréstimos duplicados.",
            "Sistema de busca otimizado para encontrar livros por ISBN ou título.",
            "Geração automática de relatórios de atraso."
        ]
    },
    3: {
        titulo: "Analisador de Odds",
        icon: '<i class="ri-line-chart-line"></i>',
        subtitulo: "Ferramenta Analítica | Data Science",
        desafio: "Identificar oportunidades de valor em tempo real em um mercado volátil, onde a velocidade de processamento da informação é crucial para a tomada de decisão.",
        solucao: [
            "Web Scraping de múltiplas fontes de dados simultâneas.",
            "Uso de Pandas (Python) para limpeza e comparação estatística de odds.",
            "Algoritmo matemático para identificar arbitragem (lucro garantido).",
            "Painel de visualização de dados simplificado."
        ]
    }
};

// FUNÇÃO PARA ABRIR O MODAL
function abrirModal(id) {
    const modal = document.getElementById('modal-projeto');
    const dados = projetos[id];

    // Preenche os dados
    document.getElementById('modal-icon').innerHTML = dados.icon;
    document.getElementById('modal-titulo').innerText = dados.titulo;
    document.getElementById('modal-desc-curta').innerText = dados.subtitulo;
    document.getElementById('modal-desafio').innerText = dados.desafio;

    // Limpa e Preenche a lista de solução
    const lista = document.getElementById('modal-solucao');
    lista.innerHTML = ''; // Limpa anterior
    dados.solucao.forEach(item => {
        const li = document.createElement('li');
        li.innerText = item;
        lista.appendChild(li);
    });

    // Mostra o modal
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Trava a rolagem do fundo
}

// FUNÇÃO PARA FECHAR
function fecharModal() {
    document.getElementById('modal-projeto').style.display = 'none';
    document.body.style.overflow = 'auto'; // Destrava a rolagem
}

// FECHAR AO CLICAR FORA
window.onclick = function(event) {
    const modal = document.getElementById('modal-projeto');
    if (event.target == modal) {
        fecharModal();
    }
}

// INTRO ANIMAÇÃO
window.addEventListener('load', () => {
    // Aumentei para 3500 (3.5 segundos) para você ter tempo de ver a intro
    setTimeout(() => {
        document.getElementById('intro-screen').classList.add('hidden-intro');
    }, 2500); 
});