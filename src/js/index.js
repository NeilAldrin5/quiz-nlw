const perguntas = [
    {
        pergunta: "Qual palavra-chave é usada para declarar uma variável em JavaScript?",
        respostas: [
            "var",
            "let",
            "const"
        ],
        correta: 2
    },
    {
        pergunta: "Qual função é usada para imprimir algo no console?",
        respostas: [
            "log()",
            "print()",
            "console.log()"
        ],
        correta: 2
    },
    {
        pergunta: "Qual destes métodos é usado para adicionar um elemento ao final de um array em JavaScript?",
        respostas: [
            "append()",
            "push()",
            "add()"
        ],
        correta: 1
    },
    {
        pergunta: "Como você pode comentar uma única linha em JavaScript?",
        respostas: [
            "// Comentário",
            "/* Comentário */",
            "# Comentário"
        ],
        correta: 0
    },
    {
        pergunta: "Qual função é usada para converter uma string em um número inteiro em JavaScript?",
        respostas: [
            "parseInt()",
            "toFloat()",
            "toInteger()"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o operador usado para comparar dois valores em JavaScript?",
        respostas: [
            "==",
            "=",
            "==="
        ],
        correta: 2
    },
    {
        pergunta: "Como você declara uma função em JavaScript?",
        respostas: [
            "function myFunction()",
            "myFunction() {}",
            "def myFunction():"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o símbolo usado para concatenar strings em JavaScript?",
        respostas: [
            "&",
            "+",
            ","
        ],
        correta: 1
    },
    {
        pergunta: "Qual método é usado para remover o último elemento de um array em JavaScript?",
        respostas: [
            "remove()",
            "pop()",
            "delete()"
        ],
        correta: 1
    },
    {
        pergunta: "Qual é o tipo de dados que representa uma coleção ordenada de elementos?",
        respostas: [
            "Array",
            "Object",
            "String"
        ],
        correta: 0
    }
];
//pega qualquer elemento la dentro, "#" significa que busca pelo id
const quiz = document.querySelector('#quiz')
//pega o conteudo da tag template
const template = document.querySelector('template')
//guardas as corretas sem repetir a informação
const corretas = new Set()
//pega o total de perguntas
const totalDePerguntas = perguntas.length
//guarda o span
const mostrarTotal = document.querySelector('#acertos span')
//muda o conteudo do span
mostrarTotal.textContent = corretas.size + ' de '+totalDePerguntas

for (const item of perguntas) {
    //clona todas as tag da variavel template, "true" significa que clona todos
    const quizItem = template.content.cloneNode(true)
    //pega o h3 e substitui o conteudo de texto pelas perguntas
    quizItem.querySelector('h3').textContent = item.pergunta
    //gera as respostas na tela
    for (let resposta of item.respostas) {
        //coloca na variavel dt o input e o span dentro das tags dl e dt
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        //pega o span e substitui o conteudo de texto pelas respostas
        dt.querySelector('span').textContent = resposta
        //muda o atribudo name do input de acordo com o indice da resposta
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        //muda o valor do atribudo "value" do input com o indice de cada resposta
        dt.querySelector('input').value = item.respostas.indexOf(resposta)
        //cria uma função para quando o input muda
        dt.querySelector('input').onchange = (event) => {
            //coloca na variavel se esta correta a resposta,comparando com o "correta" das perguntas
            const estaCorreta = event.target.value == item.correta
            //remove o item o item para verificar
            corretas.delete(item)

            if(estaCorreta){
                //add um item se acertar
                corretas.add(item)
            }
            //mostra a quantidade de items/as corretas
            mostrarTotal.textContent = corretas.size + ' de '+totalDePerguntas
        }


        //mostra as resposta na tela,add dentro do dl as respostas
        quizItem.querySelector('dl').appendChild(dt)
    }
    //remove o primeiro ele clonado que tava aparecendo na tela
    quizItem.querySelector('dl dt').remove()

    //add um filho a variavel quiz, ou seja coloca a pergunta na tela
    quiz.appendChild(quizItem)
}
