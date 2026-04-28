// npm install prompt-sync
const prompt = require("prompt-sync")({ sigint: true });

let sisi, tinggi, tinggiTegak, volume, luas;
sisi = parseFloat(prompt('Sisi alas (cm)     : '));
tinggi = parseFloat(prompt('Tinggi limas (cm)  : '));
tinggiTegak = parseFloat(prompt('Tinggi sisi tegak : '));

volume = (1/3) * (sisi ** 2) * tinggi;
luas = (sisi ** 2) + (2 * sisi * tinggiTegak);

console.log(`Volume         : ${volume} cm³`);
console.log(`Luas Permukaan : ${luas} cm²`);