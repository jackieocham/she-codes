function canApply() {
    let yourName = prompt("What is your name?");
    let yourAge = prompt("What is your age?");
    let h1 = document.querySelector("h1");

    if (yourAge >= 18) {
        h1.innerHTML = "Hi, " + yourName + "! Welcome to SheCodes!";
    } else {
        h1.innerHTML = "Sorry, " + yourName + "! You cannot join SheCodes.";
    }
}
let applyButton = document.querySelector("button");
applyButton.addEventListener("click", canApply);