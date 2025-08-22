import random, math

quant_pessoas = 15
m_or_f = ["m","f"]
alturas = []
generos = []
soma_alturas_masculinas = 0
quant_masculinos = 0
quant_femininos = 0

for i in range(0, quant_pessoas):
    alturas.append(random.uniform(1.0, 2.2))
    generos.append(random.choice(m_or_f))
    #print(f"{i+1} - {alturas[i]:.2f}")
    #print(f"{generos[i]}")

lista_alturas_formatadas = [f'{num:.2f}' for num in alturas]

maior_altura = max(alturas)
menor_altura = min(alturas)

for i in range(0, len(generos)):
    if generos[i] == "m":
        soma_alturas_masculinas += alturas[i]
        quant_masculinos += 1
    if generos[i] == "f":
        quant_femininos += 1

#media_de_alturas = soma_alturas / len(alturas)

media_de_alturas_masculinas = soma_alturas_masculinas / quant_masculinos


print("Os seguintes dados foram levado em consideração:")
print(generos)
print(lista_alturas_formatadas)

print(f"a maior altura é {maior_altura:.2f} e a menor altura é {menor_altura:.2f}")
print(f"a média da altura do público masculino é {media_de_alturas_masculinas:.2f}")
print(f"o número de pessoas do sexo feminino é {quant_femininos}")

