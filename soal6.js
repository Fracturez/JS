function luasPermukaanLimas(sisi, tinggiSisiTegak) {
  let luasAlas = sisi * sisi;
  let luasSisiTegak = 4 * (0.5 * sisi * tinggiSisiTegak);
  return luasAlas + luasSisiTegak;
}

function volumeLimas(sisi, tinggiLimas) {
  return (1 / 3) * (sisi * sisi) * tinggiLimas;
}

let sisi = 6;
let tinggiSisiTegak = 8;
let tinggiLimas = 10;

console.log("Luas Permukaan Limas:", luasPermukaanLimas(sisi, tinggiSisiTegak));
console.log("Volume Limas:", volumeLimas(sisi, tinggiLimas));
