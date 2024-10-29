//Buat fungsi yang menghitung luas lingkaran berdasarkan jari-jari yang diberikan.
let r = 7
let phi = 3.14

const luasLingkaran = () => {
    return phi * r * r
}

console.log("Luas lingkaran : " + luasLingkaran())

//Buat fungsi yang menerima array angka dan mengembalikan array 
//baru dengan angka-angka yang dikuadratkan.

let number = [1,2,3,4,5,6,7,8,9]
console.log("angka sebelum kuadrat : " + number)

let kuadrat = () => {
    return number.map(num=>num*num)
}
console.log("angka setelah kuadrat : " + kuadrat())
