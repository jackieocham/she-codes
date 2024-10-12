let yourCountry = prompt("What country are you from?");
yourCountry = yourCountry.toUpperCase().trim();
if (yourCountry === "BRAZIL" || yourCountry === "PORTUGAL") {
    alert("You speak Portuguese.");
} else {
    alert("You don't speak Portuguese");
}