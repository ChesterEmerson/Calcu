const display = document.querySelector(".input");
const row = document.querySelectorAll("button");
const specialChars = ["÷", "+", "x", "-", "="];
let output = "";

const calculate = (btnValue) => {
    if (btnValue === "=" && output !== "") {
        output = eval(output.replace("=", "/100"));
    }else{
        if (output === "" && specialChars.includes(btnValue)) return;
        output += btnValue;
    }
    display.value = output;
};

row.forEach((button) => {
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});