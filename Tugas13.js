// Nama Soal :  Terdapat inputan berupa harga suatu makanan, carilah harga suatu makanan tersebut setelah ditambahkan 
// pajak sebesar 10% dan fee sebesar 5%  dari harga makanan tersebut! Tampilkan harga, pajak, fee dan harga 
// yang harus dibayar konsumen! 
// Contoh hasil: 
// Harga makanan : 15000 
// Pajak : 1500 
// Fee : 750 
// Harga bayar : 17250
// Tanggal Pembuatan : 10 Agustus 2025
// Nama Pembuat - Kelas : M.ADITYA ALDEVARA PRATAMA - X PPLG 2


// Input harga makanan 
let hargaMakanan = 15000;

// Hitung pajak 
let pajak = 0.10 * hargaMakanan;

// Hitung fee 
let fee = 0.05 * hargaMakanan;

// Hitung total harga yang harus dibayar konsumen
let hargaBayar = hargaMakanan + pajak + fee;

// Tampilkan hasil
console.log("Harga makanan : " + hargaMakanan);
console.log("Pajak : " + pajak);
console.log("Fee : " + fee);
console.log("Harga bayar : " + hargaBayar);