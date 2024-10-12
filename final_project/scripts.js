// created function called yogaSignUp that updates the header
// based on conditions defined in an if-else statement,
// function runs when user clicks the "Sign Up" button

function yogaSignUp() {
    let doneYoga = prompt("Have you done Yoga? (yes/no)");
    let header = document.querySelector("h1");

    if (doneYoga.toLowerCase() === "yes") {
        header.innerHTML = `😊 <br /> Great! See you in class!`;
    } else if (doneYoga.toLowerCase() === "no") {
        header.innerHTML = `🙃 <br /> Try a class with me!`;
    } else  {
        header.innerHTML = `😒 <br /> Uh oh, please try again.`;
        }
    }
let signUpButton = document.querySelector("button");
signUpButton.addEventListener("click", yogaSignUp);