const fs = require('fs')
const colors = require('colors')

/*const crearArchivo = (tabla) =>{
    return new Promise ((resolve, reject)=>{
       
        let salida = '';
        for(let i = 1; i<=10 ; i++){
            
            salida += `${tabla} x ${i} = ${tabla*i} \n`;
        }
        console.log(salida);
    
        /*fs.writeFile('tabla5.txt', salida,(err) => {
            if (err) throw err;
            console.log('el archivo tabla5.txt fue creado');
        });
        fs.writeFileSync( `tabla${tabla}.txt`, salida)
        resolve(`tabla${tabla}.txt`)
        
    })
   

}*/
//otra forma de hacerlo
const crearArchivo = async (tabla =5 , hasta =10) =>{
    console.log('ME LLAMO FLAVIA PÉREZ'.red)
    try{

        let salida = '';
        for(let i = 1; i<=hasta ; i++){
            
            salida += `${tabla} ${'x'.blue} ${i} = ${tabla*i} \n`;
        }
        console.log(salida);
    
        
        fs.writeFileSync( `tabla${tabla}.txt`, salida)
        return `tabla${tabla}.txt`;
    } catch(err){
        throw err;
    }
        
  
   

}
module.exports ={
    crearArchivo
}