
//const sp=require('express');
const {crearArchivo} =require('./multiplicar.js')
const colors=require('colors');

//let base=7;
let arg=process.argv;   //ejecutabdo node app --base=6
let parametro=arg[2];
let base=parametro.split('=')[1];
console.log(base.blue);

crearArchivo(base)
.then(archivo=>console.log(`Archivo creado: ${archivo}`))
.catch(e=>console.log(e));
