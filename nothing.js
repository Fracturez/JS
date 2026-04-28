const prompt = require("prompt-sync")({sigint: true})

let jam = Number(prompt("Masukkan jam (0-23): "));
let menit = Number(prompt("Masukkan menit (0-59): "));
let detik = Number(prompt("Masukkan detik (0-59): "));

detik = detik + 1;

if (detik === 60) {
  detik = 0;
  menit = menit + 1;
}

if (menit === 60) {
  menit = 0;
  jam = jam + 1;
}

if (jam === 24) {
  jam = 0;
}

function formatDuaDigit(angka) {
  if (angka < 10) {
    return "0" + angka;
  } else {
    return angka;
  }
}

console.log(
  "Waktu baru setelah +1 detik: " +
  formatDuaDigit(jam) + ":" +
  formatDuaDigit(menit) + ":" +
  formatDuaDigit(detik)
);

