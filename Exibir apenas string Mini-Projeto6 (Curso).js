//criar um método para ler propriedades de um objeto
//exibir somente as propriedades do tipo string que estão nesse objeto

const filme = {
    titulo: 'Vingadores',
    ano: 2019,
    diretor: 'Joss Whedon',
    personagem: 'Thor'
}

exibirPropriedades(filme);

function exibirPropriedades(obj){   
    for(prop in obj)
    {
        if(typeof obj[prop] === 'string')
        {
            console.log(prop, obj[prop])
        }
    }

}