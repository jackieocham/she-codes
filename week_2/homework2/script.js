function weather() {
    let yourCity = prompt("What City do you live in?");
    let temperature = prompt("What temperature is it?");
    let header = document.querySelector("h1");

    if (temperature >= 0) {
        header.innerHTML = `😊 <br /> Currently ${temperature}°C in ${yourCity}`;
    } else {
        header.innerHTML = `😒 <br /> Currently ${temperature}°C in ${yourCity}`;
    }
}
let cityButton = document.querySelector("button");
cityButton.addEventListener("click", weather);