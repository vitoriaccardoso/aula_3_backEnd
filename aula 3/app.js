    /*****************************************************
     * Objetivo: Realizar o calculo da média escolar de um aluno
     * Data: 09/08/2023
     * Autora: Vitória
     * Versão:1.0
     ****************************************************/


    var readline = require ('readline');

    var entradaDados = readline.createInterface({
        input: process.stdin,
        output: process.stdout
        
        
        });
        /*
    var - Permite criar uma variável no escopo global do código que fica ativo em toda parte do projeto

    let- Permite criar uma variável no escopo local do código, que fica ativa apenas{
    dentro daquele bloco de programação
    }
    const - Permite criar um espaço em memoria para um conteudo que não sera alterado, podendo ser no escopo local ou 
    global
    */

        

    //entrada de dados para o nome do aluno
        entradaDados.question('Digite seu nome: ', function(nomeUsuario){
            var nome = nomeUsuario;


    //entrada de dados nome do curso
        entradaDados.question('Digite seu curso: ', function(nomeCurso){

            var curso = nomeCurso;

    //entrada de dados nome da disciplina
        entradaDados.question('Digite a disciplina: ', function(disciplina){
            var disciplina = disciplina;
            
            //entrada dados notas
            entradaDados.question('Digite a primeira nota: ', function(numero1){
                var numero1 = numero1;

                entradaDados.question('Digite a segunda nota: ', function(numero2){
                    var numero2 = numero2;
                    

            entradaDados.question('Digite a terceira nota: ', function(numero3){
                    var numero3 = numero3;

                    
            entradaDados.question('Digite a quarta nota: ', function(numero4){
                var numero4 = numero4;


                if(numero1 == '')
        

            var resultado = Number (numero1) + Number(numero2) + Number (numero3) + Number(numero4);


                console.log('Nome: ' + nome);
                console.log('Curso: ' + curso);
                console.log('Disciplina: ' + disciplina);
                console.log('Sua média: ' + resultado/4);
                console.log('Notas: ' + numero1 + "+" + numero2 +"+" + numero3 + "+" + numero4 +  "/" + "4" + "=" + resultado/4) ;



    })
        })
    })
    })
        })
    })
        })