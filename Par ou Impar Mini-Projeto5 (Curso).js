//receber uma quantidade de valores para avaliar
//função exibe se cada valor é par ou impar

//EXIBIR DE TODO INTERVALO

valorNumero(10);

function valorNumero(limite){
    for(let i = 0; i <= limite; i++){
        if(i % 2 == 0){
            console.log(i, 'Par');    
        }
            

        else{
            console.log(i, 'Impar');        
        }
            
            
    }
}


//EXIBIR APENAS DE UM

/*
exibirTipo(0);

function exibirTipo(limite){
    if (limite==0)
    {
        console.log('Par');
    }

    else if (limite%2==0){
        console.log('Par')
    }

    else if (limite%2!==0){
        console.log('Impar');
    }
}
*/