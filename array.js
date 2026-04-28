const prompt = require("prompt-sync")({ sigint: true });

function latihan(level, soal) {
  switch (level) {
    case 1:
      switch (soal) {
        case 1:
          let teman = ["Riko", "Tia", "Budi", "Sari", "Lina"];
          return `Nama pertama: ${teman[0]}, Nama terakhir: ${teman[teman.length - 1]}`;

        case 2:
          let arr = [10, 20, 30, 40, 50];
          return "Total: " + arr.reduce((a, b) => a + b);

        case 3:
          let buah = ["apel", "pisang", "jeruk", "melon"];
          return "Buah: " + buah.join(", ");

        case 4:
          let warna = ["merah", "biru", "kuning"];
          warna.push("ungu");
          warna.unshift("hitam");
          return "Warna baru: " + warna.join(", ");
      }
      break;

    case 2:
      switch (soal) {
        case 1:
          let bahan = ["beras", "gula", "telur", "minyak"];
          bahan.push("kopi");
          bahan.shift();
          return "Bahan: " + bahan.join(", ");

        case 2:
          let fruits = ["apel", "pisang", "jeruk", "mangga", "melon"];
          return "3 pertama: " + fruits.slice(0, 3).join(", ");

        case 3:
          let smk = ["SMK", "Negeri", "1", "Bandung"];
          return smk.join(" ");

        case 4:
          let angka = [1, 2, 4, 5];
          angka.splice(2, 0, 3);
          return angka.join(", ");
      }
      break;

    case 3:
      switch (soal) {
        case 1:
          return [1,2,3,4,5,6,7,8].filter(n => n % 2 === 0).join(", ");

        case 2:
          let nilai = [80, 90, 70, 100, 85];
          let avg = nilai.reduce((a, b) => a + b) / nilai.length;
          return "Rata-rata: " + avg;

        case 3:
          return [1,2,3,4].map(n => n * 2).join(", ");

        case 4:
          let siswa = { Andi: 80, Budi: 65, Citra: 75 };
          return Object.keys(siswa).filter(n => siswa[n] >= 70).join(", ");
      }
      break;

    case 4:
      switch (soal) {
        case 1:
          let data = [
            { nama: "Andi", nilai: 80 },
            { nama: "Budi", nilai: 90 },
            { nama: "Citra", nilai: 75 }
          ];
          return "Nilai Budi: " + data.find(s => s.nama === "Budi").nilai;

        case 2:
          return [80, 60, 95, 70].sort((a, b) => a - b).join(", ");

        case 3:
          let barang = [
            { nama: "Buku", harga: 5000 },
            { nama: "Pulpen", harga: 3000 },
            { nama: "Penghapus", harga: 2000 }
          ];
          return "Total harga: " + barang.reduce((a, b) => a + b.harga, 0);

        case 4:
          let arr4 = [60, 85, 70, 90, 95, 80];
          let max = arr4[0];
          arr4.forEach(n => { if (n > max) max = n; });
          return "Nilai tertinggi: " + max;
      }
      break;

    case 5:
      switch (soal) {
        case 1:
          return [5,10,15,20,25]
            .filter(n => n % 10 === 0)
            .map(n => n * 2)
            .join(", ");

        case 2:
          let transaksi = [1000, -500, 2000, -700];
          return "Saldo akhir: " + transaksi.reduce((a, b) => a + b, 0);

        case 3:
          let skor = [75, 90, 60, 100, 80];
          return "3 terbesar: " + skor.sort((a, b) => b - a).slice(0, 3).join(", ");

        case 4:
          let a = ["Andi", "Budi", "Citra"];
          let b = ["Budi", "Dewi", "Eka"];
          return [...new Set([...a, ...b])].join(", ");
      }
      break;

    default:
      return "Level atau soal tidak valid!";
  }
}


console.log("=== Latihan Array JavaScript ===");

let level = Number(prompt("Pilih level (1-5): "));
let soal = Number(prompt("Pilih soal (1-4): "));

let hasil = latihan(level, soal);

console.log("\n=== HASIL ===");
console.log(hasil);