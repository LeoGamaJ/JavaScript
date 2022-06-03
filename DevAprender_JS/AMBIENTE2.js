// Cinema:

var obj = {

    temIngresso: true,
    idade: 23,
    temCarteirinha: true,
    censura: 16,
    estaComPais: false
}

if (obj['temIngresso'] === true) {
    if (obj['idade'] >= obj['censura'] || obj['estaComPais'] === true){
        if (obj['temCarteirinha'] === true || obj['idade'] <= 18) {
            console.log('MEIA');
        } else {
            console.log('INTEIRA');   
        }
    } else {
        console.log('ACESSO NEGADO')
    } 
} else {
    console.log('ACESSO NEGADO')
}

