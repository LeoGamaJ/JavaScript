// Cinco ou mais, um é grátis

/*
let preço = [100, 500, 100, 200, 50];
//var client = preço;

if (preço.length >= 5){
    preço = preço.sort()
    preço = preço[0] - preço 
    console.log(preço)
    //console.log(preço[0])

  //  console.log('OK!')

} else {
    console.log('PROMOÇÃO NÃO APLICÁVEL!')
}
*/

/*
let preço = [100, 500, 100, 200, 50];
//var client = preço;

if (preço.length >= 5){
    preço = preço.sort()
    //preço = preço[0] - preço 
    console.log(preço)
    //console.log(preço[0])

  //  console.log('OK!')

} else {
    console.log('PROMOÇÃO NÃO APLICÁVEL!')
}
*/
/*
*/

/*
function solucao(precos) {
  for(let i=0; i < precos.length; i++) {
    console.log(`A posição ${i} tem o valor ${precos[i]}`)
  }

}
solucao(100, 100, 125, 50, 10)
*/
/*
function solucao(precos) { 
  
  if (precos.length >= 5) {
    precos.sort()
    precos += precos
    precos = precos - precos[0]  
    console.log(precos)
    //console.log(preço[0])
  } else {
    console.log('PROMOÇÃO NÃO APLICÁVEL!')
  }
}
 
 
solucao(100, 100, 125, 50, 10)
*/

function solucao(precos) {
  for (i = 1; precos.length = i<= 4; precos++){
    console.log(precos + i)
  }
}
solucao(100, 100, 125, 50, 10)