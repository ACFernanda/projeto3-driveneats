function selecionarPrato(botao, nomeExibicao) {
  const selecionado = document.querySelector(".pratos .selecionado");
  if (selecionado !== null) {
    selecionado.classList.remove("selecionado");
  }

  prato = nomeExibicao;

  botao.classList.add("selecionado");
}

function selecionarBebida(botao, nomeExibicao) {
  const selecionado = document.querySelector(".bebidas .selecionado");
  if (selecionado !== null) {
    selecionado.classList.remove("selecionado");
  }

  bebida = nomeExibicao;

  botao.classList.add("selecionado");
}

function selecionarSobremesa(botao, nomeExibicao) {
  const selecionado = document.querySelector(".sobremesas .selecionado");
  if (selecionado !== null) {
    selecionado.classList.remove("selecionado");
  }

  sobremesa = nomeExibicao;

  botao.classList.add("selecionado");
}
