"use strict";
const select = document.querySelector("select");
const button = document.querySelector("button");
const input = document.querySelector("input");
const nameMed = document.querySelector("h2");
const text = document.querySelector("p");
const dialog = document.querySelector("dialog");

const clearResult = () => {
  if (select.value !== "Selecione") {
    nameMed.textContent = "";
    text.innerHTML = "";
    input.value = "";
  }
};

clearResult();

function resultScreen(med, calc, total) {
  input.value = `${input.value} gotas`;

  nameMed.textContent = `${med}:`;
  text.innerHTML = `<span>${Math.ceil(
    calc / total
  )} frasco(s)</span> para 60 dias.`;
}

button.addEventListener("click", (event) => {
  event.preventDefault();
  const medSelected = select.value;
  const amountSolicited = input.value.trim().replace(/\D+/g, "");
  const calculation = Number(amountSolicited) * 60;

  if (medSelected === "Selecione") {
    alert("Opção inválida! Tente novamente.");
    return;
  } else if (!amountSolicited) {
    alert("Necessário inserir a quantidade de gotas!");
    return;
  }

  const medToDrops = {
    clonazepan: 520,
    clorpromazina: 800,
    fenobarbital: 800,
    haloperidol: 400,
    levomepromazina: 800,
    periciazina: 800,
  };

  if (medToDrops[medSelected]) {
    resultScreen(medSelected, calculation, medToDrops[medSelected]);
  } else {
    return;
  }

  select.value = "Selecione";
});

input.addEventListener("input", () => {
  input.value = input.value.trim().replace(/\D+/g, "");
});

window.addEventListener('load', () => {
    input.value = ""
})

