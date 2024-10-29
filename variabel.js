//tipe data primitif
let age = 25
const name = "fauzi rahmat ramadhan"
let hargaBaju = 400
let hargaSpatu = 800
//tipe data non-primitif
let user = {
    name:"wildan fauzi",
    age: 21,
    hargaSpatu: 900,
    hargaBaju:500
} 
console.log("nama : " + name + ", age : " + age + ", hargaspatu : " + hargaSpatu + ", hargabaju : " + hargaBaju)
console.log(user)
let toko = [1,2,3,4,5]
// penggunaan operator aritmatika
let totalFauzi = hargaBaju + hargaSpatu;
let totalWildan = user.hargaBaju + user.hargaSpatu;
let perbedaanHarga = totalWildan - totalFauzi;
let jumlahBelanjaUser = totalFauzi + totalWildan;
console.log("total belanja fauzi : " + totalFauzi)
console.log("total belanja wildan : " + totalWildan)
console.log("perbedaan harga Belanja : " + perbedaanHarga)
console.log("jumlah Belanja Keduanya : " + jumlahBelanjaUser)
//penggunaan operator perbandingan
if(totalFauzi > totalWildan){
    console.log("Fauzi Belanjanya lebih besar dari wildan")
}else{
    console.log("Wildan belanjanya lebih besar dari fauzi")
}