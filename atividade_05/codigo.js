// ====================================
// EXERCÍCIO 1 - Crescimento Populacional
// ====================================
function exercicio1() {
    let populacaoA = 80000;
    let populacaoB = 200000;
    const taxaA = 0.03; // 3%
    const taxaB = 0.015; // 1.5%
    let anos = 0;

    while (populacaoA < populacaoB) {
        populacaoA += populacaoA * taxaA;
        populacaoB += populacaoB * taxaB;
        anos++;
    }

    console.log(`Exercício 1: Serão necessários ${anos} anos para que a população do país A ultrapasse ou iguale a população do país B.`);
    console.log(`População A: ${populacaoA.toFixed(0)} habitantes`);
    console.log(`População B: ${populacaoB.toFixed(0)} habitantes\n`);
}

// ====================================
// EXERCÍCIO 2 - Números Pares e Ímpares
// ====================================
function exercicio2() {
    let pares = 0;
    let impares = 0;

    console.log("Exercício 2: Digite 10 números inteiros");

    for (let i = 1; i <= 10; i++) {
        let numero = parseInt(prompt(`Digite o ${i}º número:`));
        
        if (numero % 2 === 0) {
            pares++;
        } else {
            impares++;
        }
    }

    console.log(`\nExercício 2 - Resultados:`);
    console.log(`Quantidade de números pares: ${pares}`);
    console.log(`Quantidade de números ímpares: ${impares}\n`);
}

// ====================================
// EXERCÍCIO 3 - Menor, Maior e Soma
// ====================================
function exercicio3() {
    let n = parseInt(prompt("Exercício 3: Quantos números você deseja informar?"));
    
    let menor = Infinity;
    let maior = -Infinity;
    let soma = 0;

    for (let i = 1; i <= n; i++) {
        let numero = parseFloat(prompt(`Digite o ${i}º número:`));
        
        if (numero < menor) menor = numero;
        if (numero > maior) maior = numero;
        soma += numero;
    }

    console.log(`\nExercício 3 - Resultados:`);
    console.log(`Menor valor: ${menor}`);
    console.log(`Maior valor: ${maior}`);
    console.log(`Soma dos valores: ${soma}\n`);
}

// ====================================
// EXERCÍCIO 4 - Salário com Aumentos
// ====================================
function exercicio4Versao1() {
    const anoContratacao = 1995;
    const anoAtual = new Date().getFullYear();
    let salario = 1000.00;
    let percentualAumento = 0.0015; // 0.15% em 1996

    console.log(`Exercício 4 (Versão 1):`);
    console.log(`Ano 1995 - Salário inicial: R$ ${salario.toFixed(2)}`);

    for (let ano = 1996; ano <= anoAtual; ano++) {
        salario += salario * percentualAumento;
        console.log(`Ano ${ano} - Aumento: ${(percentualAumento * 100).toFixed(4)}% - Salário: R$ ${salario.toFixed(2)}`);
        
        if (ano >= 1996) {
            percentualAumento *= 2; // Dobra o percentual a partir de 1997
        }
    }

    console.log(`\nSalário atual do funcionário: R$ ${salario.toFixed(2)}\n`);
}

function exercicio4Versao2() {
    let salarioInicial = parseFloat(prompt("Exercício 4 (Versão 2): Digite o salário inicial do funcionário:"));
    const anoContratacao = 1995;
    const anoAtual = new Date().getFullYear();
    let salario = salarioInicial;
    let percentualAumento = 0.0015; // 0.15% em 1996

    console.log(`\nExercício 4 (Versão 2):`);
    console.log(`Ano 1995 - Salário inicial: R$ ${salario.toFixed(2)}`);

    for (let ano = 1996; ano <= anoAtual; ano++) {
        salario += salario * percentualAumento;
        console.log(`Ano ${ano} - Aumento: ${(percentualAumento * 100).toFixed(4)}% - Salário: R$ ${salario.toFixed(2)}`);
        
        if (ano >= 1996) {
            percentualAumento *= 2;
        }
    }

    console.log(`\nSalário atual do funcionário: R$ ${salario.toFixed(2)}\n`);
}

// ====================================
// EXERCÍCIO 5 - Área e Perímetro do Círculo
// ====================================
function exercicio5() {
    let raio = parseFloat(prompt("Exercício 5: Digite o raio do círculo:"));
    
    const area = Math.PI * Math.pow(raio, 2);
    const perimetro = 2 * Math.PI * raio;

    console.log(`\nExercício 5 - Resultados:`);
    console.log(`Raio: ${raio}`);
    console.log(`Área do círculo: ${area.toFixed(2)}`);
    console.log(`Perímetro do círculo: ${perimetro.toFixed(2)}\n`);
    
    return { area, perimetro };
}

// ====================================
// EXERCÍCIO 6 - Retorno de Investimento
// ====================================
function exercicio6() {
    let capital = parseFloat(prompt("Exercício 6: Digite o capital inicial (R$):"));
    let taxa = parseFloat(prompt("Digite a taxa de juros mensal (%):"));
    let tempo = parseInt(prompt("Digite o tempo do investimento (meses):"));
    
    // Converte a taxa de percentual para decimal
    let taxaDecimal = taxa / 100;
    
    // Calcula o montante: M = C * (1+i)^t
    let montante = capital * Math.pow(1 + taxaDecimal, tempo);

    console.log(`\nExercício 6 - Retorno do Investimento:`);
    console.log(`Capital inicial: R$ ${capital.toFixed(2)}`);
    console.log(`Taxa de juros: ${taxa}% ao mês`);
    console.log(`Tempo: ${tempo} meses`);
    console.log(`Montante final: R$ ${montante.toFixed(2)}`);
    console.log(`Lucro obtido: R$ ${(montante - capital).toFixed(2)}\n`);
    
    return montante;
}

// ====================================
// EXECUTAR OS EXERCÍCIOS
// ====================================

// Descomente a linha do exercício que deseja executar:

// exercicio1();
// exercicio2();
// exercicio3();
// exercicio4Versao1();
// exercicio4Versao2();
// exercicio5();
// exercicio6();

// Para executar todos de uma vez (não recomendado devido aos prompts):
// exercicio1();
// exercicio2();
// exercicio3();
// exercicio4Versao1();
// exercicio4Versao2();
// exercicio5();
// exercicio6();

// console.log("Exercícios carregados! Descomente a função que deseja executar.");