const prompt = require("prompt-sync")({ sigint: true });

let dataSiswa = [
    { nama: "Arthur", nilai: 65 },
    { nama: "Nico", nilai: 50 },
    { nama : "Elijah", nilai: 90}
];

let cariElijah = dataSiswa.find(s => s.nama === 'Elijah');
console.log("Siswa dengan nama Elijah: ", cariElijah);



