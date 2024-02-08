const perguntas = [
    {
        pergunta: "Qual é a função do operador 'typeof' em JavaScript?",
        respostas: [
            "A) Determinar se uma variável é verdadeira ou falsa",
            "B) Retornar o tipo de dados de uma variável",
            "C) Concatenar strings",
        ],
        correta: 1
    },
    {
        pergunta: "O que o método 'parseInt()' faz em JavaScript?",
        respostas: [
            "A) Arredonda um número para o inteiro mais próximo",
            "B) Converte uma string para um número inteiro",
            "C) Retorna a parte decimal de um número",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a maneira correta de declarar uma variável em JavaScript?",
        respostas: [
            "A) let",
            "B) const",
            "C) var",
        ],
        correta: 0
    },
    {
        pergunta: "O que o método 'map()' faz em JavaScript?",
        respostas: [
            "A) Cria um novo array com o resultado da chamada de uma função para cada elemento do array",
            "B) Filtra os elementos de um array de acordo com uma função de teste",
            "C) Retorna o primeiro elemento que satisfaz a condição especificada",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a função do operador '===' em JavaScript?",
        respostas: [
            "A) Comparação de valores",
            "B) Atribuição",
            "C) Comparação de valores e tipos",
        ],
        correta: 2
    },
    {
        pergunta: "Qual é o resultado da expressão '3 + 2 + '5' em JavaScript?",
        respostas: [
            "A) '35'",
            "B) 10",
            "C) 75",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a saída do código 'console.log(typeof 42)' em JavaScript?",
        respostas: [
            "A) 'undefined'",
            "B) 'number'",
            "C) 'string'",
        ],
        correta: 1
    },
    {
        pergunta: "O que o método 'push()' faz em JavaScript?",
        respostas: [
            "A) Inverte a ordem dos elementos de um array",
            "B) Remove o último elemento de um array",
            "C) Adiciona um ou mais elementos ao final de um array e retorna o novo comprimento do array",
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a forma correta de escrever um comentário de uma linha em JavaScript?",
        respostas: [
            "A) <!-- comentário -->",
            "B) /* comentário */",
            "C) // comentário",
        ],
        correta: 2
    },
    {
        pergunta: "O que o método 'slice()' faz em JavaScript?",
        respostas: [
            "A) Remove o último elemento de um array",
            "B) Retorna uma cópia de uma parte do array dentro de um novo array selecionado de 'inicio' até 'fim' (fim não é incluído)",
            "C) Transforma os elementos de um array em uma única string",
        ],
        correta: 1
    },
];

const quiz = document.querySelector('#quiz')

const template = document.querySelector('template')

const corretas = new  Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

// loop ou laço de repetição
for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true) 
    quizItem.querySelector('h3').textContent = item.pergunta

    // Mostra as respostas
    for(let resposta of item.respostas) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)

        dt.querySelector('input').onchange = (event) => {
            const estaCorreta = event.target.value == item.correta
            
            corretas.delete(item)
            if(estaCorreta) {
                corretas.add(item)
            }

            mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
        }

        quizItem.querySelector('dl').appendChild(dt)
    }

    // Remove a linha de resposta
    quizItem.querySelector('dl dt').remove()

    // Coloca a pergunta na tela
    quiz.appendChild(quizItem)
}