const prompt = require("prompt-sync")({ sigint: true });

const bilangan = Number(prompt("Masukkan bilangan: "));

if (bilangan > 0) {
  console.log("Positif");
} else if (bilangan < 0) {
  console.log("Negatif");
} else {
  console.log("Nol");
}
