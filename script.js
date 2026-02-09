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
        titulo: "Nexus Ledger - SaaS Financeiro",
        icon: '<i class="ri-book-open-line"></i>',
        subtitulo: "Sistema Full Stack para controle financeiro empresarial.",
        desafio: "Desenvolver uma aplicação completa que saísse do ambiente local (localhost) para a nuvem, resolvendo problemas de CORS, persistência de dados e comunicação entre Frontend e Backend em servidores diferentes.",
        solucao: [
            "Backend: API robusta construída com Python (FastAPI) e SQLAlchemy.",
            "Frontend: Interface responsiva moderna consumindo a API via Fetch, com gráficos interativos usando Chart.js.",
            "Infraestrutura: Deploy automatizado do Backend no Render e do Frontend na Vercel.",
        ]
    },
    3: {
        titulo: "CineVerse Explorer",
        icon: '<i class="ri-movie-2-line"></i>', // Ícone de filme do Remix Icon
        subtitulo: "Exploração de Filmes | API REST & LocalStorage",
        desafio: "Criar uma plataforma de filmes fluida que consumisse dados externos em tempo real, garantindo que o usuário pudesse favoritar seus títulos preferidos sem precisar de um banco de dados externo pesado.",
        solucao: [
            "Consumo de API: Integração completa com a API do TMDB para busca de títulos, capas e detalhes técnicos.",
            "Persistência Local: Implementação de LocalStorage para salvar a lista de favoritos do usuário diretamente no navegador.",
            "Interface Dinâmica: Manipulação avançada do DOM para exibir modais de detalhes e notificações Toast de feedback.",
            "Experiência do Usuário: Criação de uma Splash Screen profissional e spinners de carregamento para suavizar a espera dos dados."
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