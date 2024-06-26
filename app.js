
const argv = require('./config/yargs')
const { number } = require('yargs');
const { crearArchivo } = require('./helpers/multiplicar')
console.clear();




const tabla = 5;


if(argv.argv.l){
console.log(argv.argv.b)
crearArchivo(argv.argv.b, argv.argv.h)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(error => console.log(error))

}
console.log(process.argv)
console.log(argv.b)
//const [, , argv3] = process.argv
//console.log(argv3)
