let screen = document.querySelector(".screen");
let display = "0";
let result = null;
let lastOperator = null;
function handleClick(value){
    console.log(value);
    if (isNaN(parseInt(value)))
        handleSymbole(value);
    else
        handleNumber(value);

    screen.textContent = display;
}

function handleSymbole(value){
    if (value === "C"){
        display = "0";
        result = null;
    }
    else if (value === "←")
    {
        console.log("display.lenth: ", display.length)
        if (display.length === 1){
            display = "0";
            result = null;
        }
        else
            display = display.slice(0, display.length - 1);
    } else if (value === "+" || value === "-" || value === "x" || value === "/" || value === "=")
        doMath(value);
}

function doMath(value){
    if (result === null){
        result = parseInt(display);
    }
    else {
        if (lastOperator === "+")
            result += parseInt(display);
        else if (lastOperator === "-")
            result -= parseInt(display);
        else if (lastOperator === "x")
            result *= parseInt(display);
        else if (lastOperator === "/")
            result /= parseInt(display);
        if (value === "="){
            display = result;
            lastOperator = null;
            return;
        }
    }
    display = "0";
    lastOperator = value;

}
function  handleNumber(value){

    if (display === "0")
        display = value;
    else
        display += value;
}
function main () {
    document
        .querySelector(".calculator")
        .addEventListener("click", function (event){
            if (event.target.classList.contains("screen"))
                return;
            handleClick(event.target.innerText);
        });
}

main();