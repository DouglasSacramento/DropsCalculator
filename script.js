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

  const containerDrops = [400, 520, 800];

  const medToDrops = {
    clonazepan: containerDrops[1],
    clorpromazina: containerDrops[2],
    fenobarbital: containerDrops[2],
    haloperidol: containerDrops[0],
    levomepromazina: containerDrops[2],
    periciazina: containerDrops[2],
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

