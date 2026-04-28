//npm install prompt-sync
//itu jarak hari dengan dua tanggal yang berbeda
const prompt = require("prompt-sync")({sigint: true})

let diulang = true
do{ 
    let tanggal1 = Number(prompt("Masukin tanggal pertama: "));
    let bulan1 = Number(prompt("Masukin bulan pertama: "));
    let tahun1 = Number(prompt("Masukin tahun pertama: "));
    let tanggal2 = Number(prompt("Masukin tanggal kedua: "));
    let bulan2 = Number(prompt("Masukin bulan kedua: "));
    let tahun2 = Number(prompt("Masukin tahun kedua: "));
    let hari1 = (tahun1 * 360) + (bulan1 * 30) + tanggal1;
    let hari2 = (tahun2 * 360) + (bulan2 * 30) + tanggal2;
    let jarak = parseInt(hari2 - hari1);
    console.log(`Jarak hari: ${jarak} hari`);
    jawaban = prompt("Mau ulang? (y/n) ");
    diulang = jawaban == "y" || jawaban == "Y" ? true : false
} while (diulang)
