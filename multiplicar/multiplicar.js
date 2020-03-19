//requireds
const fs = require('fs');
const colors = require('colors');
// const fs = require('express');
// const fs = require('./');


let listarTabla = (base, limite = 10) => {

    let data = '';

    console.log('================'.green);
    console.log(`Tabla de ${ base }`.green);
    console.log('================'.green);


    for (let i = 0; i <= limite; i++) {
        data += `${ base } * ${ i } = ${ base * i }\n`;
    }
    console.log(data);
}


let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            return reject(`El valor ingresado no es un numero`)
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ base * i }\n`;
        }

        fs.writeFile(`tablas/tabla-${ base }-${ limite }.txt`, data, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(`tabla-${ base }-al-${ limite }.txt`)
            }

        });

    })

}

// let crearArchivo = (base) => {

//     return new Promise((resolve, reject) => {

//         if (!Number(base)) {
//             return reject(`El valor ingresado no es un numero`)
//         }

//         let data = '';

//         for (let i = 1; i <= 12; i++) {
//             data += `${ base } * ${ i } = ${ base * i }\n`;
//         }

//         fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve(`tabla-${ base }.txt`)
//             }

//         });

//     })

// }

module.exports = {
    crearArchivo,
    listarTabla
}