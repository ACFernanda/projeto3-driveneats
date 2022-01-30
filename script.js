let prato = 0;
let bebida = 0;
let sobremesa = 0;
let precoPrato = 0;
let precoBebida = 0;
let precoSobremesa = 0;
let total = 0;

function alterarBotao() {
  if (prato !== 0 && bebida !== 0 && sobremesa !== 0) {
    const fecharPedido = document.querySelector(".finalizar");
    fecharPedido.classList.add("finalizar-verde");
    fecharPedido.innerHTML = "Fechar pedido";
  }
}

function selecionarPrato(botao, nomeExibicao, valorPrato) {
  const selecionado = document.querySelector(".pratos .selecionado");
  if (selecionado !== null) {
    selecionado.classList.remove("selecionado");
  }
  prato = nomeExibicao;
  precoPrato = valorPrato;

  botao.classList.add("selecionado");

  alterarBotao();
}

function selecionarBebida(botao, nomeExibicao, valorBebida) {
  const selecionado = document.querySelector(".bebidas .selecionado");
  if (selecionado !== null) {
    selecionado.classList.remove("selecionado");
  }
  bebida = nomeExibicao;
  precoBebida = valorBebida;
  botao.classList.add("selecionado");
  alterarBotao();
}

function selecionarSobremesa(botao, nomeExibicao, valorSobremesa) {
  const selecionado = document.querySelector(".sobremesas .selecionado");
  if (selecionado !== null) {
    selecionado.classList.remove("selecionado");
  }
  sobremesa = nomeExibicao;
  precoSobremesa = valorSobremesa;
  botao.classList.add("selecionado");
  alterarBotao();
}

function fecharPedido() {
  const confirmar = document.querySelector(".confirmacao");
  confirmar.classList.remove("esconder");

  const nomePrato = document.querySelector(".nome-prato");
  const nomeBebida = document.querySelector(".nome-bebida");
  const nomeSobremesa = document.querySelector(".nome-sobremesa");
  const valorPrato = document.querySelector(".preco-prato");
  const valorBebida = document.querySelector(".preco-bebida");
  const valorSobremesa = document.querySelector(".preco-sobremesa");
  const valorTotal = document.querySelector(".preco-total");
  total = precoPrato + precoBebida + precoSobremesa;

  nomePrato.innerHTML = prato;
  nomeBebida.innerHTML = bebida;
  nomeSobremesa.innerHTML = sobremesa;
  valorPrato.innerHTML = precoPrato.toFixed(2).replace(".", ",");
  valorBebida.innerHTML = precoBebida.toFixed(2).replace(".", ",");
  valorSobremesa.innerHTML = precoSobremesa.toFixed(2).replace(".", ",");
  valorTotal.innerHTML = "R$ " + total.toFixed(2).replace(".", ",");
}

function cancelar() {
  const cancelar = document.querySelector(".confirmacao");
  cancelar.classList.add("esconder");
}

function finalizarPedido() {
  const nome = prompt("Qual é seu nome?");
  const endereco = prompt("Qual é seu endereço?");
  let mensagem;
  total = precoPrato + precoBebida + precoSobremesa;
  mensagem =
    "Olá, gostaria de fazer o pedido:\n- Prato: " +
    prato +
    "\n- Bebida: " +
    bebida +
    "\n- Sobremesa: " +
    sobremesa +
    "\nTotal: R$ " +
    total.toFixed(2) +
    "\n\nNome: " +
    nome +
    "\nEndereço: " +
    endereco;

  let pedido = encodeURIComponent(mensagem);

  window.open("https://wa.me/5521983480092?text=" + pedido);
}
