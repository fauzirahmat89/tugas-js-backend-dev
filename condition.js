const readline = require('readline');
//Buat program yang meminta input dari pengguna dan menggunakan 
//struktur if else untuk menentukan apakah angka tersebut genap atau ganjil.
let day = 3;
let dayName;

switch (day) {
  case 1:
    dayName = "senin";
    break;
  case 2:
    dayName = "selasa";
    break;
  case 3:
    dayName = "rabu";
    break;
  case 4:
    dayName = "kamis";
    break;
  case 5:
    dayName = "jumat";
    break;
  case 6:
    dayName = "sabtu";
    break;
  case 7:
    dayName = "minggu";
    break;
  default:
    dayName = "Invalid day";
}

console.log(dayName); 

//Buat program yang menggunakan switch untuk mencetak nama 
//hari berdasarkan nomor hari (1 untuk Senin, 2 untuk Selasa, dst.).


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("masukkan angka untuk cek genap atau ganjil : ", (angka) =>{
    let hasil = ""
    if(angka%2===0){
        hasil = "genap"
        console.log("angka : " + angka +", Hasil : " + hasil)
        rl.close();
    }else{
        hasil= "ganjil"
        console.log("angka : " + angka +", Hasil : " + hasil)
        rl.close();
    }
})

