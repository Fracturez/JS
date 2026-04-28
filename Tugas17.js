// Nama Soal :  Terdapat inputan data berupa total harga barang, jikalau harga barang lebih dari sama dengan 200rb maka akan 
// mendapat diskon berupa 7.5% dari harga barang. Tampilkan hasil dari diskon dan total barang yang harus 
// dibayar! 

// Tanggal Pembuatan : 10 Agustus 2025
// Nama Pembuat - Kelas : M.ADITYA ALDEVARA PRATAMA - X PPLG 2

// Input total harga barang 
let totalHarga = 250000;

// Inisialisasi variabel diskon
let diskon = 0;

// Cek apakah total harga >= 200000
if (totalHarga >= 200000) {
    diskon = 0.075 * totalHarga;
}

// Hitung total yang harus dibayar setelah diskon
let hargaBayar = totalHarga - diskon;

// Tampilkan hasil
console.log("Diskon: " + diskon);
console.log("Total yang harus dibayar: " + hargaBayar);