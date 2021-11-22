function frutas(fruta){
    var frutaSelecionada;
    switch(fruta){
        case 'maça':
            console.log('Não vendemos esta fruta aqui.');
            break;
        case 'kiwi':
            console.log('Estamos com escassez de kiwis');
            break;
        case 'melancia':
            console.log('Aqui está, são 3 reais o quilo.');
            break;
        default:
            console.log('Procure o administrador do sistema!');        
    }
}
console.log(frutas('uva'));

function aumentoDeSalario(salario){
    var salarioNovo;
    var valorDoAumento;
    if(salario <= 280){
        valorDoAumento = salario * 0.2;
        salarioNovo = salario + valorDoAumento;
        console.log(`O salário antes do reajuste: ${salario} \nO percentual de aumento aplicado: 20% \nO valor do aumento: ${valorDoAumento} \nO novo salário, após o aumento: ${salarioNovo}`) 
    }
    else if(salario >=280 && salario <= 700){
        valorDoAumento = salario * 0.15;
        salarioNovo = salario + valorDoAumento;
        console.log(`O salário antes do reajuste: ${salario} \nO percentual de aumento aplicado: 15% \nO valor do aumento: ${valorDoAumento} \nO novo salário, após o aumento: ${salarioNovo}`)
    }
    else if(salario >=700 && salario <= 1500){
        valorDoAumento = salario * 0.10;
        salarioNovo = salario + valorDoAumento;
        console.log(`O salário antes do reajuste: ${salario} \nO percentual de aumento aplicado: 10% \nO valor do aumento: ${valorDoAumento} \nO novo salário, após o aumento: ${salarioNovo}`)
    }
    else {
        valorDoAumento = salario * 0.05;
        salarioNovo = salario + valorDoAumento;
        console.log(`O salário antes do reajuste: ${salario} \nO percentual de aumento aplicado: 5% \nO valor do aumento: ${valorDoAumento} \nO novo salário, após o aumento: ${salarioNovo}`)
    }
}

console.log(aumentoDeSalario(1850));