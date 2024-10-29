function identitasUser(user){
    return `nama ${user.name} asal kota ${user.kota} alamat ${user.alamat}`
}

const user = {
    name: "Fauzi Rahmat Ramadhan",
    alamat: "Jl. kayu jati v",
    kota: "Jakarta"
}

console.log(identitasUser(user));