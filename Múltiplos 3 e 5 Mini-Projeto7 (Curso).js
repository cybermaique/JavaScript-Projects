/*

//  ▶▶▶▶▶▶▶ Obter a média de nota escolar a partir de um array

//0-59: F
//60-69: D
//70-79: C
//80-89: B
//90-100: A

const array = [50, 50, 69]

mediaDoAluno(array);

function mediaDoAluno(notas){
    let valor = 0;
    let media = 0;

    for(i = 1; i <= notas.length ; i++)
    {
        valor += array[i];
    }

    media = (valor/notas.length);
    console.log('Média: ', media);
    
    if (media<60){
        console.log('Nota: F');
    }
    
    else if (media<70){
        console.log('Nota: D');
    }
}


*/

//  ▶▶▶▶▶▶▶ Obter a média de nota escolar a partir de um array

//0-59: F
//60-69: D
//70-79: C
//80-89: B
//90-100: A

const array = [70, 70, 80]

console.log(array.length-1);

    let valor = 0;
    for(i = 0; i <= array.length-1 ; i++)
    {
        valor += array[i];
        console.log(valor);
    }
    console.log(valor/array.length);
       */


/*
//  ▶▶▶▶▶▶▶ Obter a média de nota escolar a partir de um array

//0-59: F
//60-69: D
//70-79: C
//80-89: B
//90-100: A

const array = [70, 70, 80];

console.log(array);
console.log(mediaDoAluno(array));

function mediaDoAluno(notas) {
    let soma = 0;
    for (let nota of notas) {
        soma += nota;
    }

    const media = soma/(notas.length);

    if(media <= 59){
        return 'F';
    }

    else if(media <= 69){
        return 'D';
    }

    if(media <= 79){
        return 'C';
    }

    if(media <= 89){
        return 'B';
    }

    if(media <= 100){
        return 'A';
    }
}

*/