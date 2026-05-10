const prompt = require("prompt-sync")({ sigint: true });

let people = [
    { nama: "Arthur Leywin", nilai: 65 },
    { nama: "Nico Charles", nilai: 50 },
    { nama : "Elijah Knight", nilai: 90}
];
let target = people.filter(s => s.nilai >= 70);
console.log("Siswa dengan nilai >= 70: ", target);





