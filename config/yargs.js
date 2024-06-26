const argv = require('yargs').option(
    'b', {
    alias: 'base',
    type: 'number',
    demandOption: true
}
).option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false
    })
    .option(
        'h', {
        alias: 'hasta',
        type: 'number',
        demandOption: true
    }
    ).check((argv, options) => {
        console.log('yargs', argv)
        if (isNaN(argv.b) || isNaN(argv.h)) {
            throw ('La base y el hasta debe ser debe ser un número  ')
        }
        return true;
    }).argv
    console.log('entre en el archivo')
    console.log(argv)
    module.exports ={
        argv
    }