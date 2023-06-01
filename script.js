
const calculator = document.querySelector(".calculator");
let result = 0;
let op = "";
calculator.addEventListener("click", (event) => {
    const screen = document.querySelector(".screen");
    if (event.target.classList.contains("number")) {
        if (screen.textContent === "0")
            screen.textContent = "";
        screen.textContent += event.target.textContent;
    }
    if (event.target.classList.contains("delete")) {
        screen.textContent = screen.textContent.slice(0, -1);
        if (screen.textContent === "")
            screen.textContent = "0";
    }
    if (event.target.classList.contains("clear")) {
        screen.textContent = "0";
    }
    if (event.target.classList.contains("operator") && event.target.textContent !== "=") {
     const number = Number(screen.textContent);
        const operator = event.target.textContent;
        screen.textContent = "0";
        if (operator === "+") {
            result += number;
        }
        if (operator === "-") {
            result -= number;
        }
        if (operator === "x") {
            result *= number;
        }
        if (operator === "/") {
            result /= number;
        }
        op = operator;
    }

    if (event.target.classList.contains("equal")) {
        if (op === "+") {
            screen.textContent = result + Number(screen.textContent);
        }
        if (op === "-") {
            screen.textContent = result + Number(screen.textContent);
        }
        if (op === "x") {
            screen.textContent = result * Number(screen.textContent);
        }
        if (op === "/") {
            screen.textContent = result / Number(screen.textContent);
        }
        result = 0;
    }
});