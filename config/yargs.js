const colors = require('colors');

const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Base de la tabla de multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Listar la tabla de multiplicar'
    })  
     .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Hasta qué número multiplicar'
    })       
    .check((argv, options) => {
        //console.log('yargs', argv);
        if (isNaN(argv.b)) {
            throw 'La base tiene que ser un número';
        }
        return true;
    }).argv;

    module.exports = argv;