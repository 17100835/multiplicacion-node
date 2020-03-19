const opts = {

    base: {
        demand: true,
        alias: 'b',
        default: 10
    },
    limite: {

        alias: 'l'
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'Genera un archivo con la tabla de multiplicar', opts)
    .help()
    .argv;

module.exports = {

    argv

}