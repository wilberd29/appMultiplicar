const fs=require('fs');

crearArchivo =(base) =>{
    return new Promise((resolve, reject)=>{

        if(!Number(base)) {
            reject('La base no es un número');
            return;
        }
    
        let data='';
    for(let i=1; i<=12; i++) {
        console.log(`${base} * ${i} = ${base *i}`.yellow);
        data+=`${base} * ${i} = ${base *i}\n`;
    }

fs.writeFile(`./tablas/tabla${base}.txt`, data, (err)=>{
    if(err) throw err;
    console.log('El archivo se ha grabado');
});
    })
}

module.exports = {crearArchivo}

