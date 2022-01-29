let prato = 0;
let bebida = 0;
let sobremesa = 0;
let total = 0;

/*let link =
  "https://wa.me/5521983480092?" +
  encodeURIComponent(
    "Olá, gostaria de fazer o pedido:\n- Prato: 'prato'\n- Bebida: 'bebida'\n- Sobremesa: 'sobremesa'\nTotal: R$ 27.70"
  );*/

function alterarBotao() {
  if (prato !== 0 && bebida !== 0 && sobremesa !== 0) {
    const fecharPedido = document.querySelector(".finalizar");
    fecharPedido.classList.add("finalizar-verde");
    fecharPedido.innerHTML = "Fechar pedido";
  }
}

function selecionarPrato(botao, nomeExibicao) {
  const selecionado = document.querySelector(".pratos .selecionado");
  if (selecionado !== null) {
    selecionado.classList.remove("selecionado");
  }
  prato = nomeExibicao;
  botao.classList.add("selecionado");
  alterarBotao();
}

function selecionarBebida(botao, nomeExibicao) {
  const selecionado = document.querySelector(".bebidas .selecionado");
  if (selecionado !== null) {
    selecionado.classList.remove("selecionado");
  }
  bebida = nomeExibicao;
  botao.classList.add("selecionado");
  alterarBotao();
}

function selecionarSobremesa(botao, nomeExibicao) {
  const selecionado = document.querySelector(".sobremesas .selecionado");
  if (selecionado !== null) {
    selecionado.classList.remove("selecionado");
    selecionado.classList.remove("icone");
  }
  sobremesa = nomeExibicao;
  botao.classList.add("selecionado");
  alterarBotao();
}

function confirmarPedido() {
  const nome = prompt("Qual é seu nome?");
  const endereço = prompt("Qual é seu endereço?");
  let mensagem;
  mensagem =
    "Olá, gostaria de fazer o pedido:\n- Prato: " +
    prato +
    "\n- Bebida: " +
    bebida +
    "\n- Sobremesa: " +
    sobremesa +
    "\nTotal: " +
    total;

  let pedido = encodeURIComponent(mensagem);

  window.open("https://wa.me/5521983480092?text=" + pedido);
}
