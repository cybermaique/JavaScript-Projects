//COM OPERADOR TERNARIO:

/*let valorMaior = max(5, 10);
console.log(valorMaior);

function max(numero1,numero2){
    return numero1 > numero2 ? numero1: numero2;
}*/


//COM IF ELSE: 

let valorMaior = max(5, 12);
console.log(valorMaior);

function max(numero1,numero2){
    if (numero1 > numero2)
        return numero1;
    //ESSE ELSE NÃO É NECESSÁRIO, PQ SE BATER NO RETURN NUMERO1, O IF É VERDADEIRO.
    //SE IF FOR FALSO, VAI IR PRO RETURN NUMERO2.
        return numero2;
}