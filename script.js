let prato = 0;
let bebida = 0;
let sobremesa = 0;
let valorPrato = 0;
let valorBebida = 0;
let valorSobremesa = 0;
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
    selecionado.classList.remove("icone");
  }
  sobremesa = nomeExibicao;
  precoSobremesa = valorSobremesa;
  botao.classList.add("selecionado");
  alterarBotao();
}

function confirmarPedido() {
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
    "\nNome: " +
    nome +
    "\nEndereço: " +
    endereco;

  let pedido = encodeURIComponent(mensagem);

  window.open("https://wa.me/5521983480092?text=" + pedido);
}
