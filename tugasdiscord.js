const prompt = require(`prompt-sync`)({ sigint: true });

do {
    let p = Number(prompt("pilih no: "));

        if ( p === 1 ){
            let waktu = Number(prompt("Masukkan waktu (dalam detik): "));
            let hari = parseInt(waktu / 86400); 
            let sisaha = (waktu % 86400);
            let jam = parseInt(sisaha / 3600);
            let sisajam = parseInt( sisaha % 3600);
            let menit = parseInt(sisajam / 60) 
            let detik =  sisajam % 60

            console.log (`hari: ${hari}\njam: ${jam}\nmenit: ${menit}\ndetik: ${detik}`);

        }else if ( p === 2 ){
            function adalahTahunKabisat(tahun) {
      
        if ((tahun % 4 === 0 && tahun % 100 !== 0) || tahun % 400 === 0) {
            return "Tahun Kabisat";
        } else {
            return "Bukan Tahun Kabisat";
        }
        }
        console.log(adalahTahunKabisat(2020));
        console.log(adalahTahunKabisat(2021)); 

        }else if ( p === 3){
        
        const readline = require('readline');

        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });


        function hitungSelisihTanggalDenganSpasi(tanggalStr1, tanggalStr2) {
            const keTotalHari = (str) => {
                const [hari, bulan, tahun] = str.split(' ').map(Number);
                return (tahun * 365) + (bulan * 30) + hari;
            };

            const selisihHari = Math.abs(keTotalHari(tanggalStr2) - keTotalHari(tanggalStr1));
            const tahunSelisih = Math.floor(selisihHari / 365);
            const sisaHari = selisihHari % 365;
            const bulanSelisih = Math.floor(sisaHari / 30);
            const hariSelisih = sisaHari % 30;

            return { tahun: tahunSelisih, bulan: bulanSelisih, hari: hariSelisih };
        }

        rl.question("Masukkan tanggal pertama (format dd mm yyyy)\nContoh: 12 11 2025: ", (tgl1) => {
            rl.question("Masukkan tanggal kedua (format dd mm yyyy)\nContoh: 03 06 2015: ", (tgl2) => {

                if (tgl1 && tgl2) {
                    const hasil = hitungSelisihTanggalDenganSpasi(tgl1, tgl2);
                    const hasilString = `(${hasil.tahun} tahun, ${hasil.bulan} bulan, ${hasil.hari} hari)`;

                    console.log("\nPerhitungan Selisih Tanggal");
                    console.log(`Tanggal Awal: ${tgl1}`);
                    console.log(`Tanggal Akhir: ${tgl2}`);
                    console.log("----------------------------------------");
                    console.log(`Hasil: ${hasilString}`);

           
                    console.log(`\nHasil selisihnya adalah:\n${hasilString}`);

                } else {
            
                    console.log("Input tidak lengkap. Program dibatalkan.");
                }

        
                rl.close();
            });
        });
        
        } else if ( p === 4){
        let x = 100;
        let y = 2;
        let z = 3;

        console.log("Nilai Awal:");
        console.log(`x: ${x}, y: ${y}, z: ${z}`);

        let temp = x;
        x = y;
        y = z;
        z = temp;
        console.log("\nNilai Akhir:");
        console.log(`x: ${x}, y: ${y}, z: ${z}`);

        } else if ( p === 5){
            let uang = Number(prompt(`Jumlah uang: `))
            let va1 = parseInt(uang / 1000)
            let si = uang % 1000
            let va2 = parseInt(si / 500)
            let si2 = si % 500
            let va3 = parseInt(si2 / 100)
            let si3 = si2 % 100
            let va4 = parseInt(si3 / 50)
            let si4 = si3 % 50
            let va5 = parseInt(si4 / 25)
        
            console.log(`${va1} pecahan 1000: \n${va2} pecahan 500: \n${va3} pecahan 100 \n${va4} pecahan 50\n${va5} pecahan 25`)
        } else if (p === 6){
            let cm1 = Number(prompt(`Masukan Jarak(cm): `));
            let km = parseInt(cm1 / 100000)
            let sv1 = cm1 % 100000
            let m = parseInt(sv1 / 1000)
            let s2 = sv1 % 1000
            let cm = parseInt(s2 / 100)

            console.log(`jarak ${cm1} cm\n berati jarak yang harus ditempuh adalah: ${km} km, ${m} m, ${cm}`)
        }else if (p === 7){
        let inputMeter = readlineSync.question("Masukkan panjang dalam meter: ");
        let meter = parseFloat(inputMeter);

        if (isNaN(meter)) {
            console.log("Error: Yang kamu masukkan bukan angka. Program dihentikan.");
        } else {
        let yard = meter / 0.9144;
            let kaki = meter / 0.3048;
            let inci = meter / 0.0254;

            console.log(`${meter} meter sama dengan:`);
            console.log(`${yard.toFixed(2)} yard`);
            console.log(`${kaki.toFixed(2)} kaki`);
            console.log(`${inci.toFixed(2)} inci`);
        }
        
        } else if (p === 8){
            let tinggi = parseInt(prompt(`Masukan tinggi bandan: `))
            let hi = tinggi - 100
            let ha = hi * 0.9
            console.log(ha)

        } else if ( p === 9){
            let x = parseFloat(prompt("Masukkan nilai x: "));
            let y = parseFloat(prompt("Masukkan nilai y: "));

            if (x > 0 && y > 0) {
                console.log("Titik berada di Kuadran I");
            } else if (x < 0 && y > 0) {
                console.log("Titik berada di Kuadran II");
            } else if (x < 0 && y < 0) {
                console.log("Titik berada di Kuadran III");
            } else if (x > 0 && y < 0) {
                console.log("Titik berada di Kuadran IV");
            } else {
                console.log("Titik tidak berada di kuadran manapun (ada di sumbu)");
            }

        }else if (p === 10){//6.7
           let p = Number(prompt('Masukan Hari: '))
            if (p < 48 ){
                let c = p * 200000
                console.log(c)
            }else if (p => 48) {
                let t = p * 300000
                console.log(t)
            }

        }else if (p === 11){//6.8
            let te = Number(prompt(`masukan angka: `))

            if (te % 4 === 0 && te % 100 === 0) {
                console.log("Iya itu tahun kabisat");
            } else {
                console.log("No");
            }

        }else if(p === 12){//6.9
            let input = prompt("Masukkan sebuah kata: ");
            if (input > 0){
                console.log("Positif");
            }else if (input < 0){
                console.log("Negatif");
            }else {
                console.log("Nol");
            }
        }else if ( p === 13){//6.12
            let gol = prompt("Golongan (A/B/C/D): ");
            let jam = Number(prompt("Jam kerja seminggu: "));

            let upah = 0;

            if (gol === "A") upah = 4000;
            else if (gol === "B") upah = 5000;
            else if (gol === "C") upah = 6000;
            else if (gol === "D") upah = 7500;

            let gaji;
            if (jam > 48) {
                let lembur = jam - 48;
                gaji = (48 * upah) + (lembur * 3000);
            } else {
                gaji = jam * upah;
            }

            if (upah === 0) {
                console.log("Golongan tidak valid");
            } else {
                console.log("Gaji Mingguan: Rp " + gaji);
            }
        }else if ( p === 14){//6.13
            let nilai = Number(prompt("Masukkan nilai ujian: "));
            let indeks = "";

            if (nilai >= 80) indeks = "A";
            else if (nilai >= 70) indeks = "B";
            else if (nilai >= 55) indeks = "C";
            else if (nilai >= 40) indeks = "D";
            else indeks = "E";

            console.log("Indeks Nilai: " + indeks);
        }else if ( p === 15){//6.14
            let angka = Number(prompt("Masukkan angka 1-4: "));
            let teks = "";

            if (angka === 1) teks = "satu";
            else if (angka === 2) teks = "dua";
            else if (angka === 3) teks = "tiga";
            else if (angka === 4) teks = "empat";
            else teks = "Angka yang dimasukkan salah";

            console.log(teks)
        }else if ( p === 16){//6.15
            let n = Number(prompt("Masukkan nomor bulan (1–12): "));
            let bulan = "";

            if (n === 1) bulan = "Januari";
            else if (n === 2) bulan = "Februari";
            else if (n === 3) bulan = "Maret";
            else if (n === 4) bulan = "April";
            else if (n === 5) bulan = "Mei";
            else if (n === 6) bulan = "Juni";
            else if (n === 7) bulan = "Juli";
            else if (n === 8) bulan = "Agustus";
            else if (n === 9) bulan = "September";
            else if (n === 10) bulan = "Oktober";
            else if (n === 11) bulan = "November";
            else if (n === 12) bulan = "Desember";
            else bulan = "Nomor bulan salah";

            console.log(bulan)
        }else if ( p === 17){//6.17
            let jam = Number(prompt("Jam: "));
            let menit = Number(prompt("Menit: "));
            let detik = Number(prompt("Detik: "));

            detik++;
            
            if (detik === 60) {
                detik = 0;
                menit++;
            }

            if (menit === 60) {
                menit = 0;
                jam++;
            }

            if (jam === 24) {
                jam = 0;
            }
            console.log(
                String(jam).padStart(2, "0") + ":" +
                String(menit).padStart(2, "0") + ":" +
                String(detik).padStart(2, "0")
            )
        }else if ( p === 18){//6.20

            let bulan = Number(prompt("Masukkan nomor bulan (1-12): "));
            let tahun = Number(prompt("Masukkan tahun: "));
            let hari;

            if (bulan === 1) hari = 31;
            else if (bulan === 2) {

                if (tahun % 4 === 0) hari = 29;
                else hari = 28;
            }
            else if (bulan === 3) hari = 31;
            else if (bulan === 4) hari = 30;
            else if (bulan === 5) hari = 31;
            else if (bulan === 6) hari = 30;
            else if (bulan === 7) hari = 31;
            else if (bulan === 8) hari = 31;
            else if (bulan === 9) hari = 30;
            else if (bulan === 10) hari = 31;
            else if (bulan === 11) hari = 30;
            else if (bulan === 12) hari = 31;
            else hari = "Nomor bulan salah";

            console.log("Jumlah hari:", hari);

        }else if ( p === 19){// 1
            // Bab 6
            let n = Number(prompt("Masukkan bilangan positif: "));
            let hasil = "";

            if (n % 4 === 0) hasil = "Bilangan tersebut adalah kelipatan 4";
            else hasil = "Bukan kelipatan 4";

            console.log(hasil);

        }else if ( p === 20){// 2
            let total = Number(prompt("Masukkan total belanja: "));
            let diskon = 0;

            if (total > 100000) {
                diskon = total * 0.1; // misal diskon 10%
            }

            let st = total - diskon;

            console.log("Diskon:", diskon);
            console.log("Total setelah diskon:", st);

        }else if ( p === 21){// 3
            let a = Number(prompt("Bilangan pertama: "));
            let b = Number(prompt("Bilangan kedua: "));
            let c = Number(prompt("Bilangan ketiga: "));
            let x, y, z;

            if (a <= b && a <= c) {
                x = a;
                if (b <= c) { y = b; z = c; }
                else { y = c; z = b; }
            } 
            else if (b <= a && b <= c) {
                x = b;
                if (a <= c) { y = a; z = c; }
                else { y = c; z = a; }
            }
            else {
                x = c;
                if (a <= b) { y = a; z = b; }
                else { y = b; z = a; }
            }

            console.log(x, y, z);

        }else if ( p === 22){// 4
            let a = Number(prompt("Masukkan sisi a: "));
            let b = Number(prompt("Masukkan sisi b: "));
            let c = Number(prompt("Masukkan sisi c (paling panjang): "));

            let a2 = a * a;
            let b2 = b * b;
            let c2 = c * c;
            let pesan = "";

            if (c <= a || c <= b) {
                pesan = "Input salah: c harus sisi paling panjang";
            } else if (c2 === a2 + b2) {
                pesan = "Segitiga siku-siku";
            } else if (c2 > a2 + b2) {
                pesan = "Segitiga tumpul";
            } else {
                pesan = "Segitiga lancip";
            }
            console.log(pesan);


        }else if ( p === 23){// 5
            let karakter = prompt("Masukkan karakter angka (0-9):");
    
            if (karakter.length !== 1) {
                console.log("Harap masukkan satu karakter!");
                return;
            }
    
            if (karakter >= '0' && karakter <= '9') {
                let angka = parseInt(karakter);
                console.log(`Karakter '${karakter}' diubah menjadi angka ${angka}`);
            } else {
                console.log("Karakter yang dimasukkan bukan angka!");
            }
        }else if ( p === 24){
            function ubahKarakter(karakter) {
            if (karakter >= '0' && karakter <= '9') {
            return parseInt(karakter);
            } else {
                return -99;
            }
        }

            console.log('Karakter "5" menjadi: ' + ubahKarakter('5'));
            console.log('Karakter "A" menjadi: ' + ubahKarakter('A'));
            console.log('Karakter "0" menjadi: ' + ubahKarakter('0'));
            console.log('Karakter "?" menjadi: ' + ubahKarakter('?'));
        }else if ( p === 25){

        let totalBelanja = prompt("Masukkan total belanja: Rp ");
        let uangDibayar = prompt("Masukkan uang yang dibayar: Rp ");

        totalBelanja = parseInt(totalBelanja);
        uangDibayar = parseInt(uangDibayar);

        let kembalian = uangDibayar - totalBelanja;

        console.log("Total Belanja: Rp " + totalBelanja);
        console.log("Uang Dibayar: Rp " + uangDibayar);
        console.log("Total Kembalian: Rp " + kembalian);

        let daftarUang = [50000, 20000, 10000, 5000, 2000, 1000, 500, 200, 100, 50];

        for (let i = 0; i < daftarUang.length; i++) {
        let nilai = daftarUang[i];

        if (kembalian >= nilai) {
            let jumlah = Math.floor(kembalian / nilai);
            console.log(jumlah + " x Rp " + nilai);
            kembalian = kembalian % nilai;
            }
        }

        }else if ( p === 26){
            let angka = Number(prompt("Masukkan angka 1-10: "));
            let hasil = "";

            if (angka == 1) {
                hasil = "I";
                console.log(hasil);
            } else if (angka == 2) {
                hasil = "II";
                console.log(hasil);
            } else if (angka == 3) {
                hasil = "III";
                console.log(hasil);
            } else if (angka == 4) {
                hasil = "IV";
                console.log(hasil);
            } else if (angka == 5) {
                hasil = "V";
                console.log(hasil);
            } else if (angka == 6) {
                hasil = "VI";
                console.log(hasil);
            } else if (angka == 7) {
                hasil = "VII";
                console.log(hasil);
            } else if (angka == 8) {
                hasil = "VIII";
                console.log(hasil);
            } else if (angka == 9) {
                hasil = "IX";
                console.log(hasil);
            } else if (angka == 10) {
                hasil = "X";
                console.log(hasil);
            } else {
                hasil = "Angka di luar jangkauan 1-10";
                console.log(hasil);
            }
        }else if ( p === 27){
            let clippingPixel = (nilai) => {
                if (nilai < 0) {
                return 0;
            }
            if (nilai > 255) {
                return 255;
            }
            return nilai;
        };
            console.log(clippingPixel(-50));
            console.log(clippingPixel(128));
            console.log(clippingPixel(500));

        }else if ( p === 28){
            let tinggi = parseFloat(prompt("Masukkan tinggi badan (cm): "));
            let berat = parseFloat(prompt("Masukkan berat badan (kg): "));

            let beratIdeal = tinggi - 100;
            let selisih = Math.abs(berat - beratIdeal);

            if (selisih <= 2) {
                console.log("ideal");
            } else {
                console.log("tidak ideal");
            }
        }

    jawaban = prompt('Diulangi (y/n)?')
    diulangi = jawaban == 'y' || jawaban == 'Y' ? true : false;
}while (diulangi == true)