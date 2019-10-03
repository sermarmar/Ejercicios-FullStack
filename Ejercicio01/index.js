const fs = require('fs');

function grab(flag){

    let index = process.argv.indexOf(flag);
    return (index === -1) ? console.log("Este comando no existe") : process.argv[index+1];
 
}

let method = process.argv[2];
if(/^--/g.test(method)){
    if('--dir' == method){
        let dir = grab(method);
        
        leerMd(dir);
    }
    else{
        console.log("Ese método es incorrecto");
    }
}
else{
    let dir = process.argv[2];
    if(method == null || method == ''){
        dir = '.'
    }
    leerMd(dir);
}


function leerMd(dir){
    console.log("Buscando directorio" + dir);
    if(fs.existsSync(dir)){
        console.log("Buscando ficheros md");
        fs.readdir(dir, (err, files) => {
            let filesMD = files.filter(file => {
                return /.md$/g.test(file);
            });
            if(filesMD.length > 0){
                filesMD.forEach(fileMD => {
                    fs.readFile(dir+'/'+fileMD, 'UTF-8', (err, content) => {
                        console.log(content);
                    });
                });
            }
            else{
                console.log("No tiene ficheros Markdown");
            }

        });   
    }
    else{
        console.log("No existe el directorio");
    }
    
}