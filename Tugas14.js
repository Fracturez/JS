// Nama Soal :  Terdapat inputan berupa angka sembarang, apabila angka lebih dari 100 maka keluar tulisan di console “Nilai 
// kamu sempurna!” 

// Tanggal Pembuatan : 10 Agustus 2025
// Nama Pembuat - Kelas : M.ADITYA ALDEVARA PRATAMA - X PPLG 2

const prompt = require('prompt-sync')({ sigint: true });

const input = prompt("Masukkan sebuah angka: ");
const angka = Number(input);

if (!isNaN(angka) && angka > 100) {
  console.log("Nilai kamu sempurna!");
}