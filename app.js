const argv = require('./config/yargs').argv;
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

const colors = require('colors/safe');
// const argv = require('yargs')
//     .command('listar', 'Imprime en consola la tabla de multiplicar', {

//         base: {
//             demand: true,
//             alias: 'b',
//             default: 10
//         },
//         limite: {

//             alias: 'l'
//         }

//     }).command('crear', 'Genera un archivo con la tabla de multiplicar', {

//         base: {
//             demand: true,
//             alias: 'b',
//             default: 10
//         },
//         limite: {

//             alias: 'l'
//         }

//     }).help()
//     .argv;

// console.log('La base es: ', argv.base);
// console.log('El limite es:', argv.limite);

let comando = argv._[0];

switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado:`, colors.green(archivo)))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');

}


// let { crearArchivo } = require('./multiplicar/multiplicar');

// let base = '2';

// let argv = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1]

// crearArchivo(base)
//     .then(archivo => console.log(`Archivo ${archivo} creado`))
//     .catch(err => console.log(err));