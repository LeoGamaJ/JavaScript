//Mobile app

function solucao(tempo, distancia) {
	if (tempo < 05){
        valor1 = 600;
        console.log(valor1);

    } else if (tempo >= 05 && tempo <= 60) {
        valor2 = (tempo * 100) + (distancia * 50);
        console.log(valor2);

    } else {

        if(distancia <= 100) {
            valor3 = distancia * 200;
            console.log(valor3); 
        } else {
            valor4 = distancia * 150;
            console.log(valor4);
        }
        
    }

}

solucao(30, 150)