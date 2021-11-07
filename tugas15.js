function pythagoras(AB, BC) {
    let AC = Math.sqrt(Math.pow(AB, 2) + Math.pow(BC, 2));

    console.log(`Nilai AB : ${AB}`);
    console.log(`Nilai BC : ${BC}`);
    console.log(`panjang sisi AC pada segitiga siku-siku tersebut adalah : ${AC} cm`);
}

pythagoras(8, 6);