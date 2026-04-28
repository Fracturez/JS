const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function volumeBalok(panjang, lebar, tinggi) {
  return panjang * lebar * tinggi;
}

function luasPermukaanBalok(panjang, lebar, tinggi) {
  return 2 * (panjang * lebar + panjang * tinggi + lebar * tinggi);
}

rl.question("Masukkan panjang balok: ", (p) => {
  rl.question("Masukkan lebar balok: ", (l) => {
    rl.question("Masukkan tinggi balok: ", (t) => {
      const panjang = parseFloat(p);
      const lebar = parseFloat(l);
      const tinggi = parseFloat(t);

      const volume = volumeBalok(panjang, lebar, tinggi);
      const luasPermukaan = luasPermukaanBalok(panjang, lebar, tinggi);

      console.log("\n=== Hasil Perhitungan Balok ===");
      console.log("Volume Balok:", volume, "cm³");
      console.log("Luas Permukaan Balok:", luasPermukaan, "cm²");

      rl.close();
    });
  });
});