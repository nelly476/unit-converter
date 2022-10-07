const convertBtn = document.querySelector("#convert-btn");
const inputEl = document.querySelector("#input-el");
const lengthEl = document.querySelector("#length-el");
const volumeEl = document.querySelector("#volume-el");
const massEl = document.querySelector("#mass-el");

convertBtn.addEventListener("click", function () {
  lengthEl.textContent = "";
  lengthEl.textContent += `
  ${inputEl.value} meters = ${inputEl.value * 3.281} feet |
  ${inputEl.value} feet = ${inputEl.value / 3.281} meters `;
});
