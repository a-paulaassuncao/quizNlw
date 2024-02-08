const perguntas = [
    {
        pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
        respostas: [
            "let variavel = 10;",
            "variable x = 10;",
            "const 123 = 10;",
        ],
        correta: 0
    },
    {
        pergunta: "Como você adiciona um comentário de linha em JavaScript?",
        respostas: [
            "// Este é um comentário",
            "/* Este é um comentário */",
            "' Este é um comentário",
        ],
        correta: 0
    },
    {
        pergunta: "Qual dos seguintes métodos converte uma string para um número inteiro em JavaScript?",
        respostas: [
            "parseInt()",
            "parseFloat()",
            "toInteger()",
        ],
        correta: 0
    },
    {
        pergunta: "Como você verifica se uma variável é do tipo string em JavaScript?",
        respostas: [
            "typeof variable === 'string'",
            "variable instanceof String",
            "variable.isString()",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a diferença entre '==' e '===' em JavaScript?",
        respostas: [
            "'==' compara apenas valores, '===' compara valores e tipos de dados",
            "'===' compara apenas valores, '==' compara valores e tipos de dados",
            "Não há diferença, ambos fazem a mesma coisa",
        ],
        correta: 0
    },
    {
        pergunta: "O que o método 'forEach()' faz em JavaScript?",
        respostas: [
            "Itera sobre os elementos de um array",
            "Remove o último elemento de um array",
            "Adiciona um elemento no início de um array",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a função do operador '&&' em JavaScript?",
        respostas: [
            "Operador lógico AND",
            "Operador lógico OR",
            "Operador de concatenação de strings",
        ],
        correta: 0
    },
    {
        pergunta: "Como você cria uma função em JavaScript?",
        respostas: [
            "function minhaFuncao() {}",
            "let minhaFuncao = function() {}",
            "ambas as opções estão corretas",
        ],
        correta: 2
    },
    {
        pergunta: "O que é o DOM em JavaScript?",
        respostas: [
            "Document Object Model - estrutura de um documento HTML/XML",
            "Data Object Model - uma forma de armazenar dados",
            "Digital Output Module - uma saída digital em hardware",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a diferença entre 'var', 'let' e 'const' na declaração de variáveis?",
        respostas: [
            "'var' tem escopo de função, 'let' e 'const' têm escopo de bloco",
            "'let' tem escopo de bloco, 'var' e 'const' têm escopo de função",
            "'const' cria uma constante imutável, enquanto 'let' e 'var' são mutáveis",
        ],
        correta: 0
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