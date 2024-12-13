// Seletores
const produtoSelect = document.getElementById('produto');
const quantidadeInput = document.getElementById('quantidade');
const listaProdutos = document.getElementById('lista-produtos');
const valorTotalSpan = document.getElementById('valor-total');

// Variáveis globais
let carrinho = [];
let total = 0;

// Função para adicionar produtos ao carrinho
function adicionar() {
  const produtoTexto = produtoSelect.value; // Exemplo: "Celular - R$1400"
  const quantidade = parseInt(quantidadeInput.value) || 1; // Valor padrão: 1
  const [produtoNome, precoTexto] = produtoTexto.split(' - R$');
  const preco = parseFloat(precoTexto);

  // Adicionar o produto ao carrinho
  carrinho.push({ nome: produtoNome, preco, quantidade });

  // Atualizar o carrinho na interface
  atualizarCarrinho();
}

// Função para limpar o carrinho
function limpar() {
  carrinho = [];
  total = 0;
  atualizarCarrinho();
}

// Função para atualizar o carrinho e o total na interface
function atualizarCarrinho() {
  // Limpar lista de produtos
  listaProdutos.innerHTML = '';

  // Calcular o total e renderizar os produtos
  total = 0;
  carrinho.forEach((produto) => {
    const subtotal = produto.preco * produto.quantidade;
    total += subtotal;

    // Criar elemento para o produto no carrinho
    const produtoElemento = document.createElement('section');
    produtoElemento.className = 'carrinho__produtos__produto';
    produtoElemento.innerHTML = `
      <span class="texto-azul">${produto.quantidade}x</span> ${produto.nome} 
      <span class="texto-azul">R$${subtotal.toFixed(2)}</span>
    `;
    listaProdutos.appendChild(produtoElemento);
  });

  // Atualizar o valor total
  valorTotalSpan.textContent = `R$${total.toFixed(2)}`;
}
