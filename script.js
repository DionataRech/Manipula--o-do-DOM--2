const classeCard = document.querySelectorAll(".card");
for (let i = 0; i < classeCard.length; i++) {
  classeCard[i].style.background = "orange";
}

const titulo = document.getElementsByClassName("titulo-card");
for (let i = 0; i < titulo.length; i++) {
  titulo[i].style.color = "#2b385b";
}

for (let i = 0; i < titulo.length; i++) {
  titulo[i].innerText = "Meu Card";
}

const descricao = document.getElementsByClassName("descricao-card");
for (let i = 0; i < descricao.length; i++) {
  descricao[i].style.color = "white";
  descricao[i].style.fontSize = "14px";
  descricao[i].style.marginTop = "40px";
  descricao[i].style.marginBottom = "40px";
}

for (let i = 0; i < descricao.length; i++) {
  descricao[i].innerText = "Descrição modificada pelo JavaScript";
}

const botaoEditar = document.getElementsByClassName("botao-editar");
for (let i = 0; i < botaoEditar.length; i++) {
  botaoEditar[i].style.color = "white";
  botaoEditar[i].style.background = "green";
  botaoEditar[i].style.border = "0px";
  botaoEditar[i].style.width = "50px";
  botaoEditar[i].style.height = "30px";
  botaoEditar[i].style.borderRadius = "9px";
}

const botaoApagar = document.getElementsByClassName("botao-apagar");
for (let i = 0; i < botaoEditar.length; i++) {
  botaoApagar[i].style.color = "white";
  botaoApagar[i].style.background = "red";
  botaoApagar[i].style.border = "0px";
  botaoApagar[i].style.width = "50px";
  botaoApagar[i].style.height = "30px";
  botaoApagar[i].style.borderRadius = "9px";
}

const editarCard = () => {
  alert("Clicou em Editar!");
};

let selecionarBotaoAdd = document.querySelectorAll(".botao-editar");

for (let i = 0; i < selecionarBotaoAdd.length; i++) {
  selecionarBotaoAdd[i].setAttribute("onclick", "editarCard()");
}

const apagarCard = () => {
  if (confirm("Deseja excluir este card?")) {
    alert("Confirmado");
  } else {
    alert("Cancelado");
  }
};

let selecionarBotaoApagar = document.querySelectorAll(".botao-apagar");

for (let i = 0; i < selecionarBotaoApagar.length; i++) {
  selecionarBotaoApagar[i].setAttribute("onclick", "apagarCard()");
}
