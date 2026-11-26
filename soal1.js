//fungsi Void
function perkenalanNama(nama, kelas) {
    console.log ('===============')
    console.log ('Nama :' + nama)
    console.log ('Kelas :' + kelas)
    console.log ('===============')
}

perkenalanNama('Ibra', '10.2')
perkenalanNama('Marvel', '10.2')
perkenalanNama('Rafiza', '10.2')

// fungsi nonVoid
function luasPersegi(sisi) {
    return sisi*sisi
}

let luas1 = luasPersegi (5)
let luas2 = luasPersegi (8)

console.log ('Luas persegi pertama: '+ luas1)
console.log ('Luas persegi kedua: '+ luas2)
console.log ('Jumlah kedua luas'+ (luas1 + luas2))


//Non-void: mwnghasilkan nilai
function kelilingPersegi(sisi) {
    return 4 * sisi
}

//Void: menampilkan hasil 
function cetakKeliling(sisi) {
    let hasil = kelilingPersegi(sisi)
    console.log('Peregi dengan sisi' + sisi + 'memiliki keliling' +hasil)
}
cetakKeliling(6)
cetakKeliling(10)