const prompt = require("prompt-sync")({ sigint: true });

let nilai = [
    80, 90, 70, 100, 85
];

let rata = nilai.reduce((a, b) => a + b) / nilai.length;
console.log("Rata-rata:  ", rata);


