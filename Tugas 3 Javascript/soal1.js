while (true) {

    let prompt = require('prompt-sync')({sigint: true});
    let angka = prompt('Enter a Number: ');

    if(angka >= 0){
        if (angka % 2 == 0){
            let pangkat = Math.sqrt(angka);
            console.log(`Hasil akar dari ${angka} adalah ${pangkat}`);
        } else {
            console.log("Tidak bisa input bilangan ganjil.")
            break
        }
    } else {
        console.log("Tidak bisa input bilangan negatif.")
        break
    }

}
