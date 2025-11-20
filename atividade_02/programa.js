var quant_dias_aulas = Number(prompt('Digite a quantidade de dias de aulas que tem no semestre: '));
var quant_dias_faltou = Number(prompt('Digite a quantidade de dias de que o aluno faltou: '));

var porcetagem_dias_faltatados = quant_dias_faltou * 100 / quant_dias_aulas;
var porcetagem_dias_idos = 100 - porcetagem_dias_faltatados;





//console.log("a porceagem de dias idos foi de ", porcetagem_dias_idos);
//console.log("a porceagem de dias faltados foi de ", porcetagem_dias_faltatados);



if (porcetagem_dias_faltatados > 25){
    console.log("o aluno reprovou por ter faltado muito!");
}else{
    
    var primeira_nota = Number(prompt('Digite a primeira nota que o aluno tirou no semestre: '));
    var segunda_nota = Number(prompt('Digite a segunda nota que o aluno tirou no semestre: '));
    var media_das_notas = (primeira_nota + segunda_nota) / 2
    
    if (media_das_notas >= 7){
        //console.log("o aluno está aprovado com a média", media_das_notas);
        //console.log(typeof media_das_notas)
        console.log("Número de aulas do semestre: " + quant_dias_aulas)
        console.log("Número de faltas do aluno: " + quant_dias_faltou)
        console.log("Percentual de presença do aluno: " + porcetagem_dias_idos)
        console.log("A primeira nota: " + primeira_nota)
        console.log("Segunda nota: " + segunda_nota)
        console.log("Nota complementar (recuperação): ")
        console.log("Situação final do aluno: Aprovado")
    }else if(media_das_notas >= 5 && media_das_notas < 7){
        console.log("o aluno está em recuperação.");
        var nota_recuperacao = Number(prompt('Digite a nota da recuperação que o aluno tirou na recuperação: '));
        var nova_media = (nota_recuperacao + media_das_notas) / 2
        if (nova_media >= 5){
            //console.log("o aluno está aprovado com a média de recuperação", nova_media);
            console.log("Número de aulas do semestre: " + quant_dias_aulas)
            console.log("Número de faltas do aluno: " + quant_dias_faltou)
            console.log("Percentual de presença do aluno: " + porcetagem_dias_idos)
            console.log("A primeira nota: " + primeira_nota)
            console.log("Segunda nota: " + segunda_nota)
            console.log("Nota complementar (recuperação): " + nova_media)
            console.log("Situação final do aluno: Aprovado")
        }else{
            //console.log("o aluno está não tirou a nota necessária na recuperação e esta reprovado.");
            console.log("Número de aulas do semestre: " + quant_dias_aulas)
            console.log("Número de faltas do aluno: " + quant_dias_faltou)
            console.log("Percentual de presença do aluno: " + porcetagem_dias_idos)
            console.log("A primeira nota: " + primeira_nota)
            console.log("Segunda nota: " + segunda_nota)
            console.log("Nota complementar (recuperação): " + nova_media)
            console.log("Situação final do aluno: Reprovado")
        }
    }else{
        //console.log("o aluno está reprovado no semestre.");
        console.log("Número de aulas do semestre: " + quant_dias_aulas)
        console.log("Número de aulas do semestre: " + quant_dias_aulas)
        console.log("Número de faltas do aluno: " + quant_dias_faltou)
        console.log("Percentual de presença do aluno: " + porcetagem_dias_idos)
        console.log("A primeira nota: " + primeira_nota)
        console.log("Segunda nota: " + segunda_nota)
        console.log("Nota complementar (recuperação): ")
        console.log("Situação final do aluno: Reprovado")
    }
}

