const btnOracle = document.getElementById("btn-oracle") as HTMLButtonElement;
//btnOracle.disabled = true;

const textArea = document.getElementById(
    "oracleQuestion"
) as HTMLTextAreaElement;
//console.log(textArea.value);

textArea.addEventListener("input", () => {
    console.log(textArea.value);
    paragraph.textContent = "";
    btnOracle.disabled = textArea.value.length < 5;
});

const paragraph = document.getElementById(
    "oracle-answer"
) as HTMLParagraphElement;

const spinner = document.getElementById("spinner") as HTMLDivElement;
spinner.classList.add("hidden");

btnOracle.addEventListener("click", () => {
    paragraph.textContent = "";
    //0) get the text from the text area
    //const question = textArea.value;

    //1) yes/no/maybe random
    const anwsers = ["Yes", "No", "Maybe"];

    const ans = anwsers[Math.floor(Math.random() * anwsers.length)];
    //2) start progress
    spinner.classList.remove("hidden");
    //3) setTimeout
    setTimeout(() => {
        //4) stop progress
        spinner.classList.add("hidden");
        //5) show answer
        paragraph.textContent = ans;
        paragraph.classList.add("text");
        paragraph.classList.add("rotate");
        paragraph.addEventListener("animationend", () => {
            paragraph.classList.remove("rotate");
        });
        //6) clear text area
        textArea.value = "";
    }, 3000);
});

