// npm install prompt-sync
const prompt = require("prompt-sync")({ sigint: true });

let r, volume, luas;
const phi = 3.14;

r = parseFloat(prompt('Jari-jari : '));
volume = (4/3) * phi * r ** 3;
luas = 4 * phi * r ** 2;

console.log(`Volume          : ${volume} cm³`);
console.log(`Luas Permukaan  : ${luas} cm²`) ;