"use strict";
const btnOracle = document.getElementById("btn-oracle");
const textArea = document.getElementById("oracleQuestion");
textArea.addEventListener("input", () => {
    console.log(textArea.value);
    paragraph.textContent = "";
    btnOracle.disabled = textArea.value.length < 5;
});
const paragraph = document.getElementById("oracle-answer");
const spinner = document.getElementById("spinner");
spinner.classList.add("hidden");
btnOracle.addEventListener("click", () => {
    paragraph.textContent = "";
    const anwsers = ["Yes", "No", "Maybe"];
    const ans = anwsers[Math.floor(Math.random() * anwsers.length)];
    spinner.classList.remove("hidden");
    setTimeout(() => {
        spinner.classList.add("hidden");
        paragraph.textContent = ans;
        paragraph.classList.add("text");
        paragraph.classList.add("rotate");
        paragraph.addEventListener("animationend", () => {
            paragraph.classList.remove("rotate");
        });
        textArea.value = "";
    }, 3000);
});
