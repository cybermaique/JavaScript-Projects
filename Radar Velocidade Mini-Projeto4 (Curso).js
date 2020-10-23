//Velocidade máxima de 70kmh
//A cada 5kmh acima do limite você ganha 1 ponto
//Math.Floor() serve pra arredondar pro decimal menor mais próximo
//Caso maior ou igual a 12 pontos = "Carteira suspendida"
 

verificarVelocidade(74);

function verificarVelocidade(velocidade){
    const velocidadeMaxima = 70;
    const KmPorPonto = 5;

    if (velocidade <= velocidadeMaxima)
        console.log('Velocidade dentro do permitido.');

    else{
        const pontos = Math.floor(((velocidade - velocidadeMaxima) / KmPorPonto));

        if (pontos >= 12)
            console.log('Carteira suspensa');

        else
            console.log('Pontos',pontos);
    }

}