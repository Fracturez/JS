// npm install prompt-sync
const prompt = require("prompt-sync")({ sigint: true });
suhu = parseInt(prompt("suhu air: "));
if (suhu < 0){
console.log(ES);
}else if ( suhu >= 100){
console.log("Uap air");
}else{
console.log("Air");
}
