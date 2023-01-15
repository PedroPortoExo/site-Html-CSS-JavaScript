let questions = [
    {
        quiz: "Quem foi o ultimo a entrar na tripulação do Luffy ?:",
        resposta: {
            a: 'brook',
            b: 'Jinbe',
            c: 'Sanji'
        },
        respostaCorreta: 'b'
    },
    {
        quiz: "Qual dos personagens não tem magia ?:",
        resposta: {
            a: 'Asta',
            b: 'Yami',
            c: 'Noelle'
        },
        respostaCorreta: 'a'
    },
    {
        quiz: "Qual era a profissão do Lugh na vida passada ?",
        resposta: {
            a: 'Programador',
            b: 'Assassino',
            c: 'Escritor'
        },
        respostaCorreta: 'b'
    },
    {
        quiz: "O que acontece com o protagonista de arifureta no inicio ?",
        resposta: {
            a: 'tropeça e cai',
            b: 'é puxado junto pro buraco',
            c: 'é traido por um colega'
        },
        respostaCorreta: 'c'
    },
    {
        quiz: "O que ocorre apos o prota cai no buraco em arifureta ?",
        resposta: {
            a: 'Acha uma agua milagrosa',
            b: 'Sobrevive todo fudido',
            c: 'Aterrisa em algo confortavel'
        },
        respostaCorreta: 'a'
    },
    {
        quiz: "Qual a missão do Protagonista de Ansatsusha ?",
        resposta: {
            a: 'Matar o Rei Demonio',
            b: 'Matar o Heroi',
            c: 'Matar uma bruxa maligna'
        },
        respostaCorreta: 'b'
    },
    {
        quiz: "Qual o sonho do prota de Black Clover",
        resposta: {
            a: 'Se tornar Rei dos Magos',
            b: 'Se tornar o mais forte do reino',
            c: 'Voltar pra vila pobre e ajudar ela'
        },
        respostaCorreta: 'a'
    },
    {
        quiz: "Qual o sonho do Luffy ?",
        resposta: {
            a: 'Encontrar o one piece',
            b: 'Ser o melhor marinheiro',
            c: 'Ser o Rei dos Piratas'
        },
        respostaCorreta: 'c'
    },
    {
        quiz: "Quem o prota de arifureta encontra no inicio?",
        resposta: {
            a: 'Um anjo que o ajuda',
            b: 'Uma vampira presa',
            c: 'Um deus que buffa ele'
        },
        respostaCorreta: 'b'
    },
];

let quizcont = document.getElementById('quiz');
let restcont = document.getElementById('resultado');
let submcont = document.getElementById('receba');

generate(questions, quizcont, restcont, submcont);

function generate(questions, quizcont, restcont,_submcont){

    function showQuest(questions, quizcont) {

        let saida = [];
        let resposta;

        for (i = 0; i < questions.length; i++) {

            resposta = [];

            for (letter in questions[i].resposta) {
                resposta.push(
                    '<h5>'
                    + '<input type="radio"  name="quiz' + i + '"value="' + letter + '">'
                    //+ letter + ': '
                    + questions[i].resposta[letter]
                    + '</h5>'
                );
            }

            saida.push(
                '<hr><div class="quiz"><h4>' + questions[i].quiz + '</h4></div>'
                + '<div class="resposta">' + resposta.join('') + '</div>'
            );
        }

        quizcont.innerHTML = saida.join('');
    }


    function showResults(questions, quizcont, restcont){

        let respocont = quizcont.querySelectorAll('.resposta');

        let userRespo = '';
        let correctRespo = 0;

        for (i = 0; i < questions.length; i++) {
            userRespo = (respocont[i].querySelector('input[name=quiz'+i+']:checked')||{}).value;

            if (userRespo === questions[i].respostaCorreta) {
                correctRespo++;
                respocont[i].style.color = "rgb(0, 217, 40)";
            }
            else {
                respocont[i].style.color = "red";
            }
        }
        restcont.innerHTML = correctRespo + ' de ' + questions.length;
    }
    showQuest(questions, quizcont);
    receba.onclick = function () {
        showResults(questions, quizcont, restcont);
    }
}
