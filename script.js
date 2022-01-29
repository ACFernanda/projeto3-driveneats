let prato = 0;
let bebida = 0;
let sobremesa = 0;

function alterarBotao() {
  if (prato !== 0 && bebida !== 0 && sobremesa !== 0) {
    const fecharPedido = document.querySelector(".finalizar");
    fecharPedido.classList.add("finalizar-verde");
    fecharPedido.innerHTML =
      "<a href='https://wa.me/5521983480092'>Fechar pedido</a>";
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
  let nome = prompt("Qual é seu nome?");
  let endereço = prompt("Qual é seu endereço?");
}
