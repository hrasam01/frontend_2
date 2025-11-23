let nomes = ["João", "José", "Maria", "Raimunda", "Benedita"]; // criando um arrays de nomes

console.log(nomes[2]); // imprimindo o terceiro elemento do array.

nomes.push("Cláudia"); // adicionando um elemento ao final do array

nomes.unshift("Antônio"); // adicionando um elemento ao início do array

console.log(nomes); // imprimindo array atualizado

nomes.pop(); // removendo o último elemento do array

console.log(nomes); // imprimindo array atualizado

let numeros = [2, 4, 6, 8]; // criando um arrays de números

let resultado = numeros.map((valor, indice, array) => {
    console.log(`Valor: ${valor}, Índice: ${indice}, Array: [${array}]`)
    return valor * 2 // multiplica cada valor por dois
});

console.log(resultado); // imprimindo o array dos números atualizados


let numeros2 = [1, 3, 5, 7, 9]; // criando um arrays de números

let filtrados = numeros2.filter((valor, indice, array) => {
    console.log(`Valor: ${valor}, Índice: ${indice}, Array: [${array}]`);
    return valor > 5; // filtra apenas os números maiores que cinco
});

console.log(filtrados); // imprimindo o array dos números atualizados