// Nama Soal :  Buatlah variabel a = 8.3,  c=”3.2”  kemudian tampilkan kan operasikan dengan contoh format seperti berikut 
// dengan menggunakan operator aritmatika! (Untuk operator mod silahkan konversikan ke interger terlebih dahulu) 
// 8.3 + 3.2 = 11.5 
// 8.3 – 3.2 = 5.1 
// 8.3 x 3.2 = 25.56 
// 8.3 / 3.2 =  2.59375 
// 8 % 3 = 2

// Tanggal Pembuatan : 10 Agustus 2025
// Nama Pembuat - Kelas : M.ADITYA ALDEVARA PRATAMA - X PPLG 2

let a = 8.3;
let c = "3.2";
let c_num = parseFloat(c);

console.log(`${a} + ${c_num} = ${(a + c_num).toFixed(1)}`);
console.log(`${a} - ${c_num} = ${(a - c_num).toFixed(1)}`);
console.log(`${a} x ${c_num} = ${(a * c_num).toFixed(2)}`); 
console.log(`${a} / ${c_num} = ${(a / c_num).toFixed(5)}`); 

let a_int = Math.floor(a);
let c_int = Math.floor(c_num);

console.log(`${a_int} % ${c_int} = ${a_int % c_int}`);



