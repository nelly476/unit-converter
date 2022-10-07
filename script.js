const convertBtn = document.querySelector("#convert-btn");
const inputEl = document.querySelector("#input-el");
const lengthEl = document.querySelector("#length-el");
const volumeEl = document.querySelector("#volume-el");
const massEl = document.querySelector("#mass-el");
const metricsFromLocalStorage = JSON.parse(
  localStorage.getItem("addedMetrics")
);

if (metricsFromLocalStorage) {
  lengthEl.innerHTML = metricsFromLocalStorage[0];
  volumeEl.textContent = metricsFromLocalStorage[1];
  massEl.textContent = metricsFromLocalStorage[2];
}

let addedMetrics = [];

convertBtn.addEventListener("click", function () {
  lengthEl.textContent = "";
  volumeEl.textContent = "";
  massEl.textContent = "";

  lengthEl.textContent += `
  ${inputEl.value} meters = ${(inputEl.value * 3.281).toFixed(2)} feet |
  ${inputEl.value} feet = ${(inputEl.value / 3.281).toFixed(2)} meters `;

  volumeEl.textContent += `
${inputEl.value} litres = ${(inputEl.value * 0.264).toFixed(2)} gallons |
${inputEl.value} gallons = ${(inputEl.value / 0.264).toFixed(2)} litres
`;
  massEl.textContent += `
${inputEl.value} kilos = ${(inputEl.value * 2.204).toFixed(2)} pounds |
${inputEl.value} pounds = ${(inputEl.value / 2.204).toFixed(2)} kilos
`;

  addedMetrics.push(lengthEl.textContent);
  addedMetrics.push(volumeEl.textContent);
  addedMetrics.push(massEl.textContent);
  localStorage.setItem("addedMetrics", JSON.stringify(addedMetrics));
});
