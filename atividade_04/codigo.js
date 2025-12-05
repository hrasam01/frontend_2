// o exemplo que estou usando é compra de gasolina.
// produto: gasolina
// preço do litro: R$5,89


preco = prompt("Qual o preço da gasolina ?")
quantidade = prompt("Quantos litros você quer comprar ?")


function calcularTotal(preco, quanti) {
    return preco * quanti;
}

//console.log("valor total da compra: " + calcularTotal(5.89, 12));

valorTotal = calcularTotal(preco, quantidade);

function aplicarDesconto(valor){
    if (valor > 100){
        return valor - valor * 0.10;
    }else{
        console.log("Valor é menor que R$100,00, dessa forma não há desconto.");
        return valor;
    }
}

valorComDesconto = aplicarDesconto(valorTotal);


function exibirResumo(valorCheio, valorDesconto){
    if (valorDesconto == valorCheio){
        console.log("Sua compra não teve o desconto de 10%, porque  foi menor que R$100,00");
        console.log("Valor a ser pago R$"+valorComDesconto);
    }else{
        console.log("Sua compra teve o desconto de 10%, porque foi de R$100,00 para cima");
        console.log("Valor sem o desconto: R$"+valorTotal);
        console.log("Valor com o desconto de 10% : R$"+valorComDesconto);
    }
}

exibirResumo(valorTotal, valorComDesconto);