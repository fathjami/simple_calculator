let numbers = document.querySelectorAll(".number");

numbers.forEach((number) => {

    number.addEventListener("click", () => {
        let screen = document.querySelector(".screen");
        if (screen.textContent === "0")
            screen.textContent = "";
        screen.textContent += number.textContent;
        console.log(number.textContent);
    });
});

let deleteButton = document.querySelector(".delete");
deleteButton.addEventListener("click", () => {
    let screen = document.querySelector(".screen");
    screen.textContent = screen.textContent.slice(0, -1);
    if (screen.textContent === "")
        screen.textContent = "0";
});
