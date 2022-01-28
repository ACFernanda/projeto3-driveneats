function selecionarItem() {
  let itensPrato = document.querySelector(".pratos .item");
  let elementoSelecionado = document.querySelector(".item");

  if (itensPrato.classList.contains("selecionado") == true) {
    itensPrato.classList.remove("selecionado");
    elementoSelecionado.classList.add("selecionado");
  } else {
    elementoSelecionado.classList.add("selecionado");
  }
}
