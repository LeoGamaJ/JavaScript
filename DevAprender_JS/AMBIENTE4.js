//JoKenPo

// Pedra GANHA de Tesoura
// Papel GANHA de Pedra
// Tesoura GANHA de Papel, mas PERDE de Pedra
// Caso ambos os jogadores joguem a mesma coisa, há um empate

function solucao(joao, andre) {
    if (joao === 'PEDRA' && andre === 'TESOURA') {
        console.log('JOAO');
    } else if (joao === 'PEDRA' && andre === 'PAPEL') {
        console.log('ANDRE');
    } else if (joao === 'TESOURA' && andre === 'PAPEL') {
        console.log('JOAO');
    }else if (joao === 'TESOURA' && andre === 'PEDRA') {
        console.log('ANDRE');
    }else if (joao === 'PAPEL' && andre === 'PEDRA') {
        console.log('JOAO');
    }else if (joao === 'PAPEL' && andre === 'TESOURA') {
        console.log('ANDRE');
    } else{
        console.log('EMPATE');
    }
}

solucao('PEDRA', 'PEDRA')
