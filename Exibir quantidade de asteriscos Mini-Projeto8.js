//  Criar função que exibe a quantidade de * que a linha possui
//  ▶▶▶▶▶▶▶ EXIBIR UM EM BAIXO DO OUTRO

asteriscos(10);

function asteriscos(numero){
    let padrao = '';

    for(let linhas = 0; linhas< numero; linhas++){
        padrao+='*';
        console.log('\n',padrao);
    }
    
    
}

//  ▶▶▶▶▶▶▶ EXIBIR APENAS 1 VEZ
/*
asteriscos(10);

function asteriscos(numero){
    let padrao = '';

    for(let linhas = 0; linhas< numero; linhas++){
        padrao+='*';
        
    }

    console.log('\n',padrao);    
    
}
*/