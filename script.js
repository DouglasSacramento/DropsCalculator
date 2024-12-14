"use strict";
const select = document.querySelector("select");
const button = document.querySelector("button");
const input = document.querySelector("input");
const nameMed = document.querySelector("h2");
const text = document.querySelector("p");
const dialog = document.querySelector("dialog");

const totalClonazepan = 520;
const totalClorpromazina = 800;
const totalFenobarbital = 800;
const totalHaloperidol = 400;
const totalLevomepromazina = 800;
const totalPericiazina = 800;

input.addEventListener("input", () => {
  input.value = input.value.trim().replace(/\D+/g, "");
});

button.addEventListener("click", (event) => {
  event.preventDefault();
  const medSelected = select.value;
  const amountSolicited = input.value.trim().replace(/\D+/g, "");
  const calculation = Number(amountSolicited) * 60;

  if (medSelected === "Selecione" || amountSolicited == "") {
    return alert("Opção inválida!");
  }

  switch (medSelected) {
    case "clonazepan":
      nameMed.textContent = `${medSelected}:`;
      text.innerHTML = `<span>${Math.ceil(
        calculation / totalClonazepan
      )} frasco(s)</span> para 60 dias.`;
      break;
    case "clorpromazina":
      nameMed.textContent = `${medSelected}:`;
      text.textContent = `${Math.ceil(
        calculation / totalClorpromazina
      )} frasco(s) para 60 dias.`;
      break;
    case "fenobarbital":
      nameMed.textContent = `${medSelected}:`;
      text.textContent = `${Math.ceil(
        calculation / totalFenobarbital
      )} frasco(s) para 60 dias.`;
      break;
    case "haloperidol":
      nameMed.textContent = `${medSelected}:`;
      text.textContent = `${Math.ceil(
        calculation / totalHaloperidol
      )} frasco(s) para 60 dias.`;
      break;
    case "levomepromazina":
      nameMed.textContent = `${medSelected}:`;
      text.textContent = `${Math.ceil(
        calculation / totalLevomepromazina
      )} frasco(s) para 60 dias.`;
      break;
    case "periciazina":
      nameMed.textContent = `${medSelected}:`;
      text.textContent = `${Math.ceil(
        calculation / totalPericiazina
      )} frasco(s) para 60 dias.`;
      break;
    default:
      alert("Opção inválida!");
      return;
  }

  select.value = "Selecione";
  input.value = "";
});
