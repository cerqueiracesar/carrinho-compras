<<<<<<< Updated upstream
=======
// Variável global para armazenar o valor total de todos os produtos adicionados ao carrinho
let totalGeral = 0;

function limpar() {
  totalGeral = 0; // Reinicia o valor total para 0
  document.getElementById('lista-produtos').innerHTML = ''; // Limpa os produtos exibidos no carrinho
  document.getElementById('valor-total').textContent = 'R$ 0'; // Reseta o valor total exibido
}

// Função para adicionar um produto ao carrinho
function adicionar() {
    
    // Recuperar o valor selecionado no campo "produto" (o valor contém o nome e o preço separados por delimitadores)
    let produto = document.getElementById('produto').value;

    // Extrair o nome do produto antes do delimitador "-"
    let nomeProduto = produto.split('-')[0]; 

    // Extrair o valor unitário do produto após "R$"
    let valorUnitario = produto.split('R$')[1];

    // Recuperar a quantidade informada pelo usuário no campo de entrada
    let quantidade = document.getElementById('quantidade').value;

    // Calcular o preço total do produto (quantidade x valor unitário)
    let preco = quantidade * valorUnitario;

    // Adicionar o produto ao carrinho de compras exibido na tela
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `
        <section class="carrinho__produtos__produto">
            <span class="texto-azul">${quantidade}x</span> 
            ${nomeProduto} 
            <span class="texto-azul">R$${preco}</span>
        </section>`;

    // Atualizar o valor total acumulado no carrinho
    totalGeral = totalGeral + preco;

    // Atualizar o valor total exibido na tela
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalGeral}`;

    // Resetar o campo de quantidade para o valor padrão (0) para facilitar a próxima inserção
    document.getElementById('quantidade').value = 0;
}

// Chamar a função `limpar` ao carregar o script para garantir que o carrinho esteja vazio
limpar();
>>>>>>> Stashed changes
